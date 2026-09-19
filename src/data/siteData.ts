// Okanagan Marine Robotics - Site Data Model
// Clean, editable, typed data for all pages and components

export interface TeamMember {
  name: string;
  role: string;
  program: string;
  img: string;
}

export interface SponsorItem {
  name: string;
  tier: string;
  logo: string;
  desc?: string;
}

export const siteConfig = {
  name: "Okanagan Marine Robotics",
  shortName: "OKMR",
  tagline: "Crafting the Future of Marine Design & Autonomous Robotics",
  institution: "University of British Columbia, Okanagan",
  email: "okmarinerobotics@gmail.com",
  address: "3333 University Way, Kelowna, BC V1V 1V7",
  logo: "/images/logo.png",
  heroImage: "/images/f0621d_ad521d06bcb34a83843dba8_7125f3114c.jpg",
  poolTestingImage: "/images/IMG_6937_ed835537a9.jpg",
  socials: {
    instagram: "https://www.instagram.com/okmarinerobotics/",
    linkedin: "https://www.linkedin.com/company/okanagan-marine-robotics/",
    github: "https://github.com/Okanagan-Marine-Robotics",
    youtube: "https://www.youtube.com/@okmarinerobotics"
  },
  donations: {
    individual: "https://donate.give.ubc.ca/page/68045/donate/1?transaction.dirgift=UBC%20Okanagan%20School%20of%20Engineering%20Marine%20Robotics%20Club%20G4367",
    corporate: "https://donate.give.ubc.ca/page/80953/donate/1?locale=en-US",
    code: "G4367"
  },
  landAcknowledgment: "Okanagan Marine Robotics respectfully acknowledges that we learn and operate on the traditional, ancestral, unceded territory of the Syilx Okanagan Nation."
};

export const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "Our Team", path: "/our-team" },
      { label: "Our Journey", path: "/our-journey" },
      { label: "Gallery", path: "/gallery" }
    ]
  },
  {
    label: "AUV",
    children: [
      { label: "AUV Overview", path: "/auv" },
      { label: "Electrical", path: "/auv-electrical" },
      { label: "Mechanical", path: "/auv-mechanical" },
      { label: "Software", path: "/auv-software" }
    ]
  },
  { label: "Hydrofoil", path: "/hydrofoil" },
  { label: "Outreach", path: "/outreach" },
  {
    label: "Competitions",
    children: [
      { label: "RoboSub 2025", path: "/robosub-2025" },
      { label: "RoboSub 2024", path: "/robosub-2024" }
    ]
  },
  {
    label: "Sponsors",
    children: [
      { label: "Our Sponsors", path: "/sponsors" },
      { label: "Sponsorship Packages", path: "/sponsorships" }
    ]
  },
  { label: "Contact Us", path: "/contact-us", isCta: true }
];

export const homeData = {
  hero: {
    title: "OKANAGAN MARINE ROBOTICS",
    badge: "UBC Okanagan Engineering Design Team",
    lead: "A student-led club crafting the future of marine design and robotics at the University of British Columbia, Okanagan.",
    ctaPrimary: { label: "Our Journey", path: "/our-journey" },
    ctaSecondary: { label: "Meet the Team", path: "/our-team" }
  },
  stats: [
    { value: "$59,000", label: "in Funding Acquired" },
    { value: "11th", label: "Place Overall in RoboSub 2025 (58 Teams)" },
    { value: "2nd", label: "Ranked Team in Canada" },
    { value: "80+", label: "Active Student Engineers" }
  ],
  whyUs: [
    {
      title: "Autonomous Innovation",
      desc: "The fastest growing and most innovative engineering design team at UBC Okanagan; the only team working on autonomous subsea robotics technology."
    },
    {
      title: "Full-Stack Engineering",
      desc: "From custom multi-layer PCB design and deep learning computer vision to hydrodynamic hull simulation, our members build industry-grade subsea systems."
    },
    {
      title: "Collaborative Culture",
      desc: "Fueled by deep curiosity and rigorous collaboration. Every member contributes directly to competition vehicles and mission-critical hardware."
    },
    {
      title: "World-Class Mentorship",
      desc: "Partnered with premier marine defense and subsea technology leaders like Cellula Robotics and Blue Trail Engineering for hands-on mentorship."
    }
  ],
  projects: [
    {
      title: "The AUV — Ogopogo",
      subtitle: "Autonomous Underwater Vehicle for RoboSub",
      desc: "Engineered to navigate complex submerged obstacle courses, identify underwater targets with computer vision, track acoustic pingers, and execute precise manipulation.",
      link: "/auv",
      image: "/images/f0621d_ad521d06bcb34a83843dba8_7125f3114c.jpg"
    },
    {
      title: "The Hydrofoil",
      subtitle: "High-Efficiency Water Surface Craft",
      desc: "A new initiative tackling high-speed hydrodynamics, carbon-composite wing foils, dynamic lift control, and marine boundary layer physics.",
      link: "/hydrofoil",
      image: "/images/11C89DD6-862A-4788-BB88-BC096E_f7ef30bc84.jpeg"
    }
  ],
  faqs: [
    {
      q: "Why Marine Robotics?",
      a: "The Marine Robotics Team provides the unique opportunity to work with cutting-edge technology and a passionate multidisciplinary team. It allows you to gain real-world design, fabrication, and testing experience while building connections with leading subsea industry professionals."
    },
    {
      q: "Do I need to have experience to join?",
      a: "No prior robotics experience is required! We welcome eager learners. We provide mentorship, workshops, and hands-on projects so anyone with enthusiasm can develop their technical skills."
    },
    {
      q: "What if I'm not an Engineering student?",
      a: "We welcome students from all faculties! In addition to electrical, mechanical, and computer engineering, our team relies on computer science, management, finance, physics, psychology, and media students."
    },
    {
      q: "Is there a cost to join?",
      a: "No! Joining Okanagan Marine Robotics is completely free for all UBC Okanagan students."
    },
    {
      q: "What is the time commitment?",
      a: "Typical commitment ranges from 3 to 10 hours per week depending on your role, subteam, and competition deadlines."
    },
    {
      q: "What is the most important thing I should know before joining?",
      a: "Curiosity, consistency, and a desire to collaborate are the keys to success on our team. We love initiative and proactive problem solvers!"
    },
    {
      q: "How do I join?",
      a: "You can apply during our fall and winter recruitment cycles through our website or send an email directly to okmarinerobotics@gmail.com with your interests!"
    }
  ],
  newsletters: [
    { title: "September 2024 - Competition Summary", file: "/docs/September-2024-Competition-Summary.pdf" },
    { title: "January 2025 - 2024 End of Year!", file: "/docs/January-2025-End-of-Year.pdf" },
    { title: "July & August 2025 - Competition Summary", file: "/docs/July-August-2025-Competition-Summary.pdf" },
    { title: "Winter Term 1 2025", file: "/docs/Winter-Term-1-2025.pdf" }
  ]
};

export const teamData = {
  executives: [
  {
    "name": "Mateo Bravo",
    "role": "Hydrofoil Technical Director",
    "program": "BASc Mechanical Engineering",
    "img": "/images/Mateo_20Bravo_JPG_1196ffeecd.jpg"
  },
  {
    "name": "Antoine Godin",
    "role": "VP Finance",
    "program": "BASc Electrical Engineering",
    "img": ""
  },
  {
    "name": "Kezia Wong",
    "role": "VP Management",
    "program": "BA Psychology",
    "img": ""
  },
  {
    "name": "Samuel Yoskovitz",
    "role": "AUV Technical Director",
    "program": "BASc Mechanical Engineering",
    "img": "/images/Samuel_20Yoskovitz_JPG_0b5c3e8a33.jpg"
  },
    {
    "name": "Lina Naleto",
    "role": "Hydrofoil Technical Director",
    "program": "BASc Mechanical Engineering",
    "img": ""
  }
],
  management: [

],
  subteamLeads: [
  {
    "name": "Leith Ross",
    "role": "Mechanical Lead",
    "program": "BASc Mechanical Engineering",
    "img": ""
  },
  {
    "name": "Uplove Parhar",
    "role": "Mechanical Lead",
    "program": "BASc Electrical Engineering",
    "img": ""
  },
  {
    "name": "Amber Hawker",
    "role": "Software Lead",
    "program": "BSc Computer Science",
    "img": ""
  },
],
  memorial: {
    "name": "Caleb Dornian",
    "title": "In Loving Memory of Caleb Dornian",
    "role": "Pelican Computer Case Lead",
    "program": "BASc Electrical Engineering",
    "img": "/images/calebdornian.avif",
    "description": "Honoring our teammate and friend Caleb Dornian, whose dedication, kindness, and engineering ingenuity left an indelible mark on Okanagan Marine Robotics."
  }
};

export const journeyTimeline = [
  {
    year: "2023",
    title: "Club Founded & Concept Formulation",
    desc: "The Marine Robotics Club (formerly the Marine Design Club) was founded in September 2023 at UBC Okanagan. The founding team brainstormed core subsea challenges and began designing our first autonomous vehicle architecture."
  },
  {
    year: "2024",
    title: "First Competition & Global Semifinals",
    desc: "Hosted our first comprehensive Design Review in February 2024. In August, six team members drove 23 hours to Irvine, California to compete at RoboSub 2024 with our inaugural submarine 'Cascade', advancing to semi-finals and placing 15th internationally and 3rd in Canada."
  },
  {
    year: "2025",
    title: "Official Design Team Status & 11th Worldwide",
    desc: "Granted official status as a UBC Okanagan Engineering Design Team. We doubled our travel team to 12 members in Irvine with 'Ogopogo', securing 11th overall out of 58 international universities, 2nd in Canada, 4th Place Video, and 4th Place Technical Paper."
  },
  {
    year: "2026 & Beyond",
    title: "Expansion to 80+ Members & Hydrofoil Launch",
    desc: "Now exceeding 80 active members across mechanical, electrical, software, and business divisions. Preparing our next-generation AUV alongside our groundbreaking autonomous Hydrofoil initiative."
  }
];

export const sponsorsData = {
  "platinum": [
    {
      "name": "Cellula Robotics",
      "tier": "Platinum Sponsor",
      "logo": "/images/1_ee45c2a35a.jpg",
      "desc": "Cellula Robotics is a leading developer of autonomous underwater vehicles (AUVs) designed for challenging subsea operations."
    },
    {
      "name": "UBC Professional Activities Fund",
      "tier": "Platinum Sponsor",
      "logo": "/images/2_55f87658a5.jpg",
      "desc": "The University of British Columbia's Professional Activities Fund provides vital funding to engineers on campus."
    },
    {
      "name": "UBCO Engineering Society",
      "tier": "Platinum Sponsor",
      "logo": "/images/3_153e7113c1.jpg",
      "desc": "The UBC Okanagan Engineering Society is the backbone of engineering student life and design teams on campus."
    }
  ],
  "gold": [
    {
      "name": "Blue Trail Engineering",
      "tier": "Gold Sponsor",
      "logo": "/images/4_23d67fe648.jpg",
      "desc": "Blue Trail Engineering develops world-class marine robotics components, thrusters, and subsea connectors."
    },
    {
      "name": "Banksia Subsea Robotics",
      "tier": "Gold Sponsor",
      "logo": "/images/5_bb47ac5c1b.jpg",
      "desc": "Founded by Tristan Crees, Banksia navigates subsea robotics challenges as an independent consulting firm."
    },
    {
      "name": "SKYTRAC Systems Ltd.",
      "tier": "Gold Sponsor",
      "logo": "/images/6_3c8296fba8.jpg",
      "desc": "SKYTRAC Systems Ltd. is a global leader in aviation connectivity and satellite communications."
    }
  ],
  "silver": [
    {
      "name": "Kelowna Family YMCA",
      "tier": "Silver Sponsor",
      "logo": "/images/7_b2679a5b43.jpg",
      "desc": "Provides vital deep-pool water testing facilities for our AUV and subsea vehicles."
    },
    {
      "name": "BlueRobotics",
      "tier": "Silver Sponsor",
      "logo": "/images/8_3c254b5c1d.jpg",
      "desc": "Pioneering low-cost, high-performance ocean exploration hardware and thrusters."
    },
    {
      "name": "Mearl's Machine Works",
      "tier": "Silver Sponsor",
      "logo": "/images/9_23b9167eef.jpg",
      "desc": "Precision CNC machining and precision manufacturing services in Kelowna."
    },
    {
      "name": "Mouser Electronics",
      "tier": "Silver Sponsor",
      "logo": "/images/10_dd13e27a07.jpg",
      "desc": "Global distributor of semiconductors and electronic components."
    }
  ],
  "bronze": [
    {
      "name": "Bloom Robotics",
      "tier": "Bronze Sponsor",
      "logo": "/images/11_1f368566c8.jpg"
    },
    {
      "name": "Rocky Mountain Fluid Power",
      "tier": "Bronze Sponsor",
      "logo": "/images/12_af8e2a7083.jpg"
    },
    {
      "name": "Waterous Power Systems",
      "tier": "Bronze Sponsor",
      "logo": "/images/13_4d1ada5187.jpg"
    }
  ],
  "software": [
    {
      "name": "SolidWorks",
      "tier": "Software Sponsor",
      "logo": "/images/14_ec21edd9b0.jpg",
      "desc": "Industry standard 3D CAD design and engineering simulation software."
    }
  ]
};
export const galleryData = [
  {
    "src": "/images/f0621d_e0958d90b5da408490878a3_1845becd23.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_a66f75dfb2e14f1b99d93e5_30874d801d.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_20b8d2b52e404a379366bbe_53c095eadd.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_7d4a943119e743e48fe18a9_74e2fdd0c3.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_a4feb5e7869f497db0ae3b8_4178c29184.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_3c8d2a6c01c74d0faf6b68d_f3f82a5de3.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_460a43f456e64a43b8d6f9a_3dfd882f7b.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_030da075d7bf48e5baeb330_3edb9492a3.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_02de7bc19f894eba98dc97f_8cd8a4870b.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_f6180e1f3f76489caed5ca2_ee0754a85c.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_5b73bfa8b6934db4b5f1e60_871db7071b.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_c3fa75d824a644a5b416d2e_6c71bef3eb.jpg",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_9fa8c3eb611d4a8d8df98be_acbdea9c10.png",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_6445d5360662425f82f2915_13692c2d3d.png",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_d10f176b88d6411487f3bfe_1327009aa5.png",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_79f9ca22c9a541c5a6ad918_29b45fd9a0.png",
    "alt": "Okanagan Marine Robotics team activity"
  },
  {
    "src": "/images/f0621d_b7f8c758d4b346c19e13b43_399dfffc43.png",
    "alt": "Okanagan Marine Robotics team activity"
  }
];
export const outreachData = [
  {
    "title": "Kelowna Secondary School",
    "subtitle": "Robotics Workshop & Mentorship",
    "desc": "Our members visited Kelowna Secondary School to introduce high school students to subsea robotics, PCB design, and mechanical modeling. Students engaged in hands-on demonstrations with our prototype sensors.",
    "img1": "/images/kss_robotics_6dfba19ecb.jpg",
    "img2": "/images/kss_edt_1add75d7c1.jpg"
  },
  {
    "title": "École Élémentaire Glenmore Elementary",
    "subtitle": "Youth In STEM Discovery",
    "desc": "Inspiring the next generation of engineers! We hosted an interactive marine technology showcase for elementary students, demonstrating underwater buoyancy, propulsion, and coding basics.",
    "img1": "/images/pic_201_f92c9d360a.jpg",
    "img2": "/images/pic_202_e9df4559a0.jpg"
  },
  {
    "title": "Royal Canadian Sea Cadets Corps",
    "subtitle": "Naval Engineering & Navigation",
    "desc": "Connecting with sea cadets across British Columbia to share principles of autonomous underwater navigation, subsea acoustics, and nautical engineering applications.",
    "img1": "/images/IMG_8793_JPG_eb1dc22f2d.jpg",
    "img2": "/images/IMG_7403_HEIC_ec75c244a8.png"
  },
  {
    "title": "Expo of Awesome & STEM Days",
    "subtitle": "Community Science Exhibition",
    "desc": "Showcasing Ogopogo and our underwater robotics prototypes to thousands of community visitors, families, and future engineers at the Okanagan science and engineering expositions.",
    "img1": "/images/IMG_3714_6c81eae615.jpg",
    "img2": "/images/IMG_1421_f181e72de8.jpg"
  }
];
