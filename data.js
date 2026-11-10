/* Treatment content and media. Replace photo and video links with your own clinic footage when you have it. */
const SERVICES = {
  "dental": [
    {
      "id": "root-canal",
      "name": "Root canal treatment",
      "short": "a root canal",
      "time": "60 to 90 min",
      "lead": "A root canal removes infected or inflamed tissue from inside a tooth, cleans the canals and seals them, so the tooth you already have can stay in your mouth.",
      "facts": [
        [
          "Visit",
          "60 to 90 minutes"
        ],
        [
          "Visits needed",
          "1 or 2"
        ],
        [
          "Comfort",
          "Local anaesthetic"
        ]
      ],
      "steps": [
        [
          "X-ray and numbing",
          "A digital X-ray maps the canals, then the tooth and gum are fully numbed."
        ],
        [
          "Cleaning the canals",
          "With a rubber dam in place, the infected tissue is removed and the canals are shaped with rotary files."
        ],
        [
          "Disinfect and seal",
          "The canals are rinsed, filled and sealed, and the tooth gets a filling."
        ],
        [
          "Crown to protect it",
          "Most back teeth need a crown afterwards, because a treated tooth is more likely to fracture."
        ]
      ],
      "good": [
        "Deep cavity",
        "Lingering hot or cold sensitivity",
        "Swollen gum",
        "Toothache at night"
      ],
      "faq": [
        "Does it hurt?",
        "With local anaesthetic the procedure feels much like having a filling. The tooth can be tender for a few days afterwards, and an over-the-counter pain reliever is usually enough."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1588776814546-daab30f310ce",
        "alt": "Two dentists in masks treating a patient in a clinic"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/7803281/7803281-hd_1920_1078_30fps.mp4",
        "poster": "https://images.pexels.com/videos/7803281/adult-chair-clinic-dental-7803281.jpeg?auto=compress&w=1260&h=750&dpr=1",
        "length": "0:19"
      },
      "credit": "Photo by Jonathan Borba on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "implants",
      "name": "Dental implants",
      "short": "an implant",
      "time": "Planned in 2 to 3 visits",
      "lead": "An implant is a small titanium post placed in the jawbone to hold a crown, bridge or denture, so a missing tooth is replaced from the root up.",
      "facts": [
        [
          "Planning",
          "1 visit with 3D scan"
        ],
        [
          "Healing",
          "3 to 6 months"
        ],
        [
          "Comfort",
          "Local anaesthetic"
        ]
      ],
      "steps": [
        [
          "3D scan and plan",
          "A CBCT scan shows bone height and nerve position, so placement is planned before any surgery."
        ],
        [
          "Implant placement",
          "The post is placed under local anaesthetic, usually in under an hour per implant."
        ],
        [
          "Healing",
          "The bone grows around the post over several months. You can wear a temporary tooth meanwhile if needed."
        ],
        [
          "Custom crown",
          "A crown matched to your neighbouring teeth is fitted on the implant."
        ]
      ],
      "good": [
        "One missing tooth",
        "Several missing teeth",
        "Loose dentures",
        "A tooth lost years ago"
      ],
      "faq": [
        "Is everyone suitable for an implant?",
        "Most healthy adults are. Gum disease, poorly controlled diabetes and smoking slow healing, so we check these first and treat them before planning."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
        "alt": "Dental implant demonstration model with teeth"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6630290/6630290-uhd_2732_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6630290/pexels-photo-6630290.jpeg?auto=compress&w=1260&h=750&dpr=1",
        "length": "0:15"
      },
      "credit": "Photo by Jonathan Borba on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "whitening",
      "name": "Teeth whitening",
      "short": "whitening",
      "time": "60 min",
      "lead": "Professional whitening uses a dentist-supervised gel to lift stains from the enamel, so you can see a clearly lighter shade after a single visit.",
      "facts": [
        [
          "Visit",
          "About 60 minutes"
        ],
        [
          "Visits needed",
          "1, top-up optional"
        ],
        [
          "Comfort",
          "Desensitising gel"
        ]
      ],
      "steps": [
        [
          "Clean and shade check",
          "We polish away surface plaque and record your starting shade."
        ],
        [
          "Protect the gums",
          "A barrier covers the gums and lips so only the teeth are exposed to the gel."
        ],
        [
          "Whitening in cycles",
          "The gel is applied in short cycles and checked at each step."
        ],
        [
          "Aftercare advice",
          "For two days we ask you to avoid tea, coffee, red wine and smoking while the enamel settles."
        ]
      ],
      "good": [
        "Tea and coffee stains",
        "Age-related yellowing",
        "An event in the coming weeks"
      ],
      "faq": [
        "How long do results last?",
        "Usually one to two years, depending on how much tea, coffee and tobacco you have. Whitening does not change the colour of crowns, veneers or fillings."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed",
        "alt": "Close-up of a smile with bright white teeth"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6630465/6630465-uhd_2732_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6630465/clinic-dental-doctor-health-care-6630465.jpeg?auto=compress&w=1260&h=750&dpr=1",
        "length": "0:18"
      },
      "credit": "Photo by Kamal Hoseinianzade on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "aligners",
      "name": "Braces and clear aligners",
      "short": "an orthodontic consult",
      "time": "6 to 18 months",
      "lead": "Braces and clear aligners move teeth gradually into better positions, improving both how your smile looks and how your teeth bite together.",
      "facts": [
        [
          "Treatment",
          "6 to 18 months"
        ],
        [
          "Reviews",
          "Every 4 to 8 weeks"
        ],
        [
          "Options",
          "Metal, ceramic, clear"
        ]
      ],
      "steps": [
        [
          "Scans and photos",
          "We take a digital scan, photos and X-rays to see the whole picture."
        ],
        [
          "Preview your result",
          "You see a 3D preview of the finished smile before you choose a system."
        ],
        [
          "Treatment and reviews",
          "Short check-ups adjust the braces or give you the next set of aligners."
        ],
        [
          "Retainers",
          "Retainers hold the new position, because teeth drift back without them."
        ]
      ],
      "good": [
        "Crowding",
        "Gaps between teeth",
        "Overbite or crossbite",
        "Teeth that moved after old braces"
      ],
      "faq": [
        "How long do I wear retainers?",
        "Retainers are worn full time at first, then at night. Your dentist will tell you how long. Teeth can shift at any age, so most people keep wearing them at night."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1777446899714-c26de766dffd",
        "alt": "Dental model showing teeth with metal braces"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6528847/6528847-uhd_2732_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6528847/braces-check-up-checking-clinic-6528847.jpeg",
        "length": "0:16"
      },
      "credit": "Photo by Harold Hisona on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "crowns-veneers",
      "name": "Crowns and veneers",
      "short": "a crown or veneer",
      "time": "2 visits",
      "lead": "A crown covers a damaged tooth completely. A veneer is a thin porcelain shell bonded to the front of a tooth to change its colour, shape or length.",
      "facts": [
        [
          "Visits",
          "2"
        ],
        [
          "Material",
          "Zirconia or porcelain"
        ],
        [
          "Lifespan",
          "Often 10 to 15 years"
        ]
      ],
      "steps": [
        [
          "Digital scan and shade",
          "A scan replaces the impression tray, and we match the shade to your neighbouring teeth."
        ],
        [
          "Prepare the tooth",
          "A small amount of enamel is reshaped under local anaesthetic so the restoration fits."
        ],
        [
          "Temporary crown",
          "You leave with a temporary while the permanent one is made."
        ],
        [
          "Fit and polish",
          "The final restoration is checked for fit and bite, then bonded in place."
        ]
      ],
      "good": [
        "Cracked teeth",
        "Heavily filled teeth",
        "Chipped front teeth",
        "Uneven or small teeth"
      ],
      "faq": [
        "Do veneers damage teeth?",
        "Most veneers need a thin layer of enamel removed, so the decision is permanent. Your dentist will go through gentler options such as bonding before you decide."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9",
        "alt": "Close-up of a smiling mouth with even white teeth"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/5889018/5889018-uhd_2560_1440_30fps.mp4",
        "poster": "https://images.pexels.com/videos/5889018/pexels-photo-5889018.jpeg",
        "length": "0:24"
      },
      "credit": "Photo by Tony Litvyak on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "cleaning",
      "name": "Cleaning and gum care",
      "short": "a cleaning",
      "time": "45 min",
      "lead": "A professional clean removes the plaque and hardened tartar that brushing cannot, and a gum check catches early disease while it is still easy to reverse.",
      "facts": [
        [
          "Visit",
          "About 45 minutes"
        ],
        [
          "How often",
          "Every 6 months"
        ],
        [
          "Comfort",
          "Gentle, ultrasonic"
        ]
      ],
      "steps": [
        [
          "Check teeth and gums",
          "We measure gum pockets and look for decay, wear and early signs of disease."
        ],
        [
          "Ultrasonic scaling",
          "A vibrating tip with a water spray lifts tartar from the tooth surface and below the gumline."
        ],
        [
          "Polish",
          "A fine paste smooths the surface and removes light staining."
        ],
        [
          "Home-care plan",
          "We show you the brushing and flossing method that suits your teeth."
        ]
      ],
      "good": [
        "Bleeding gums",
        "Bad breath",
        "Tartar build-up",
        "Six-monthly check-up"
      ],
      "faq": [
        "Will cleaning loosen my teeth?",
        "No. Scaling removes deposits from the tooth surface. If your gums are inflamed they can feel tender for a day or two, and they usually tighten up as they heal."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1681939278218-a755fb2bf2d3",
        "alt": "Dentist cleaning a patient's teeth"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6630772/6630772-uhd_2732_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6630772/clinic-dental-doctor-health-care-6630772.jpeg",
        "length": "0:14"
      },
      "credit": "Photo by SoyBreno on Unsplash. Video from Pexels. Illustrative stock media."
    }
  ],
  "skin": [
    {
      "id": "acne",
      "name": "Acne and scar treatment",
      "short": "an acne consult",
      "time": "30 min consult",
      "lead": "We find what is driving your acne, treat it with the lowest effective dose of medicine, peels or light-based therapy, and treat scars once the skin has settled.",
      "facts": [
        [
          "Consultation",
          "30 minutes"
        ],
        [
          "Reviews",
          "Every 4 to 6 weeks"
        ],
        [
          "First results",
          "Often 8 to 12 weeks"
        ]
      ],
      "steps": [
        [
          "Assess and grade",
          "We examine the skin, grade the acne and look for scarring."
        ],
        [
          "Look for triggers",
          "We review hormones, skin-care products, medicines and habits that may be feeding it."
        ],
        [
          "Build a plan",
          "Creams, tablets, peels or light therapy are chosen to match your skin and your routine."
        ],
        [
          "Treat the scars",
          "Microneedling or fractional laser starts once new breakouts are under control."
        ]
      ],
      "good": [
        "Teenage acne",
        "Adult acne",
        "Painful cysts",
        "Pits and marks"
      ],
      "faq": [
        "Why does acne take weeks to improve?",
        "Most treatments work on the skin's renewal cycle, so a clear change usually takes 8 to 12 weeks. You may see a mild flare at first, and we review you often so we can adjust."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1761819920857-7edc5e808fd3",
        "alt": "Microneedling treatment on a young woman's cheek"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/7423542/7423542-uhd_2560_1440_30fps.mp4",
        "poster": "https://images.pexels.com/videos/7423542/pexels-photo-7423542.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
        "length": "0:16"
      },
      "credit": "Photo from Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "laser",
      "name": "Laser therapy",
      "short": "laser therapy",
      "time": "20 to 45 min",
      "lead": "Medical-grade lasers use specific wavelengths to target hair, pigment or the skin surface, with built-in cooling to keep each session comfortable.",
      "facts": [
        [
          "Session",
          "20 to 45 minutes"
        ],
        [
          "Course",
          "Often 6 to 8 sessions"
        ],
        [
          "Downtime",
          "Little to none"
        ]
      ],
      "steps": [
        [
          "Assess skin and patch test",
          "We check your skin type and test a small area to choose a safe setting."
        ],
        [
          "Prepare and protect",
          "The area is cleaned, cooling is applied, and everyone in the room wears eye protection."
        ],
        [
          "Laser passes",
          "The laser is passed over the area. Most people describe a quick snap or warm pinch."
        ],
        [
          "Aftercare",
          "You use sunscreen and avoid strong sun and waxing between sessions."
        ]
      ],
      "good": [
        "Unwanted hair",
        "Dark patches",
        "Sun damage",
        "Uneven texture"
      ],
      "faq": [
        "Is laser safe on brown skin?",
        "It can be when the right wavelength and settings are chosen by a trained doctor. That is why we patch test first and use a longer-wavelength laser for deeper skin tones."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b",
        "alt": "Laser hair removal treatment on a leg"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6998176/6998176-hd_1920_1080_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6998176/pexels-photo-6998176.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
        "length": "0:27"
      },
      "credit": "Photo by Farhad Ibrahimzade on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "anti-aging",
      "name": "Anti-aging care",
      "short": "anti-aging care",
      "time": "30 to 60 min",
      "lead": "Anti-aging care combines peels, skin boosters, microneedling and wrinkle-relaxing injections to soften lines and improve firmness gradually, so you still look like you.",
      "facts": [
        [
          "Visit",
          "30 to 60 minutes"
        ],
        [
          "Course",
          "Often 3 to 4 sessions"
        ],
        [
          "Downtime",
          "0 to 3 days"
        ]
      ],
      "steps": [
        [
          "Talk through your goals",
          "We look at your skin in daylight and ask what bothers you most."
        ],
        [
          "Agree a plan",
          "You see the options, the number of sessions and the cost before anything starts."
        ],
        [
          "Treatment",
          "Treatments are done in small steps and numbing cream is used where needed."
        ],
        [
          "Maintain",
          "A light maintenance schedule keeps results going, with daily sunscreen at home."
        ]
      ],
      "good": [
        "Fine lines",
        "Loss of firmness",
        "Dull skin",
        "Sun-aged skin"
      ],
      "faq": [
        "Will I look overdone?",
        "The aim is a fresher version of your own face. We start with conservative amounts, review you after two weeks, and only add more if you want it."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1785861084191-3600dfc2a6d6",
        "alt": "Woman receiving a cosmetic injection on her chin"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/4264878/4264878-uhd_2560_1440_30fps.mp4",
        "poster": "https://images.pexels.com/videos/4264878/pexels-photo-4264878.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
        "length": "0:15"
      },
      "credit": "Photo from Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "pigmentation",
      "name": "Pigmentation and melasma",
      "short": "a pigmentation consult",
      "time": "30 min consult",
      "lead": "Dark patches return when the cause is missed. We look at sun exposure, hormones and your products, then combine medical creams, peels and laser at a pace your skin tolerates.",
      "facts": [
        [
          "Consultation",
          "30 minutes"
        ],
        [
          "Course",
          "Often 3 to 6 months"
        ],
        [
          "Key habit",
          "Daily sunscreen"
        ]
      ],
      "steps": [
        [
          "Identify the type",
          "Melasma, post-acne marks and sun spots look alike but are treated differently."
        ],
        [
          "Creams and sun protection",
          "Prescription creams and a broad-spectrum sunscreen form the base of every plan."
        ],
        [
          "Peels or laser",
          "Where suitable, gentle peels or low-energy laser speed up fading without irritating the skin."
        ],
        [
          "Keep it controlled",
          "Regular reviews and sun care stop patches from coming back."
        ]
      ],
      "good": [
        "Melasma",
        "Post-acne marks",
        "Dark underarms or neck",
        "Uneven skin tone"
      ],
      "faq": [
        "Will melasma come back?",
        "Melasma is a long-term condition that can flare with sun and hormonal changes. Treatment can fade it and keep it controlled, and sunscreen is what protects the result."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1713085085470-fba013d67e65",
        "alt": "Woman receiving a facial peel from a skin specialist"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/9421564/9421564-hd_1920_1080_25fps.mp4",
        "poster": "https://images.pexels.com/videos/9421564/pexels-photo-9421564.jpeg",
        "length": "0:08"
      },
      "credit": "Photo by Look Studio on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "hair-scalp",
      "name": "Hair and scalp care",
      "short": "a hair consult",
      "time": "30 min consult",
      "lead": "A scalp examination shows why hair is thinning or the scalp is flaky, so treatment targets the cause instead of guessing.",
      "facts": [
        [
          "Consultation",
          "30 minutes"
        ],
        [
          "First results",
          "Often 3 to 6 months"
        ],
        [
          "Options",
          "Medicines, PRP, topicals"
        ]
      ],
      "steps": [
        [
          "Examine the scalp",
          "We look at hair density and scalp health with a magnified scalp scan."
        ],
        [
          "Check the cause",
          "Blood tests for iron, thyroid and vitamin D are ordered only if they are needed."
        ],
        [
          "Start treatment",
          "Medicines, PRP sessions or medicated shampoos are chosen for your type of hair loss."
        ],
        [
          "Review progress",
          "We compare scalp photos every few months to see what is working."
        ]
      ],
      "good": [
        "Hair fall",
        "Thinning at the crown or temples",
        "Dandruff",
        "Itchy scalp"
      ],
      "faq": [
        "How soon will I see new hair?",
        "Hair grows slowly, so expect around 3 to 6 months before the difference shows. Shedding often slows first, which is a good early sign."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1742280159636-3a06652ac9d9",
        "alt": "Woman receiving a hair treatment from a clinician"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/6628557/6628557-uhd_2732_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/6628557/20-25-years-old-woman-4k-aromatherapy-awareness-6628557.jpeg",
        "length": "0:23"
      },
      "credit": "Photo by Dermexperia on Unsplash. Video from Pexels. Illustrative stock media."
    },
    {
      "id": "eczema",
      "name": "Eczema, allergy and rashes",
      "short": "a skin consult",
      "time": "20 min consult",
      "lead": "We find the cause of itchy, red or scaly skin and set up a routine that keeps it under control, including what to use and what to avoid.",
      "facts": [
        [
          "Consultation",
          "20 minutes"
        ],
        [
          "Testing",
          "Patch test if needed"
        ],
        [
          "Follow-up",
          "As your skin needs"
        ]
      ],
      "steps": [
        [
          "Examine and listen",
          "We look at the skin and ask about triggers, family history and products you use."
        ],
        [
          "Find the trigger",
          "Patch testing or simple changes to soaps, fabrics and detergents can point to the cause."
        ],
        [
          "Treat and soothe",
          "Medicated creams calm flare-ups, and a moisturising routine protects the skin barrier."
        ],
        [
          "Follow up",
          "We adjust treatment so you can use the lightest option that keeps your skin clear."
        ]
      ],
      "good": [
        "Eczema",
        "Psoriasis",
        "Fungal infections",
        "Hives",
        "Children with sensitive skin"
      ],
      "faq": [
        "Can eczema be cured?",
        "Eczema usually cannot be cured, but most people reach long stretches of clear skin once the triggers and the daily routine are right."
      ],
      "photo": {
        "url": "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61",
        "alt": "Hands applying moisturising lotion from a pump bottle"
      },
      "video": {
        "src": "https://videos.pexels.com/video-files/4215477/4215477-uhd_2560_1440_25fps.mp4",
        "poster": "https://images.pexels.com/videos/4215477/pexels-photo-4215477.jpeg",
        "length": "0:15"
      },
      "credit": "Photo by Nataliya Melnychuk on Unsplash. Video from Pexels. Illustrative stock media."
    }
  ]
};
