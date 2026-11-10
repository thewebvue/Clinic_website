/* Clearvue Dental & Skin Clinic: shared script for every page.
   Each feature checks that its elements exist, so one file serves all pages. */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Settings you can change ---------- */
  const CONFIG = {
    // Paste a form endpoint (Formspree, Google Apps Script, your own API) to receive requests.
    // Leave empty to run in demo mode, where the form validates and shows the confirmation only.
    endpoint: "",
    clinicPhone: "+91 98765 43210",
    timeZone: "Asia/Kolkata"
  };

  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
    del(k) { try { sessionStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- Header: shadow on scroll, mobile menu ---------- */
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const navToggle = $("#navToggle");
  const setMenu = open => {
    header.dataset.open = String(open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  navToggle.addEventListener("click", () => setMenu(header.dataset.open !== "true"));
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* ---------- Open or closed, in the clinic's time zone ---------- */
  (function clinicStatus() {
    const el = $("#clinicStatus");
    if (!el) return;
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: CONFIG.timeZone, weekday: "short", hour: "numeric", minute: "numeric", hour12: false
      }).formatToParts(new Date());
      const get = t => parts.find(p => p.type === t).value;
      const day = get("weekday");
      let h = parseInt(get("hour"), 10); if (h === 24) h = 0;
      const mins = h * 60 + parseInt(get("minute"), 10);
      const closeAt = day === "Sat" ? 18 * 60 : 20 * 60;
      const isOpen = day !== "Sun" && mins >= 9 * 60 && mins < closeAt;
      let text;
      if (isOpen) text = "Open now, until " + (day === "Sat" ? "6" : "8") + " pm today";
      else if (day !== "Sun" && mins < 9 * 60) text = "Closed now, opens today at 9 am";
      else text = "Closed now, opens " + ((day === "Sat" || day === "Sun") ? "Monday" : "tomorrow") + " at 9 am";
      el.classList.toggle("closed", !isOpen);
      el.lastElementChild.textContent = text;
    } catch (err) { /* keep the default text */ }
  })();

  /* ---------- Department: the accent colour follows the choice, on every page ---------- */
  const deptRadios = $$('input[name="department"]');
  function setDept(dept) {
    const key = dept ? dept.toLowerCase() : "";
    if (key) root.dataset.dept = key; else delete root.dataset.dept;
    store.set("cv-dept", dept || "");
    deptRadios.forEach(r => { r.checked = r.value === dept; });
  }
  deptRadios.forEach(r => r.addEventListener("change", () => setDept(r.value)));

  // Any "Book" link remembers the department and treatment or doctor for the appointment page
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-book]");
    if (!b) return;
    store.set("cv-dept", b.dataset.book);
    const note = b.dataset.topic ? "I would like to book: " + b.dataset.topic + "." :
                 b.dataset.doctor ? "Preferred doctor: " + b.dataset.doctor + "." : "";
    if (note) store.set("cv-note", note); else store.del("cv-note");
  });

  /* ---------- Services page: render treatments, accordion, video ---------- */
  function initServices() {
    const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const img = (url, w) => url + (url.includes("?") ? "&" : "?") + "auto=format&fit=crop&w=" + w + "&q=75";

    function renderService(s, deptKey, first) {
      const bodyId = "svc-" + s.id;
      const icon = deptKey === "dental" ? "#i-tooth" : "#i-drop";
      const dept = deptKey === "dental" ? "Dental" : "Skin";
      const hasVideo = !!s.video;
      return `
      <li class="svc${first ? " open" : ""}" data-id="${s.id}">
        <h4><button class="svc-btn" type="button" aria-expanded="${first}" aria-controls="${bodyId}">
          <span class="svc-thumb"><svg class="icon" aria-hidden="true"><use href="${icon}"/></svg><img src="${esc(img(s.photo.url, 160))}" alt="" loading="lazy" decoding="async"></span>
          <span class="svc-name">${esc(s.name)}</span>
          <span class="svc-time">${esc(s.time)}</span>
          <span class="chev" aria-hidden="true"></span>
        </button></h4>
        <div class="svc-body" id="${bodyId}"><div><div class="svc-body-inner">
          <div class="svc-media">
            <img src="${esc(img(s.photo.url, 900))}" alt="${esc(s.photo.alt)}" loading="lazy" decoding="async">
            <div class="media-fallback" aria-hidden="true"><svg class="icon"><use href="${icon}"/></svg><span>${esc(s.name)}</span></div>
            ${hasVideo ? `<button class="play-btn" type="button" aria-label="Play video: ${esc(s.name)}"><span class="tri" aria-hidden="true"></span><span>Watch a short clip <small>${esc(s.video.length)}</small></span></button>` : ""}
          </div>
          <p class="media-credit">${esc(s.credit)}</p>
          <p class="svc-lead">${esc(s.lead)}</p>
          <dl class="facts">${s.facts.map(f => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("")}</dl>
          <div>
            <h5 class="svc-sub">What to expect</h5>
            <ol class="svc-steps">${s.steps.map(st => `<li><div><b>${esc(st[0])}</b><span>${esc(st[1])}</span></div></li>`).join("")}</ol>
          </div>
          <div>
            <h5 class="svc-sub">Good for</h5>
            <ul class="good-for">${s.good.map(g => `<li>${esc(g)}</li>`).join("")}</ul>
          </div>
          <details class="svc-faq"><summary>${esc(s.faq[0])}</summary><p>${esc(s.faq[1])}</p></details>
          <a class="btn" href="appointment.html?dept=${dept}&amp;topic=${encodeURIComponent(s.name)}" data-book="${dept}" data-topic="${esc(s.name)}">Book ${esc(s.short || s.name.toLowerCase())}</a>
        </div></div></div>
      </li>`;
    }

    Object.keys(SERVICES).forEach(key => {
      const list = $("#list-" + key);
      list.innerHTML = SERVICES[key].map((s, i) => renderService(s, key, i === 0)).join("");
      // If a photo cannot load, fall back to an illustrated tile instead of a broken image
      $$(".svc-thumb img", list).forEach(im => {
        im.addEventListener("load", () => im.parentElement.classList.add("has-img"));
        im.addEventListener("error", () => im.parentElement.classList.add("broken"));
      });
      $$(".svc-media > img", list).forEach(im => {
        im.addEventListener("error", () => im.parentElement.classList.add("no-photo"));
      });
    });

    function stopVideo(item) {
      const media = $(".svc-media", item);
      const vid = media && $("video", media);
      if (!vid) return;
      vid.pause();
      vid.remove();
      const note = $(".media-note", media); if (note) note.remove();
      const btn = $(".play-btn", media); if (btn) btn.hidden = false;
    }

    function setOpen(item, open) {
      item.classList.toggle("open", open);
      $(".svc-btn", item).setAttribute("aria-expanded", String(open));
      if (!open) stopVideo(item);
    }

    document.addEventListener("click", e => {
      const btn = e.target.closest(".svc-btn");
      if (btn) {
        const item = btn.closest(".svc");
        const willOpen = !item.classList.contains("open");
        $$(".svc.open", item.closest(".svc-list")).forEach(o => setOpen(o, false));
        if (willOpen) setOpen(item, true);
        return;
      }
      const play = e.target.closest(".play-btn");
      if (play) {
        const item = play.closest(".svc");
        const media = $(".svc-media", item);
        const svc = Object.values(SERVICES).flat().find(x => x.id === item.dataset.id);
        play.hidden = true;
        const vid = document.createElement("video");
        vid.controls = true; vid.autoplay = true; vid.playsInline = true; vid.preload = "auto";
        vid.setAttribute("aria-label", svc.name + " video");
        if (svc.video.poster) vid.poster = svc.video.poster;
        vid.src = svc.video.src;
        vid.addEventListener("error", () => {
          vid.remove();
          const note = document.createElement("p");
          note.className = "media-note";
          note.textContent = "The clip could not load. Check your connection and try again.";
          media.append(note);
          play.hidden = false;
        });
        media.append(vid);
        vid.play().catch(() => {});
      }
    });

    // Links from other pages, such as services.html#implants, open that treatment
    function openFromHash() {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const item = $(`.svc[data-id="${id.replace(/"/g, "")}"]`);
      if (!item) return;
      $$(".svc.open", item.closest(".svc-list")).forEach(o => { if (o !== item) setOpen(o, false); });
      setOpen(item, true);
      setTimeout(() => item.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }), 400);
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  }
  if (typeof SERVICES !== "undefined" && $("#list-dental")) initServices();

  /* ---------- Doctors page: filter ---------- */
  const chips = $$(".chip");
  chips.forEach(chip => chip.addEventListener("click", () => {
    chips.forEach(c => c.setAttribute("aria-pressed", String(c === chip)));
    const f = chip.dataset.filter;
    $$(".doc").forEach(d => { d.hidden = f !== "all" && d.dataset.dept !== f; });
  }));

  /* ---------- Home page: reviews slider ---------- */
  (function slider() {
    const track = $("#track");
    if (!track) return;
    const prev = $("#prev"), next = $("#next"), bar = $("#progressBar");
    const step = () => {
      const card = track.querySelector(".t-card");
      return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 18);
    };
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max - 4;
      bar.style.width = Math.min(100, ((track.scrollLeft + track.clientWidth) / track.scrollWidth) * 100) + "%";
    };
    const go = dir => track.scrollBy({ left: dir * step(), behavior: reduceMotion ? "auto" : "smooth" });
    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));
    track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    track.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    });
    window.addEventListener("resize", update);
    update();
  })();

  /* ---------- Appointment page: form ---------- */
  (function booking() {
    const form = $("#bookForm");
    if (!form) return;
    const success = $("#success"), formError = $("#formError"), submitBtn = $("#submitBtn"), message = $("#message");
    const fields = { name: $("#name"), phone: $("#phone"), date: $("#date") };

    // Arrive from a "Book" link: department and treatment or doctor are already chosen
    const qs = new URLSearchParams(location.search);
    const wanted = qs.get("dept") || store.get("cv-dept") || "";
    if (wanted === "Dental" || wanted === "Skin") setDept(wanted);
    const note = qs.get("topic") ? "I would like to book: " + qs.get("topic") + "." :
                 qs.get("doctor") ? "Preferred doctor: " + qs.get("doctor") + "." : (store.get("cv-note") || "");
    if (note) { message.value = note; message.dataset.auto = "1"; }
    store.del("cv-note");
    message.addEventListener("input", () => { message.dataset.auto = "0"; });

    // Earliest bookable date is today in the clinic's time zone
    try {
      fields.date.min = new Date().toLocaleDateString("en-CA", { timeZone: CONFIG.timeZone });
    } catch (err) {
      fields.date.min = new Date().toISOString().slice(0, 10);
    }

    const setError = (key, msg) => {
      const err = $("#err-" + key);
      err.textContent = msg || "";
      const input = fields[key];
      if (input) { if (msg) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid"); }
    };
    Object.keys(fields).forEach(k => fields[k].addEventListener("input", () => setError(k, "")));
    deptRadios.forEach(r => r.addEventListener("change", () => setError("dept", "")));

    const cleanPhone = v => v.replace(/[\s\-().]/g, "").replace(/^\+?91/, "").replace(/^0/, "");

    function validate() {
      let firstBad = null;
      const fail = (key, msg, el) => { setError(key, msg); if (!firstBad) firstBad = el; };

      const name = fields.name.value.trim();
      if (name.length < 2) fail("name", "Enter your full name so we know who to ask for.", fields.name); else setError("name");

      const phone = cleanPhone(fields.phone.value);
      if (!/^[6-9]\d{9}$/.test(phone)) fail("phone", "Enter a 10-digit mobile number, for example 98765 43210.", fields.phone); else setError("phone");

      const dept = (deptRadios.find(r => r.checked) || {}).value;
      if (!dept) fail("dept", "Choose Dental or Skin.", deptRadios[0]); else setError("dept");

      const date = fields.date.value;
      if (!date) fail("date", "Pick the date you would like to visit.", fields.date);
      else if (date < fields.date.min) fail("date", "That date has passed. Pick today or a later date.", fields.date);
      else if (new Date(date + "T00:00:00").getDay() === 0) fail("date", "We are closed on Sundays. Pick a day from Monday to Saturday.", fields.date);
      else setError("date");

      if (firstBad) { firstBad.focus(); return null; }
      return { name, phone: "+91 " + phone.slice(0, 5) + " " + phone.slice(5), department: dept, date, message: message.value.trim() };
    }

    function resetSuccess() {
      success.hidden = true;
      form.hidden = false;
      formError.hidden = true;
    }

    form.addEventListener("submit", async e => {
      e.preventDefault();
      formError.hidden = true;
      const data = validate();
      if (!data) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending request";
      try {
        if (CONFIG.endpoint) {
          const res = await fetch(CONFIG.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error("Request failed");
        } else {
          await new Promise(r => setTimeout(r, 500)); // demo mode
        }
        showSuccess(data);
      } catch (err) {
        formError.textContent = "We could not send your request. Check your connection and try again, or call us on " + CONFIG.clinicPhone + ".";
        formError.hidden = false;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Request appointment";
      }
    });

    function showSuccess(d) {
      const first = d.name.split(/\s+/)[0];
      const pretty = new Date(d.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
      $("#successText").textContent = "Thank you, " + first + ". We will call you within two working hours to confirm a time on or near your preferred date.";
      const list = $("#successList");
      list.innerHTML = "";
      [["Department", d.department], ["Preferred date", pretty], ["We will call", d.phone]].forEach(([k, v]) => {
        const dt = document.createElement("dt"); dt.textContent = k;
        const dd = document.createElement("dd"); dd.textContent = v;
        list.append(dt, dd);
      });
      form.hidden = true;
      success.hidden = false;
      $("#successTitle").focus({ preventScroll: true });
      $("#formCard").scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
    }

    $("#again").addEventListener("click", () => {
      form.reset();
      setDept("");
      message.dataset.auto = "0";
      resetSuccess();
      fields.name.focus();
    });
  })();
})();
