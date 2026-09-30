import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const directory = [
  {
    icon: "🗑️",
    name: "ঢাকা উত্তর সিটি কর্পোরেশন (DNCC)",
    title: "বর্জ্য ব্যবস্থাপনা ও নাগরিক সেবা",
    area: "Mirpur, Uttara, Gulshan, Banani, Mohammadpur",
    phone: "16106",
  },
  {
    icon: "🏙️",
    name: "ঢাকা দক্ষিণ সিটি কর্পোরেশন (DSCC)",
    title: "বর্জ্য ব্যবস্থাপনা ও নাগরিক সেবা",
    area: "Dhanmondi, Old Dhaka, Motijheel, Jatrabari",
    phone: "09611-000999",
  },
  {
    icon: "💧",
    name: "ঢাকা ওয়াসা (DWASA)",
    title: "পানি সরবরাহ ও পয়ঃনিষ্কাশন",
    area: "Greater Dhaka",
    phone: "16162",
  },
  {
    icon: "⚡",
    name: "ঢাকা ইলেকট্রিক সাপ্লাই কোম্পানি (DESCO)",
    title: "বিদ্যুৎ সরবরাহ ও অভিযোগ",
    area: "Mirpur, Uttara, Gulshan, Baridhara, Badda",
    phone: "16120",
  },
  {
    icon: "🔌",
    name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি (DPDC)",
    title: "বিদ্যুৎ সরবরাহ ও অভিযোগ",
    area: "Dhanmondi, Azimpur, Tejgaon, Motijheel",
    phone: "16116",
  },
  {
    icon: "🛒",
    name: "জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP)",
    title: "ভোক্তা অধিকার ও অভিযোগ",
    area: "Nationwide — All 64 districts",
    phone: "16121",
  },
  {
    icon: "📞",
    name: "জাতীয় তথ্য ও সেবা হেল্পলাইন — ৩৩৩",
    title: "সরকারি তথ্য, নাগরিক সেবা ও অভিযোগ",
    area: "Nationwide • 24/7",
    phone: "333",
  },
  {
    icon: "🚗",
    name: "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)",
    title: "Driving License, Vehicle Registration & Transport",
    area: "Nationwide",
    phone: "16107",
  },
  {
    icon: "🚨",
    name: "জাতীয় জরুরি সেবা — ৯৯৯",
    title: "Police, Fire Service & Ambulance",
    area: "Nationwide • 24/7",
    phone: "999",
  },
  {
    icon: "🪪",
    name: "নির্বাচন কমিশন — NID Wing",
    title: "NID Correction, Smart Card & Voter Services",
    area: "Nationwide",
    phone: "105",
  },
];

function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark">
        <div className="brand-shield">
          <span>✓</span>
        </div>
        <div className="brand-spark">✦</div>
      </div>

      <div className="brand-text">
        <strong>
          SOMADHAN<span>BD</span>
        </strong>
        <small>Your Problem, Our Guidance</small>
      </div>
    </div>
  );
}

/* =========================
   PROBLEM DETECTION
========================= */

function detectCategory(text) {
  const value = text.toLowerCase();

  if (
    value.includes("আগুন") ||
    value.includes("দুর্ঘটনা") ||
    value.includes("জরুরি") ||
    value.includes("999") ||
    value.includes("ambulance") ||
    value.includes("fire service") ||
    value.includes("অ্যাম্বুলেন্স")
  ) {
    return "Emergency";
  }

  if (
    value.includes("road") ||
    value.includes("রাস্তা") ||
    value.includes("গর্ত") ||
    value.includes("রাস্তায়") ||
    value.includes("পথ") ||
    value.includes("traffic") ||
    value.includes("ট্রাফিক") ||
    value.includes("জ্যাম") ||
    value.includes("যানজট") ||
    value.includes("বাস") ||
    value.includes("গাড়ি") ||
    value.includes("vehicle") ||
    value.includes("transport") ||
    value.includes("পরিবহন") ||
    value.includes("driving license") ||
    value.includes("লাইসেন্স") ||
    value.includes("brta")
  ) {
    return "Road & Transport";
  }

  if (
    value.includes("water") ||
    value.includes("পানি") ||
    value.includes("জল") ||
    value.includes("drain") ||
    value.includes("ড্রেন") ||
    value.includes("ড্রেনেজ") ||
    value.includes("জলাবদ্ধ") ||
    value.includes("পয়ঃনিষ্কাশন") ||
    value.includes("নর্দমা")
  ) {
    return "Water & Drainage";
  }

  if (
    value.includes("electric") ||
    value.includes("electricity") ||
    value.includes("বিদ্যুৎ") ||
    value.includes("কারেন্ট") ||
    value.includes("power") ||
    value.includes("লোডশেডিং") ||
    value.includes("বিদ্যুৎ নেই") ||
    value.includes("তার ছিঁড়ে") ||
    value.includes("বৈদ্যুতিক") ||
    value.includes("desco") ||
    value.includes("dpdc")
  ) {
    return "Electricity";
  }

  if (
    value.includes("police") ||
    value.includes("পুলিশ") ||
    value.includes("চুরি") ||
    value.includes("চোর") ||
    value.includes("ছিনতাই") ||
    value.includes("ডাকাতি") ||
    value.includes("হুমকি") ||
    value.includes("মারামারি") ||
    value.includes("অপরাধ") ||
    value.includes("crime") ||
    value.includes("নিরাপত্তা") ||
    value.includes("হারিয়ে") ||
    value.includes("missing") ||
    value.includes("নিখোঁজ")
  ) {
    return "Police & Safety";
  }

  if (
    value.includes("doctor") ||
    value.includes("ডাক্তার") ||
    value.includes("hospital") ||
    value.includes("হাসপাতাল") ||
    value.includes("health") ||
    value.includes("স্বাস্থ্য") ||
    value.includes("চিকিৎসা") ||
    value.includes("অসুস্থ") ||
    value.includes("রোগ") ||
    value.includes("রোগী") ||
    value.includes("medicine") ||
    value.includes("ওষুধ")
  ) {
    return "Health";
  }

  if (
    value.includes("child") ||
    value.includes("শিশু") ||
    value.includes("বাচ্চা") ||
    value.includes("বাল্যবিবাহ") ||
    value.includes("বাল্য বিবাহ") ||
    value.includes("শিশু নির্যাতন") ||
    value.includes("child marriage") ||
    value.includes("marriage") ||
    value.includes("বিয়ে") ||
    value.includes("বিবাহ")
  ) {
    return "Child Safety";
  }

  if (
    value.includes("school") ||
    value.includes("স্কুল") ||
    value.includes("college") ||
    value.includes("কলেজ") ||
    value.includes("university") ||
    value.includes("বিশ্ববিদ্যালয়") ||
    value.includes("education") ||
    value.includes("শিক্ষা") ||
    value.includes("শিক্ষক") ||
    value.includes("ছাত্র") ||
    value.includes("ছাত্রী") ||
    value.includes("exam") ||
    value.includes("পরীক্ষা") ||
    value.includes("ভর্তি") ||
    value.includes("admission")
  ) {
    return "Education";
  }

  if (
    value.includes("consumer") ||
    value.includes("ভোক্তা") ||
    value.includes("দোকান") ||
    value.includes("দাম বেশি") ||
    value.includes("বেশি দাম") ||
    value.includes("নকল পণ্য") ||
    value.includes("ভেজাল") ||
    value.includes("পচা খাবার") ||
    value.includes("expired") ||
    value.includes("মেয়াদ শেষ") ||
    value.includes("প্রতারণা") ||
    value.includes("দাম") ||
    value.includes("product") ||
    value.includes("refund") ||
    value.includes("রিফান্ড")
  ) {
    return "Consumer Rights";
  }

  if (
    value.includes("nid") ||
    value.includes("এনআইডি") ||
    value.includes("জাতীয় পরিচয়পত্র") ||
    value.includes("পরিচয়পত্র") ||
    value.includes("smart card") ||
    value.includes("ভোটার") ||
    value.includes("voter") ||
    value.includes("ভোটার আইডি") ||
    value.includes("nid correction") ||
    value.includes("এনআইডি সংশোধন")
  ) {
    return "NID & Voter Services";
  }

  if (
    value.includes("government") ||
    value.includes("সরকার") ||
    value.includes("সরকারি") ||
    value.includes("সরকারি সেবা") ||
    value.includes("জন্ম নিবন্ধন") ||
    value.includes("জন্মনিবন্ধন") ||
    value.includes("birth certificate") ||
    value.includes("পাসপোর্ট") ||
    value.includes("passport") ||
    value.includes("সনদ") ||
    value.includes("অনলাইন সেবা") ||
    value.includes("তথ্য") ||
    value.includes("333") ||
    value.includes("হেল্পলাইন") ||
    value.includes("অভিযোগ") ||
    value.includes("complaint")
  ) {
    return "Government Services";
  }

  return "General Problem";
}

/* =========================
   GUIDANCE DATA
========================= */

function getCategoryGuidance(category) {
  const data = {
    Emergency: {
      description:
        "আপনার সমস্যাটি জরুরি পরিস্থিতির সাথে সম্পর্কিত হতে পারে.",
      actions: [
        "প্রথমে নিজের ও আশেপাশের মানুষের নিরাপত্তা নিশ্চিত করুন।",
        "সম্ভব হলে নিরাপদ স্থানে সরে যান।",
        "ঘটনার সঠিক স্থান ও প্রয়োজনীয় তথ্য প্রস্তুত রাখুন।",
        "জরুরি সহায়তার জন্য জাতীয় জরুরি সেবা 999-এ যোগাযোগ করুন।",
      ],
      contact: "জাতীয় জরুরি সেবা — 999",
      portal: "https://999.gov.bd/",
      note: "তাৎক্ষণিক বিপদ থাকলে 999-এ যোগাযোগ করুন।",
    },

    "Road & Transport": {
      description:
        "আপনার সমস্যাটি রাস্তা বা পরিবহন সংক্রান্ত বলে মনে হচ্ছে।",
      actions: [
        "সমস্যার ছবি তুলে রাখুন।",
        "সমস্যার সঠিক লোকেশন দিন।",
        "স্থানীয় সিটি কর্পোরেশন, পৌরসভা বা সংশ্লিষ্ট কর্তৃপক্ষকে জানান।",
        "পরিবহন বা ড্রাইভিং লাইসেন্স সংক্রান্ত বিষয়ে BRTA-এর সহায়তা নিন।",
      ],
      contact:
        "সিটি কর্পোরেশন / পৌরসভা / BRTA / সংশ্লিষ্ট সড়ক কর্তৃপক্ষ",
      portal: "https://brta.gov.bd/",
      note:
        "জরুরি দুর্ঘটনা বা জীবনঝুঁকি থাকলে 999-এ যোগাযোগ করুন।",
    },

    "Water & Drainage": {
      description:
        "আপনার সমস্যাটি পানি সরবরাহ, ড্রেনেজ বা জলাবদ্ধতার সাথে সম্পর্কিত।",
      actions: [
        "সমস্যার ছবি বা ভিডিও সংরক্ষণ করুন।",
        "সমস্যার এলাকা ও লোকেশন উল্লেখ করুন।",
        "পানি সরবরাহের সমস্যা হলে সংশ্লিষ্ট পানি কর্তৃপক্ষকে জানান।",
        "ড্রেন বা জলাবদ্ধতার সমস্যা হলে স্থানীয় সিটি কর্পোরেশনকে জানান।",
      ],
      contact:
        "ঢাকা ওয়াসা / সিটি কর্পোরেশন / স্থানীয় কর্তৃপক্ষ",
      portal: "https://dwasa.org.bd/",
      note:
        "দূষিত পানি ব্যবহার না করে নিরাপদ পানির ব্যবস্থা করুন।",
    },

    Electricity: {
      description:
        "আপনার সমস্যাটি বিদ্যুৎ সরবরাহ বা বিদ্যুৎ সংক্রান্ত বলে মনে হচ্ছে।",
      actions: [
        "সমস্যার স্থান এবং মিটারের তথ্য প্রস্তুত রাখুন।",
        "আপনার এলাকার সংশ্লিষ্ট বিদ্যুৎ বিতরণ কোম্পানিতে অভিযোগ করুন।",
        "সমস্যার ছবি থাকলে সংরক্ষণ করুন।",
        "ছেঁড়া বৈদ্যুতিক তার নিজে স্পর্শ করবেন না।",
      ],
      contact:
        "DESCO / DPDC / সংশ্লিষ্ট বিদ্যুৎ কর্তৃপক্ষ",
      portal: "https://powerdivision.gov.bd/",
      note:
        "বৈদ্যুতিক ঝুঁকি থাকলে নিরাপদ দূরত্ব বজায় রাখুন।",
    },

    "Police & Safety": {
      description:
        "আপনার সমস্যাটি নিরাপত্তা, অপরাধ বা পুলিশের সহায়তার সাথে সম্পর্কিত হতে পারে।",
      actions: [
        "ঘটনার সময় ও স্থান লিখে রাখুন।",
        "সম্ভব হলে প্রয়োজনীয় তথ্য বা প্রমাণ সংরক্ষণ করুন।",
        "নিজের নিরাপত্তাকে অগ্রাধিকার দিন।",
        "জরুরি পরিস্থিতিতে জাতীয় জরুরি সেবা 999-এ যোগাযোগ করুন।",
      ],
      contact:
        "Bangladesh Police / National Emergency Service",
      portal: "https://www.police.gov.bd/",
      note: "জরুরি বিপদ থাকলে 999-এ যোগাযোগ করুন।",
    },

    Health: {
      description:
        "আপনার সমস্যাটি স্বাস্থ্য বা চিকিৎসা সংক্রান্ত বলে মনে হচ্ছে।",
      actions: [
        "প্রয়োজনে নিকটস্থ হাসপাতাল বা চিকিৎসকের পরামর্শ নিন।",
        "জরুরি অবস্থায় দ্রুত চিকিৎসা সহায়তা নিন।",
        "প্রয়োজনীয় রিপোর্ট বা চিকিৎসার তথ্য সঙ্গে রাখুন।",
      ],
      contact:
        "নিকটস্থ সরকারি হাসপাতাল / স্বাস্থ্যসেবা কেন্দ্র",
      portal: "https://www.dghs.gov.bd/",
      note:
        "জরুরি চিকিৎসার প্রয়োজন হলে দ্রুত চিকিৎসা সহায়তা নিন।",
    },

    "Child Safety": {
      description:
        "আপনার সমস্যাটি শিশু সুরক্ষা বা বাল্যবিবাহের সাথে সম্পর্কিত হতে পারে।",
      actions: [
        "শিশুটির নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিন।",
        "ঘটনার স্থান ও প্রয়োজনীয় তথ্য সংগ্রহ করুন।",
        "স্থানীয় প্রশাসন বা পুলিশকে জানান।",
        "প্রয়োজনে শিশু সহায়তা সেবায় যোগাযোগ করুন।",
      ],
      contact:
        "Child Helpline 1098 / স্থানীয় প্রশাসন",
      portal: "https://dss.gov.bd/",
      note:
        "জরুরি বিপদ থাকলে 999-এ যোগাযোগ করুন।",
    },

    Education: {
      description:
        "আপনার সমস্যাটি শিক্ষা প্রতিষ্ঠান বা শিক্ষা সংক্রান্ত বলে মনে হচ্ছে।",
      actions: [
        "সমস্যাটি বিস্তারিতভাবে লিখে রাখুন।",
        "প্রথমে সংশ্লিষ্ট শিক্ষা প্রতিষ্ঠানকে জানান।",
        "প্রয়োজনে শিক্ষা কর্তৃপক্ষের কাছে অভিযোগ করুন।",
        "প্রয়োজনীয় কাগজপত্র সংরক্ষণ করুন।",
      ],
      contact:
        "শিক্ষা প্রতিষ্ঠান / সংশ্লিষ্ট শিক্ষা কর্তৃপক্ষ",
      portal: "https://www.moedu.gov.bd/",
      note:
        "অভিযোগের সময় প্রয়োজনীয় তথ্য ও কাগজপত্র সঙ্গে রাখুন।",
    },

    "Consumer Rights": {
      description:
        "আপনার সমস্যাটি ভোক্তা অধিকার বা পণ্য/সেবার অভিযোগের সাথে সম্পর্কিত।",
      actions: [
        "পণ্য বা সেবার রসিদ/প্রমাণ সংরক্ষণ করুন।",
        "সমস্যাযুক্ত পণ্যের ছবি বা তথ্য রাখুন।",
        "দোকান বা সেবা প্রদানকারীর তথ্য লিখে রাখুন।",
        "প্রয়োজনে জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ করুন।",
      ],
      contact:
        "জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর — 16121",
      portal: "https://dncrp.gov.bd/",
      note:
        "অভিযোগ করার সময় ক্রয় রসিদ ও প্রয়োজনীয় প্রমাণ সঙ্গে রাখুন।",
    },

    "NID & Voter Services": {
      description:
        "আপনার সমস্যাটি NID, ভোটার তথ্য বা জাতীয় পরিচয়পত্র সংক্রান্ত।",
      actions: [
        "আপনার NID বা ভোটার সংক্রান্ত তথ্য প্রস্তুত রাখুন।",
        "ভুল তথ্য থাকলে সংশোধনের জন্য সংশ্লিষ্ট NID সেবা ব্যবহার করুন।",
        "প্রয়োজনীয় কাগজপত্র সঙ্গে রাখুন।",
        "প্রয়োজনে নির্বাচন কমিশনের NID সেবায় যোগাযোগ করুন।",
      ],
      contact:
        "নির্বাচন কমিশন — NID Wing / হেল্পলাইন 105",
      portal: "https://services.nidw.gov.bd/",
      note:
        "NID সংক্রান্ত তথ্য দেওয়ার সময় ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করুন।",
    },

    "Government Services": {
      description:
        "আপনার সমস্যাটি সরকারি সেবা, তথ্য বা সরকারি অভিযোগের সাথে সম্পর্কিত হতে পারে।",
      actions: [
        "সমস্যাটি পরিষ্কারভাবে লিখে রাখুন।",
        "প্রয়োজনীয় কাগজপত্র বা তথ্য প্রস্তুত রাখুন।",
        "সংশ্লিষ্ট সরকারি দপ্তর বা অনলাইন সেবা ব্যবহার করুন।",
        "প্রয়োজনে জাতীয় তথ্য ও সেবা হেল্পলাইন 333-এ যোগাযোগ করুন।",
      ],
      contact:
        "জাতীয় তথ্য ও সেবা হেল্পলাইন — 333",
      portal: "https://bangladesh.gov.bd/",
      note:
        "সরকারি সেবা নেওয়ার সময় সংশ্লিষ্ট অফিসিয়াল ওয়েবসাইট ব্যবহার করুন।",
    },

    "General Problem": {
      description:
        "আপনার সমস্যাটি সাধারণ নাগরিক সমস্যা হিসেবে শনাক্ত হয়েছে।",
      actions: [
        "সমস্যাটি আরও বিস্তারিতভাবে লিখুন।",
        "সমস্যার ছবি দিলে বিষয়টি বুঝতে সুবিধা হবে।",
        "সঠিক লোকেশন দিলে সংশ্লিষ্ট সেবা খুঁজে পাওয়া সহজ হবে।",
        "প্রয়োজনে জাতীয় তথ্য ও সেবা হেল্পলাইন 333 ব্যবহার করুন।",
      ],
      contact:
        "সংশ্লিষ্ট স্থানীয় সরকারি কর্তৃপক্ষ / 333",
      portal: "https://bangladesh.gov.bd/",
      note:
        "জরুরি পরিস্থিতিতে জাতীয় জরুরি সেবা 999 ব্যবহার করুন।",
    },
  };

  return data[category];
}

/* =========================
   MAIN APP
========================= */

function App() {
  const [problem, setProblem] = useState("");
  const [language, setLanguage] = useState("বাংলা");

  const [result, setResult] = useState(null);

  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");

  const [listening, setListening] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showDirectory, setShowDirectory] = useState(false);

  const [history, setHistory] = useState([]);

  /* =========================
     COMMUNITY
  ========================= */

  const [communityProblems, setCommunityProblems] =
    useState(() => {
      try {
        return JSON.parse(
          localStorage.getItem("somadhanCommunity") || "[]"
        );
      } catch {
        return [];
      }
    });

  const [communityText, setCommunityText] = useState("");

  function submitCommunityProblem() {
    if (!communityText.trim()) {
      alert("আগে সমস্যাটি লিখুন।");
      return;
    }

    const category = detectCategory(communityText);

    const newCommunityProblem = {
      id: Date.now(),
      text: communityText.trim(),
      category: category,
      date: new Date().toLocaleDateString(),
    };

    const updatedProblems = [
      newCommunityProblem,
      ...communityProblems,
    ];

    setCommunityProblems(updatedProblems);

    localStorage.setItem(
      "somadhanCommunity",
      JSON.stringify(updatedProblems)
    );

    setCommunityText("");

    alert(
      "আপনার সমস্যাটি Community Problems-এ যোগ হয়েছে।"
    );
  }

  /* =========================
     GET GUIDANCE
  ========================= */

async function getGuidance() {
  if (!problem.trim()) {
    alert(
      "আগে আপনার সমস্যাটি লিখুন অথবা Voice দিয়ে বলুন।"
    );
    return;
  }

  const category = detectCategory(problem);
  const guidance = getCategoryGuidance(category);

  const newResult = {
    problem,
    category,
    guidance,
    date: new Date().toLocaleString(),
  };

  setResult(newResult);

  setHistory((oldHistory) => [
    newResult,
    ...oldHistory,
  ]);

  try {
    await fetch(
      "https://somadhanbd-backend.onrender.com/",
      {
        method: "GET",
      }
    );
  } catch (error) {
    console.log(
      "Backend connection error:",
      error
    );
  }

  setTimeout(() => {
    document
      .getElementById("result")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 100);
}

  /* =========================
     CLEAR
  ========================= */

  function clearAll() {
    setProblem("");
    setPhoto(null);
    setFile(null);
    setLocation("");
    setResult(null);
  }

  /* =========================
     VOICE INPUT
  ========================= */

  function startVoice() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "আপনার browser voice input support করছে না। Google Chrome ব্যবহার করুন।"
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "bn-BD";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const text =
        event.results[0][0].transcript;

      setProblem((oldText) =>
        oldText
          ? `${oldText} ${text}`
          : text
      );
    };

    recognition.onerror = () => {
      setListening(false);
      alert(
        "Voice input নেওয়া যায়নি। আবার চেষ্টা করুন।"
      );
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  }

  /* =========================
     LOCATION
  ========================= */

  function getLocation() {
    if (!navigator.geolocation) {
      alert(
        "আপনার browser location support করে না।"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat =
          position.coords.latitude.toFixed(5);

        const lng =
          position.coords.longitude.toFixed(5);

        setLocation(`${lat}, ${lng}`);
      },
      () => {
        alert(
          "Location পাওয়া যায়নি। Browser location permission দিন।"
        );
      }
    );
  }

  /* =========================
     REGISTER
  ========================= */

  function registerUser() {
    if (
      !registerName.trim() ||
      !registerEmail.trim() ||
      !registerPassword ||
      !confirmPassword
    ) {
      alert("সবগুলো ঘর পূরণ করুন।");
      return;
    }

    if (
      registerPassword !==
      confirmPassword
    ) {
      alert(
        "Password এবং Confirm Password একই নয়।"
      );
      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem(
          "somadhanUsers"
        ) || "[]"
      );

    const exists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        registerEmail.toLowerCase()
    );

    if (exists) {
      alert(
        "এই email দিয়ে আগে থেকেই account আছে।"
      );
      return;
    }

    users.push({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    });

    localStorage.setItem(
      "somadhanUsers",
      JSON.stringify(users)
    );

    alert("Registration successful!");

    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setConfirmPassword("");

    setShowRegister(false);
    setShowLogin(true);
  }

  /* =========================
     LOGIN
  ========================= */

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] =
    useState("");

  const [registerName, setRegisterName] =
    useState("");
  const [registerEmail, setRegisterEmail] =
    useState("");
  const [registerPassword, setRegisterPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  function loginUser() {
    const users =
      JSON.parse(
        localStorage.getItem(
          "somadhanUsers"
        ) || "[]"
      );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          loginEmail.toLowerCase() &&
        item.password === loginPassword
    );

    if (!user) {
      alert(
        "Email অথবা Password সঠিক নয়।"
      );
      return;
    }

    alert(`Welcome, ${user.name}!`);

    setLoginEmail("");
    setLoginPassword("");
    setShowLogin(false);
  }

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">
        <Logo />

        <nav>
          <button
            onClick={() =>
              document
                .getElementById("guidance")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Get Guidance
          </button>

          <button
            onClick={() =>
              document
                .getElementById("community")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Community Problems
          </button>

          <button
            onClick={() =>
              setShowDirectory(true)
            }
          >
            Civic Directory
          </button>

          <button
            onClick={() =>
              setShowHistory(true)
            }
          >
            My History
          </button>

          <button
            className="login-btn"
            onClick={() =>
              setShowLogin(true)
            }
          >
            Login
          </button>

          <button
            className="register-btn"
            onClick={() =>
              setShowRegister(true)
            }
          >
            Register
          </button>
        </nav>
      </header>

      {/* HERO */}

      <section
        className="hero"
        id="guidance"
      >
        <div className="hero-badge">
          ✦ Bangladesh Citizen Guidance Platform
        </div>

        <h1>
          Your Problem.
          <br />
          <span>Our Guidance.</span>
        </h1>

        <p>
          আপনার সমস্যা লিখুন, বলুন অথবা ছবি/ফাইল দিন।
          <br />
          SomadhanBD আপনাকে সঠিক দিকনির্দেশনা খুঁজে পেতে সাহায্য করবে।
        </p>

        <div className="input-card">

          <div className="input-header">
            <div>
              <h3>
                আপনার সমস্যাটি লিখুন
              </h3>

              <span>
                বাংলা, English অথবা Banglish — যেভাবে সহজ মনে হয়
              </span>
            </div>

            <div className="languages">
              {[
                "বাংলা",
                "English",
                "Banglish",
              ].map((item) => (
                <button
                  key={item}
                  className={
                    language === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setLanguage(item)
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={problem}
            onChange={(e) =>
              setProblem(e.target.value)
            }
            placeholder="আপনার সমস্যাটি এখানে লিখুন..."
          />

          <div className="tools">

            <button
              className={
                listening
                  ? "tool active-tool"
                  : "tool"
              }
              onClick={startVoice}
            >
              🎙️
              <span>
                {listening
                  ? "Listening..."
                  : "Voice"}
              </span>
            </button>

            <label className="tool">
              📷
              <span>Photo</span>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setPhoto(
                    e.target.files[0]
                  )
                }
              />
            </label>

            <label className="tool">
              📎
              <span>File</span>

              <input
                type="file"
                hidden
                onChange={(e) =>
                  setFile(
                    e.target.files[0]
                  )
                }
              />
            </label>

            <button
              className="tool"
              onClick={getLocation}
            >
              📍
              <span>Location</span>
            </button>

            <button
              className="tool clear"
              onClick={clearAll}
            >
              ✕
              <span>Clear</span>
            </button>

          </div>

          {(photo ||
            file ||
            location) && (
            <div className="attachments">

              {photo && (
                <span>
                  📷 {photo.name}
                </span>
              )}

              {file && (
                <span>
                  📎 {file.name}
                </span>
              )}

              {location && (
                <span>
                  📍 Location Added
                </span>
              )}

            </div>
          )}

          <button
            className="main-button"
            onClick={getGuidance}
          >
            Get Guidance
            <span>→</span>
          </button>

        </div>

        <div className="examples">

          <span>
            Try an example:
          </span>

          <button
            onClick={() =>
              setProblem(
                "আমাদের এলাকার রাস্তার অনেক জায়গায় বড় বড় গর্ত হয়েছে।"
              )
            }
          >
            🚧 রাস্তার সমস্যা
          </button>

          <button
            onClick={() =>
              setProblem(
                "আমাদের এলাকায় কয়েকদিন ধরে পানির সমস্যা হচ্ছে।"
              )
            }
          >
            💧 পানির সমস্যা
          </button>

          <button
            onClick={() =>
              setProblem(
                "আমার এলাকায় বাল্যবিবাহের আয়োজন করা হচ্ছে।"
              )
            }
          >
            🧒 বাল্যবিবাহ
          </button>

        </div>
      </section>

      {/* RESULT */}

      {result && (
        <section
          className="result-section"
          id="result"
        >
          <div className="result-card">

            <div className="result-heading">

              <div>
                <small>
                  IDENTIFIED CATEGORY
                </small>

                <h2>
                  {result.category}
                </h2>
              </div>

              <div className="success-icon">
                ✓
              </div>

            </div>

            <p className="result-description">
              {result.guidance.description}
            </p>

            <div className="result-columns">

              <div>
                <h3>
                  What you can do
                </h3>

                <ul>
                  {result.guidance.actions.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h3>
                  Where to contact
                </h3>

                <p>
                  {result.guidance.contact}
                </p>

                <a
                  href={
                    result.guidance.portal
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Official Portal →
                </a>
              </div>

            </div>

            <div className="note">
              <strong>
                Important:
              </strong>{" "}
              {result.guidance.note}
            </div>

          </div>
        </section>
      )}

      {/* COMMUNITY PROBLEMS */}

      <section
        id="community"
        className="community-section"
        style={{
          padding: "70px 7%",
          background: "#f7fbf9",
        }}
      >

        <div
          className="section-title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >

          <div>
            <small>
              COMMUNITY SUPPORT
            </small>

            <h2>
              Community Problems
            </h2>
          </div>

          <span
            style={{
              background: "#e7f7f0",
              color: "#087b59",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            👥 {communityProblems.length} Problems
          </span>

        </div>

        <p
          style={{
            marginTop: "10px",
            color: "#667",
          }}
        >
          সাধারণ নাগরিক সমস্যাগুলো দেখুন এবং আপনার এলাকার সমস্যাও শেয়ার করুন।
          ব্যক্তিগত নাম বা email এখানে দেখানো হয় না।
        </p>

        {/* COMMUNITY INPUT */}

        <div
          style={{
            marginTop: "25px",
            background: "#ffffff",
            border: "1px solid #e1eee9",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
          }}
        >

          <h3 style={{ marginBottom: "12px" }}>
            আপনার এলাকার কোনো সমস্যা শেয়ার করুন
          </h3>

          <textarea
            value={communityText}
            onChange={(e) =>
              setCommunityText(e.target.value)
            }
            placeholder="যেমন: আমাদের এলাকায় রাস্তার বাতি অনেকদিন ধরে নষ্ট..."
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #d8e5e0",
              resize: "vertical",
              fontFamily: "inherit",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <button
            className="main-button"
            onClick={submitCommunityProblem}
            style={{
              marginTop: "12px",
            }}
          >
            Share Problem
            <span>→</span>
          </button>

        </div>

        {/* COMMUNITY LIST */}

        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
          }}
        >

          {communityProblems.length === 0 ? (

            <div
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "18px",
                textAlign: "center",
                border: "1px solid #e4eee9",
                color: "#71807c",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                🏘️
              </div>

              <h3>
                এখনো কোনো community problem নেই
              </h3>

              <p style={{ marginTop: "6px" }}>
                প্রথম সমস্যাটি আপনিই শেয়ার করতে পারেন।
              </p>
            </div>

          ) : (

            communityProblems.map((item) => (

              <div
                key={item.id}
                style={{
                  background: "#ffffff",
                  padding: "20px",
                  borderRadius: "18px",
                  border: "1px solid #e4eee9",
                  boxShadow:
                    "0 8px 22px rgba(0,0,0,0.04)",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >

                  <span
                    style={{
                      background: "#e8f7f1",
                      color: "#087b59",
                      padding: "5px 10px",
                      borderRadius: "15px",
                      fontSize: "11px",
                      fontWeight: "700",
                    }}
                  >
                    {item.category}
                  </span>

                  <small
                    style={{
                      color: "#899",
                    }}
                  >
                    {item.date}
                  </small>

                </div>

                <p
                  style={{
                    color: "#30433f",
                    lineHeight: "1.7",
                    fontSize: "14px",
                  }}
                >
                  {item.text}
                </p>

                <div
                  style={{
                    marginTop: "14px",
                    paddingTop: "12px",
                    borderTop:
                      "1px solid #edf2f0",
                    fontSize: "12px",
                    color: "#899",
                  }}
                >
                  👤 Anonymous Citizen
                </div>

              </div>

            ))

          )}

        </div>

      </section>

      {/* DIRECTORY */}

      <section className="directory-section">

        <div className="section-title">

          <div>
            <small>
              QUICK ACCESS
            </small>

            <h2>
              নাগরিক সেবা জরুরি ডিরেক্টরি
            </h2>
          </div>

          <button
            onClick={() =>
              setShowDirectory(true)
            }
          >
            View All Services →
          </button>

        </div>

        <p className="directory-subtitle">
          বাংলাদেশের গুরুত্বপূর্ণ নাগরিক সেবা ও হেল্পলাইন এক জায়গায়।
        </p>

        <div className="directory-preview">

          {directory
            .slice(0, 6)
            .map((item, index) => (

              <div
                className="directory-card"
                key={index}
              >

                <div className="service-icon green">
                  {item.icon}
                </div>

                <div className="service-content">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.title}
                  </p>

                  <small>
                    {item.area}
                  </small>

                  <a
                    href={`tel:${item.phone.replace(
                      /[^0-9+]/g,
                      ""
                    )}`}
                    className="hotline"
                  >
                    ☎ {item.phone}
                  </a>

                </div>

              </div>

            ))}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="how-section">

        <div className="section-title center">

          <div>
            <small>
              HOW IT WORKS
            </small>

            <h2>
              সাহায্য পাওয়া সহজ
            </h2>
          </div>

        </div>

        <div className="steps">

          <div className="step">
            <div>01</div>
            <span>✍️</span>

            <h3>
              সমস্যা বলুন
            </h3>

            <p>
              লিখুন অথবা Voice দিয়ে বলুন।
            </p>
          </div>

          <div className="step">
            <div>02</div>
            <span>🔎</span>

            <h3>
              সমস্যা বুঝুন
            </h3>

            <p>
              সমস্যার ধরন শনাক্ত করা হবে।
            </p>
          </div>

          <div className="step">
            <div>03</div>
            <span>🧭</span>

            <h3>
              সঠিক দিকনির্দেশনা
            </h3>

            <p>
              কী করবেন এবং কোথায় যাবেন তা দেখুন।
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <Logo />

        <p>
          © 2026 SomadhanBD • Your Problem, Our Guidance
        </p>

      </footer>

      {/* LOGIN */}

      {showLogin && (

        <div
          className="overlay"
          onClick={() =>
            setShowLogin(false)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setShowLogin(false)
              }
            >
              ×
            </button>

            <Logo />

            <h2>
              Welcome Back
            </h2>

            <p>
              Login করে আপনার history দেখতে পারবেন।
            </p>

            <input
              type="email"
              placeholder="Email address"
              value={loginEmail}
              onChange={(e) =>
                setLoginEmail(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) =>
                setLoginPassword(
                  e.target.value
                )
              }
            />

            <button
              className="modal-button"
              onClick={loginUser}
            >
              Login
            </button>

            <div className="switch">

              Don't have an account?

              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                Register
              </button>

            </div>

          </div>

        </div>

      )}

      {/* REGISTER */}

      {showRegister && (

        <div
          className="overlay"
          onClick={() =>
            setShowRegister(false)
          }
        >

          <div
            className="modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setShowRegister(false)
              }
            >
              ×
            </button>

            <Logo />

            <h2>
              Create Account
            </h2>

            <p>
              Account খুললে আপনার history সংরক্ষণ করা সহজ হবে।
            </p>

            <input
              type="text"
              placeholder="Full Name"
              value={registerName}
              onChange={(e) =>
                setRegisterName(
                  e.target.value
                )
              }
            />

            <input
              type="email"
              placeholder="Email address"
              value={registerEmail}
              onChange={(e) =>
                setRegisterEmail(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) =>
                setRegisterPassword(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              className="modal-button"
              onClick={registerUser}
            >
              Register
            </button>

            <div className="switch">

              Already have an account?

              <button
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                Login
              </button>

            </div>

          </div>

        </div>

      )}

      {/* HISTORY */}

      {showHistory && (

        <div
          className="overlay"
          onClick={() =>
            setShowHistory(false)
          }
        >

          <div
            className="modal history-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setShowHistory(false)
              }
            >
              ×
            </button>

            <h2>
              My History
            </h2>

            <p>
              এই session-এ আপনার দেওয়া সমস্যাগুলো।
            </p>

            {history.length === 0 ? (

              <div className="empty">
                📋

                <p>
                  এখনো কোনো problem submit করা হয়নি।
                </p>
              </div>

            ) : (

              <div className="history-list">

                {history.map(
                  (item, index) => (

                    <div
                      className="history-item"
                      key={index}
                    >

                      <b>
                        {item.category}
                      </b>

                      <p>
                        {item.problem}
                      </p>

                      <small>
                        {item.date}
                      </small>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        </div>

      )}

      {/* DIRECTORY MODAL */}

      {showDirectory && (

        <div
          className="overlay directory-overlay"
          onClick={() =>
            setShowDirectory(false)
          }
        >

          <div
            className="directory-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setShowDirectory(false)
              }
            >
              ×
            </button>

            <div className="directory-modal-head">

              <div>

                <small>
                  24/7 CITIZEN SUPPORT
                </small>

                <h2>
                  নাগরিক সেবা জরুরি ডিরেক্টরি
                </h2>

                <p>
                  Bangladesh Civic Directory
                </p>

              </div>

              <div className="available">
                ● নাগরিক সেবা
              </div>

            </div>

            <div className="directory-full">

              {directory.map(
                (item, index) => (

                  <div
                    className="directory-card"
                    key={index}
                  >

                    <div className="service-icon green">
                      {item.icon}
                    </div>

                    <div className="service-content">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        {item.title}
                      </p>

                      <small>
                        {item.area}
                      </small>

                      <a
                        href={`tel:${item.phone.replace(
                          /[^0-9+]/g,
                          ""
                        )}`}
                        className="hotline"
                      >
                        ☎ Hotline: {item.phone}
                      </a>

                    </div>

                  </div>

                )
              )}

            </div>

            <div className="directory-note">

              তথ্য ও হটলাইন নম্বর পরিবর্তিত হতে পারে।
              গুরুত্বপূর্ণ সেবার ক্ষেত্রে সংশ্লিষ্ট সরকারি
              ওয়েবসাইটে তথ্য যাচাই করুন।

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);