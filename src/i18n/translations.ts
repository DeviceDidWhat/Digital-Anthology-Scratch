import type { Language } from "@/contexts/LanguageContext";

export const translations = {
  en: {
    navbar: {
      brand: "Rangilo Rajasthan",
      exploreGames: "Explore Games",
      about: "About",
      contributors: "Contributors",
      startLearning: "Start Learning",
      language: "Language",
      english: "EN",
      hindi: "हिं",
    },
    hero: {
      title: "Rangilo Rajasthan",
      tagline: "Learn the colors, crafts, and stories of Rajasthan through play",
      cta: "Start Exploring",
      miniGames: "Mini Games",
      categories: "Categories",
      funLearning: "Fun & Learning",
    },
    categoriesSection: {
      title: "Explore the Colors of Rajasthan",
      description:
        "Dive into six vibrant categories, each filled with interactive games that bring Rajasthani culture to life",
    },
    scratchSection: {
      title: "STEM GAMES",
      description:
        "Play Scratch projects directly from the homepage alongside the rest of the anthology.",
      badge: "Scratch",
    },
    features: {
      title: "Why Learn with Us?",
      description:
        "Experience Rajasthani heritage through joyful, engaging gameplay",
      quoteLabel: "Welcome to our land",
      items: [
        {
          icon: "🎮",
          title: "25+ Interactive Games",
          description:
            "From memory matches to quizzes, puzzles to creative challenges",
        },
        {
          icon: "📚",
          title: "Authentic Learning",
          description:
            "Content crafted with cultural experts and historians",
        },
        {
          icon: "🏆",
          title: "Earn Achievements",
          description:
            "Collect badges and track your cultural knowledge journey",
        },
        {
          icon: "👨‍👩‍👧‍👦",
          title: "For All Ages",
          description: "Suitable for ages 8+ with varying difficulty levels",
        },
      ],
    },
    footer: {
      description:
        "A joyful journey through the vibrant culture, traditions, and artistry of Rajasthan.",
      categories: "Categories",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      contributors: "Contributors",
      contact: "Contact",
      culturalNoteTitle: "Padharo Mhare Desh",
      culturalNote:
        '"Welcome to our land" - Experience the warmth and hospitality of Rajasthan through interactive learning.',
      copyright:
        "© 2026 Rangilo Rajasthan. Made with love for Rajasthani culture.",
    },
    breadcrumb: {
      home: "Home",
    },
    filters: {
      searchPlaceholder: "Search games...",
      difficulty: "Difficulty:",
      time: "Time:",
      clearAll: "Clear all",
      difficultyOptions: {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
      },
      timeOptions: {
        quick: "< 7 min",
        medium: "7-10 min",
        long: "10+ min",
      },
    },
    gameCard: {
      difficulty: "Difficulty:",
      playNow: "Play Now",
      comingSoon: "Coming Soon",
      games: "Games",
      minuteShort: "min",
    },
    categoryPage: {
      categoryNotFound: "Category Not Found",
      categoryMissing:
        "This category seems to have wandered into the desert.",
      returnHome: "Return to Homepage",
      allSkillLevels: "All skill levels",
      showing: "Showing",
      filtered: "(filtered)",
      noGamesFound: "No games found",
      adjustFilters: "Try adjusting your filters or search query",
      clearFilters: "Clear all filters",
      exploreOther: "Explore Other Categories",
    },
    aboutPage: {
      badge: "IIT Jodhpur Digital Initiative",
      titleFirst: "Rangilo",
      titleSecond: "Rajasthan",
      subtitle: "A Digital Symphony of Heritage, Culture & Innovation",
      exploreNow: "Explore Now",
      learnMore: "Learn More",
      missionTitle: "Our Mission",
      missionPart1:
        "Rangilo Rajasthan serves as a bridge between the ancient soul of the Thar Desert and the limitless potential of the digital age. Our primary goal is to ensure that the ",
      missionHighlight: "intangible cultural heritage",
      missionPart2:
        " of Rajasthan is not just archived, but experienced through interactive storytelling and play.",
      preserve: "Preserve",
      play: "Play",
      anthologyTitle: "What is a Digital Scratch Anthology?",
      anthologyPart1:
        'Unlike static museums, a "Scratch Anthology" is an evolving digital canvas. We use ',
      anthologyHighlight: "computational creativity",
      anthologyPart2:
        ' and interactive coding to allow users to "scratch" beneath the surface of traditional art forms. It is where technology helps reveal the mathematics in ',
      anthologyMandana: "Mandana",
      anthologyPart3: " art and the physics in folk music.",
      stemHeritage: "STEM meets Heritage",
      stats: [
        { label: "Games", val: "30+", icon: "🎯" },
        { label: "Learners", val: "15K+", icon: "👥" },
        { label: "Accuracy", val: "100%", icon: "📜" },
        { label: "Rating", val: "4.9★", icon: "⭐" },
      ],
      footer: "© 2026 Rangilo Rajasthan • IIT Jodhpur Project",
    },
    contributorsPage: {
      badge: "Project Team",
      title: "Mentors and Contributors",
      subtitle:
        "Meet the people who shaped the concept, design, content, and development behind Rangilo Rajasthan.",
      instituteLabel: "IIT Jodhpur Digital Initiative",
      instituteTitle: "About IIT Jodhpur and This Digital Anthology",
      instituteDescription:
        "Rangilo Rajasthan is presented as a digital initiative shaped within the IIT Jodhpur ecosystem. Through student contribution, faculty mentorship, interactive design, and Scratch-based experimentation, the project turns cultural storytelling into a playful digital anthology rooted in learning, creativity, and heritage.",
      instituteDescription2:
        "The platform reflects an approach where technology is used not only to build software, but also to preserve culture, encourage exploration, and make Rajasthan's traditions accessible in an engaging form for modern learners.",
      overviewTitle: "About This Team Page",
      overviewDescription:
        "This page is designed to highlight the individuals who contributed to the project, along with mentors who guided the direction, quality, and educational focus of the work.",
      mentorsTitle: "Mentors",
      mentorsDescription:
        "Faculty members, guides, or project advisors who supported the team with direction and review.",
      contributorsTitle: "Contributors",
      contributorsDescription:
        "Core project members involved in building, designing, researching and organizing the platform.",
      funFactLabel: "Fun Fact",
      detailLabel: "Focus Area",
      affiliationLabel: "Affiliation",
      emailLabel: "Email",
      phoneLabel: "Phone",
      educationLabel: "Academic Background",
      noteTitle: "Update This Page",
      noteDescription:
        "Replace the placeholder names and descriptions in the team data file with the actual contributor and mentor details for your project.",
    },
    notFound: {
      greeting: "Padhare Sa!",
      title: "Lost in the Golden Sands?",
      description:
        "The path you're looking for has been hidden by a desert storm. Let's guide you back to the Haveli.",
      button: "Take me back to the Home",
    },
  },
  hi: {
    navbar: {
      brand: "रंगीला राजस्थान",
      exploreGames: "गेम्स देखें",
      about: "परिचय",
      contributors: "योगदानकर्ता",
      startLearning: "सीखना शुरू करें",
      language: "भाषा",
      english: "EN",
      hindi: "हिं",
    },
    hero: {
      title: "रंगीला राजस्थान",
      tagline:
        "खेलते-खेलते राजस्थान के रंग, शिल्प और कहानियों को जानिए",
      cta: "खोज शुरू करें",
      miniGames: "मिनी गेम्स",
      categories: "श्रेणियां",
      funLearning: "मज़ा और सीख",
    },
    categoriesSection: {
      title: "राजस्थान के रंगों को खोजिए",
      description:
        "छह जीवंत श्रेणियों में उतरिए, जहां इंटरैक्टिव गेम्स राजस्थान की संस्कृति को जीवंत बनाते हैं",
    },
    scratchSection: {
      title: "विज्ञान, प्रौद्योगिकी, अभियांत्रिकी एवं गणित गेम्स",
      description:
        "होमपेज से ही स्क्रैच प्रोजेक्ट्स खेलिए और एंथोलॉजी के बाकी अनुभवों के साथ उन्हें भी खोजिए।",
      badge: "स्क्रैच",
    },
    features: {
      title: "हमारे साथ क्यों सीखें?",
      description:
        "रोचक और आनंददायक गेमप्ले के माध्यम से राजस्थानी विरासत को महसूस कीजिए",
      quoteLabel: "हमारी धरती पर आपका स्वागत है",
      items: [
        {
          icon: "🎮",
          title: "25+ इंटरैक्टिव गेम्स",
          description:
            "मेमोरी मैच से क्विज़ तक, पहेलियों से रचनात्मक चुनौतियों तक",
        },
        {
          icon: "📚",
          title: "प्रामाणिक सीख",
          description:
            "सांस्कृतिक विशेषज्ञों और इतिहासकारों की समझ से तैयार सामग्री",
        },
        {
          icon: "🏆",
          title: "उपलब्धियां पाएं",
          description:
            "बैज इकट्ठा करें और अपनी सांस्कृतिक सीख की यात्रा को ट्रैक करें",
        },
        {
          icon: "👨‍👩‍👧‍👦",
          title: "हर आयु के लिए",
          description: "8 वर्ष से ऊपर सभी के लिए उपयुक्त, अलग-अलग कठिनाई स्तरों के साथ",
        },
      ],
    },
    footer: {
      description:
        "राजस्थान की जीवंत संस्कृति, परंपराओं और कलात्मकता की एक आनंदमयी यात्रा।",
      categories: "श्रेणियां",
      quickLinks: "त्वरित लिंक",
      aboutUs: "हमारे बारे में",
      contributors: "योगदानकर्ता",
      contact: "संपर्क",
      culturalNoteTitle: "पधारो म्हारे देश",
      culturalNote:
        '"हमारी धरती पर आपका स्वागत है" - इंटरैक्टिव सीख के माध्यम से राजस्थान की गर्मजोशी और मेहमाननवाज़ी का अनुभव कीजिए।',
      copyright:
        "© 2026 रंगीला राजस्थान। राजस्थानी संस्कृति के लिए प्रेम से बनाया गया।",
    },
    breadcrumb: {
      home: "मुखपृष्ठ",
    },
    filters: {
      searchPlaceholder: "गेम खोजें...",
      difficulty: "कठिनाई:",
      time: "समय:",
      clearAll: "सभी साफ करें",
      difficultyOptions: {
        easy: "आसान",
        medium: "मध्यम",
        hard: "कठिन",
      },
      timeOptions: {
        quick: "< 7 मिनट",
        medium: "7-10 मिनट",
        long: "10+ मिनट",
      },
    },
    gameCard: {
      difficulty: "कठिनाई:",
      playNow: "अभी खेलें",
      comingSoon: "जल्द आ रहा है",
      games: "गेम्स",
      minuteShort: "मिनट",
    },
    categoryPage: {
      categoryNotFound: "श्रेणी नहीं मिली",
      categoryMissing: "लगता है यह श्रेणी रेगिस्तान में कहीं भटक गई है।",
      returnHome: "मुखपृष्ठ पर लौटें",
      allSkillLevels: "सभी स्तरों के लिए",
      showing: "दिखाए जा रहे हैं",
      filtered: "(फ़िल्टर किया गया)",
      noGamesFound: "कोई गेम नहीं मिला",
      adjustFilters: "अपने फ़िल्टर या खोज को बदलकर देखें",
      clearFilters: "सभी फ़िल्टर साफ करें",
      exploreOther: "अन्य श्रेणियां देखें",
    },
    aboutPage: {
      badge: "आईआईटी जोधपुर डिजिटल पहल",
      titleFirst: "रंगीला",
      titleSecond: "राजस्थान",
      subtitle: "विरासत, संस्कृति और नवाचार की एक डिजिटल सिम्फनी",
      exploreNow: "अभी खोजें",
      learnMore: "और जानें",
      missionTitle: "हमारा उद्देश्य",
      missionPart1:
        "रंगीला राजस्थान थार मरुस्थल की प्राचीन आत्मा और डिजिटल युग की असीम संभावनाओं के बीच एक सेतु का काम करता है। हमारा मुख्य उद्देश्य यह सुनिश्चित करना है कि राजस्थान की ",
      missionHighlight: "अमूर्त सांस्कृतिक धरोहर",
      missionPart2:
        " केवल संग्रहित न रहे, बल्कि इंटरैक्टिव कहानी और खेल के माध्यम से अनुभव की जाए।",
      preserve: "संरक्षण",
      play: "खेल",
      anthologyTitle: "डिजिटल स्क्रैच एंथोलॉजी क्या है?",
      anthologyPart1:
        'स्थिर संग्रहालयों के विपरीत, "स्क्रैच एंथोलॉजी" एक विकसित होता डिजिटल कैनवास है। हम ',
      anthologyHighlight: "कंप्यूटेशनल क्रिएटिविटी",
      anthologyPart2:
        ' और इंटरैक्टिव कोडिंग का उपयोग करते हैं ताकि उपयोगकर्ता पारंपरिक कला रूपों की सतह के नीचे "स्क्रैच" कर सकें। यही वह जगह है जहां तकनीक ',
      anthologyMandana: "मांडना",
      anthologyPart3:
        " कला में गणित और लोक संगीत में भौतिकी को उजागर करने में मदद करती है।",
      stemHeritage: "एसटीईएम और विरासत का संगम",
      stats: [
        { label: "गेम्स", val: "30+", icon: "🎯" },
        { label: "शिक्षार्थी", val: "15K+", icon: "👥" },
        { label: "सटीकता", val: "100%", icon: "📜" },
        { label: "रेटिंग", val: "4.9★", icon: "⭐" },
      ],
      footer: "© 2026 रंगीला राजस्थान • आईआईटी जोधपुर परियोजना",
    },
    contributorsPage: {
      badge: "परियोजना टीम",
      title: "मार्गदर्शक और योगदानकर्ता",
      subtitle:
        "रंगीला राजस्थान के विचार, डिज़ाइन, सामग्री और विकास में योगदान देने वाले लोगों से मिलिए।",
      instituteLabel: "आईआईटी जोधपुर डिजिटल पहल",
      instituteTitle: "आईआईटी जोधपुर और इस डिजिटल एंथोलॉजी के बारे में",
      instituteDescription:
        "रंगीला राजस्थान को आईआईटी जोधपुर से जुड़ी एक डिजिटल पहल के रूप में प्रस्तुत किया गया है। छात्र योगदान, फैकल्टी मार्गदर्शन, इंटरैक्टिव डिज़ाइन और स्क्रैच-आधारित प्रयोगों के माध्यम से यह परियोजना सांस्कृतिक कहानी कहने को सीख, रचनात्मकता और विरासत से जुड़ी एक रोचक डिजिटल एंथोलॉजी में बदल देती है।",
      instituteDescription2:
        "यह प्लेटफ़ॉर्म इस विचार को दर्शाता है कि तकनीक केवल सॉफ़्टवेयर बनाने का साधन नहीं है, बल्कि संस्कृति को संरक्षित करने, खोज को प्रोत्साहित करने और राजस्थान की परंपराओं को आधुनिक शिक्षार्थियों के लिए आकर्षक रूप में प्रस्तुत करने का माध्यम भी है।",
      overviewTitle: "इस टीम पेज के बारे में",
      overviewDescription:
        "यह पेज उन लोगों को सामने लाने के लिए बनाया गया है जिन्होंने इस परियोजना में योगदान दिया, साथ ही उन मार्गदर्शकों को भी जो दिशा, गुणवत्ता और शैक्षिक दृष्टि प्रदान करते रहे।",
      mentorsTitle: "मार्गदर्शक",
      mentorsDescription:
        "फैकल्टी सदस्य, गाइड या प्रोजेक्ट सलाहकार जिन्होंने टीम को दिशा और समीक्षा दी।",
      contributorsTitle: "योगदानकर्ता",
      contributorsDescription:
        "वे मुख्य सदस्य जिन्होंने प्लेटफ़ॉर्म के निर्माण, डिज़ाइन, शोध या समन्वय में काम किया।",
      funFactLabel: "रोचक तथ्य",
      detailLabel: "मुख्य कार्यक्षेत्र",
      affiliationLabel: "संस्थान / संबद्धता",
      emailLabel: "ईमेल",
      phoneLabel: "फ़ोन",
      educationLabel: "शैक्षणिक पृष्ठभूमि",
      noteTitle: "इस पेज को अपडेट करें",
      noteDescription:
        "अपने प्रोजेक्ट के वास्तविक योगदानकर्ता और मार्गदर्शक विवरण जोड़ने के लिए टीम डेटा फ़ाइल में दिए गए प्लेसहोल्डर नाम और विवरण बदलें।",
    },
    notFound: {
      greeting: "पधारे सा!",
      title: "क्या आप सुनहरी रेत में भटक गए हैं?",
      description:
        "जिस रास्ते को आप ढूंढ रहे हैं उसे रेगिस्तानी आंधी ने छिपा दिया है। आइए, आपको फिर से हवेली तक पहुंचाते हैं।",
      button: "मुझे वापस मुखपृष्ठ पर ले चलें",
    },
  },
} as const;

export const getTranslations = (language: Language) => translations[language];

export const getLocalizedValue = (
  language: Language,
  english: string,
  hindi?: string,
) => {
  if (language === "hi" && hindi) {
    return hindi;
  }

  return english;
};

export const formatGameCount = (language: Language, count: number) => {
  if (language === "hi") {
    return `${count} गेम`;
  }

  return `${count} ${count === 1 ? "Game" : "Games"}`;
};

export const formatMinuteLabel = (language: Language, minutes: number) => {
  if (language === "hi") {
    return `${minutes} मिनट`;
  }

  return `${minutes} min`;
};
