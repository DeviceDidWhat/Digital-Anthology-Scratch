export interface Game {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  playTime: number;
  icon: string;
  gradient: string;
  patternColor: string;
  externalUrl?: string;
}

export interface CategoryInfo {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  icon: string;
  gradient: string;
}

export const games: Game[] = [
  {
    id: "bandhani-matching",
    title: "Bandhej Designer",
    titleHi: "बंधेज डिज़ाइनर",
    description:
      "Create beautiful Bandhani tie-dye patterns with traditional techniques",
    descriptionHi:
      "पारंपरिक तकनीकों के साथ सुंदर बंधनी टाई-डाई पैटर्न बनाइए",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "🎯",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
    patternColor: "#d4a574",
    externalUrl: "https://bandhejio.vercel.app/",
  },
  {
    id: "ajrakh-puzzle",
    title: "Block Print Story",
    titleHi: "ब्लॉक प्रिंट कहानी",
    description:
      "Discover the art of Rajasthani block printing and stamp patterns",
    descriptionHi:
      "राजस्थानी ब्लॉक प्रिंटिंग और छापे वाले पैटर्न की कला को जानिए",
    category: "textiles",
    difficulty: "medium",
    playTime: 10,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-primary via-primary/90 to-secondary/60",
    patternColor: "#e8d5c4",
    externalUrl: "https://rajasthani-stamp-story.lovable.app/",
  },
  {
    id: "fabric-quiz",
    title: "Desert Diva",
    titleHi: "डेजर्ट दीवा",
    description:
      "Explore the vibrant world of Rajasthani desert fashion and textiles",
    descriptionHi:
      "राजस्थानी मरुस्थलीय फैशन और वस्त्रों की रंगीन दुनिया को खोजिए",
    category: "textiles",
    difficulty: "hard",
    playTime: 8,
    icon: "👗",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://desert-diva.vercel.app/",
  },
  {
    id: "hidden-prints",
    title: "Hidden Prints",
    titleHi: "छिपे हुए प्रिंट्स",
    description:
      "Uncover the secrets of traditional Rajasthani block print designs",
    descriptionHi:
      "पारंपरिक राजस्थानी ब्लॉक प्रिंट डिज़ाइनों के रहस्यों को उजागर कीजिए",
    category: "textiles",
    difficulty: "medium",
    playTime: 7,
    icon: "🔍",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#fff5e6",
    externalUrl: "https://hiddenprints.netlify.app/",
  },
  {
    id: "mandana-art",
    title: "Mandana Art",
    titleHi: "मांडना कला",
    description:
      "Draw traditional Mandana floor paintings with geometric patterns",
    descriptionHi:
      "ज्यामितीय आकृतियों के साथ पारंपरिक मांडना फर्श चित्र बनाइए",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "✨",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#d4a574",
    externalUrl: "https://digital-society-uzmr.vercel.app/#draw",
  },
  {
    id: "kathputli-master",
    title: "Kathputli Master",
    titleHi: "कठपुतली मास्टर",
    description:
      "Learn the art of traditional Rajasthani puppet making and storytelling",
    descriptionHi:
      "पारंपरिक राजस्थानी कठपुतली निर्माण और कहानी कहने की कला सीखिए",
    category: "folk-art",
    difficulty: "medium",
    playTime: 12,
    icon: "🎭",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://kathputlimaster-digitalsociety.vercel.app/",
  },
  {
    id: "kathputli-info",
    title: "Kathputli Chronicles",
    titleHi: "कठपुतली क्रॉनिकल्स",
    description:
      "Discover the rich history and cultural significance of Kathputli puppetry",
    descriptionHi:
      "कठपुतली परंपरा के समृद्ध इतिहास और सांस्कृतिक महत्व को जानिए",
    category: "folk-art",
    difficulty: "easy",
    playTime: 8,
    icon: "📜",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6",
    externalUrl: "https://drive.google.com/file/d/1JJbvgElhSgIlOrjPhz1wKgrnvI22Pu_1/view",
  },
  {
    id: "pabuji-story",
    title: "Pabuji Ki Phad",
    titleHi: "पाबूजी की फड़",
    description:
      "Experience the legendary tale of Pabuji through traditional scroll art",
    descriptionHi:
      "पारंपरिक फड़ चित्रकला के माध्यम से पाबूजी की लोककथा का अनुभव कीजिए",
    category: "folk-art",
    difficulty: "medium",
    playTime: 10,
    icon: "🏇",
    gradient: "bg-gradient-to-br from-terracotta to-mustard/80",
    patternColor: "#4a3728",
    externalUrl: "https://priyanshu8058.github.io/Humanity_Digital_Society/",
  },
  {
    id: "story-place",
    title: "Story Place",
    titleHi: "कहानी संसार",
    description: "Immerse yourself in the storytelling traditions of Rajasthan",
    descriptionHi: "राजस्थान की कहानी कहने की परंपराओं में डूब जाइए",
    category: "folk-art",
    difficulty: "hard",
    playTime: 15,
    icon: "📖",
    gradient: "bg-gradient-to-br from-secondary via-terracotta to-mustard/60",
    patternColor: "#d4a574",
    externalUrl: "https://b23cs1037-digital-society.vercel.app/",
  },
  {
    id: "interactive-map",
    title: "Rajasthan Explorer",
    titleHi: "राजस्थान एक्सप्लोरर",
    description:
      "Navigate an interactive map of Rajasthan's cultural landmarks",
    descriptionHi:
      "राजस्थान के सांस्कृतिक स्थलों के इंटरैक्टिव मानचित्र को खोजिए",
    category: "desert-life",
    difficulty: "easy",
    playTime: 6,
    icon: "🗺️",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#fff5e6",
    externalUrl: "https://digital-society-rajasthan.onrender.com/",
  },
  {
    id: "market-map",
    title: "Market Navigator",
    titleHi: "बाज़ार नेविगेटर",
    description: "Explore the vibrant bazaars and markets of Rajasthan",
    descriptionHi: "राजस्थान के रंगीन बाज़ारों और मंडियों को खोजिए",
    category: "desert-life",
    difficulty: "medium",
    playTime: 8,
    icon: "🏪",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728",
    externalUrl: "https://mellow-panda-05bdb9.netlify.app/",
  },
  {
    id: "desert-adventure",
    title: "Desert Adventure",
    titleHi: "रेगिस्तानी रोमांच",
    description: "Experience the magic of the Thar desert landscape",
    descriptionHi: "थार मरुस्थल के जादुई दृश्य का अनुभव कीजिए",
    category: "desert-life",
    difficulty: "hard",
    playTime: 12,
    icon: "🏜️",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6",
    externalUrl:
      "https://desert-4mpbjr7tk-anshuman-paridas-projects-4e6b1500.vercel.app/",
  },
  {
    id: "jhalara-digs",
    title: "Jhalara Artifact Digs",
    titleHi: "झालरा आर्टिफैक्ट डिग्स",
    description:
      "Discover hidden treasures in ancient Rajasthani stepwells",
    descriptionHi:
      "प्राचीन राजस्थानी बावड़ियों में छिपे खज़ानों को खोजिए",
    category: "desert-life",
    difficulty: "medium",
    playTime: 10,
    icon: "🏛️",
    gradient: "bg-gradient-to-br from-primary to-peacock/80",
    patternColor: "#d4a574",
    externalUrl: "https://ihagoyal21.github.io/jhalara-artifact-digs/",
  },
  {
    id: "kalbelia-dance",
    title: "Kalbeliya Dance",
    titleHi: "कालबेलिया नृत्य",
    description:
      "Master the mesmerizing snake-like movements of Kalbelia",
    descriptionHi: "कालबेलिया के मोहक सर्प-सदृश नृत्य भावों को सीखिए",
    category: "music-dance",
    difficulty: "medium",
    playTime: 8,
    icon: "🐍",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#f5c542",
    externalUrl: "https://dushyant-nikhil-assignment.vercel.app/explore",
  },
  {
    id: "folk-music",
    title: "Folk Music Journey",
    titleHi: "लोक संगीत यात्रा",
    description: "Experience the rich musical heritage of Rajasthan",
    descriptionHi: "राजस्थान की समृद्ध संगीत विरासत का अनुभव कीजिए",
    category: "music-dance",
    difficulty: "easy",
    playTime: 6,
    icon: "🎵",
    gradient: "bg-gradient-to-br from-secondary to-terracotta/80",
    patternColor: "#fff5e6",
    externalUrl: "https://digisoc.vercel.app/",
  },
  {
    id: "ravanhatta",
    title: "Ravanhatta Player",
    titleHi: "रावणहट्टा प्लेयर",
    description:
      "Learn about the ancient bowed string instrument of Rajasthan",
    descriptionHi:
      "राजस्थान के प्राचीन तंत्री वाद्य रावणहट्टा के बारे में जानिए",
    category: "music-dance",
    difficulty: "hard",
    playTime: 10,
    icon: "🎻",
    gradient: "bg-gradient-to-br from-primary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://raghavmaliwal.github.io/Ravanhatta/",
  },
  {
    id: "digital-culture",
    title: "Digital Culture Hub",
    titleHi: "डिजिटल कल्चर हब",
    description:
      "Explore Rajasthani culture through interactive digital experiences",
    descriptionHi:
      "इंटरैक्टिव डिजिटल अनुभवों के माध्यम से राजस्थानी संस्कृति को खोजिए",
    category: "music-dance",
    difficulty: "medium",
    playTime: 7,
    icon: "🎭",
    gradient: "bg-gradient-to-br from-terracotta via-secondary to-primary/60",
    patternColor: "#d4a574",
    externalUrl: "https://digital-society-sigma.vercel.app/",
  },
  {
    id: "flavors-jodhpur",
    title: "Flavors of Jodhpur",
    titleHi: "जोधपुर के स्वाद",
    description: "Discover the authentic tastes and recipes of Jodhpur cuisine",
    descriptionHi:
      "जोधपुर की पाक परंपरा के असली स्वाद और व्यंजनों को जानिए",
    category: "cuisine",
    difficulty: "medium",
    playTime: 12,
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728",
    externalUrl: "https://flavors-of-jodhpur.vercel.app/",
  },
  {
    id: "jodhpur-tour",
    title: "Jodhpur Food Tour",
    titleHi: "जोधपुर फ़ूड टूर",
    description:
      "Take a virtual food tour through the blue city's best eateries",
    descriptionHi:
      "नीले शहर के बेहतरीन खानपान स्थलों की वर्चुअल यात्रा कीजिए",
    category: "cuisine",
    difficulty: "easy",
    playTime: 5,
    icon: "🥘",
    gradient: "bg-gradient-to-br from-terracotta to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://jodhpur-tour-aec4c.web.app/",
  },
  {
    id: "sliding-puzzle",
    title: "Rajasthan Puzzle",
    titleHi: "राजस्थान पहेली",
    description:
      "Solve sliding puzzles featuring iconic Rajasthani locations",
    descriptionHi:
      "राजस्थान के प्रसिद्ध स्थलों पर आधारित स्लाइडिंग पहेलियां हल कीजिए",
    category: "festivals",
    difficulty: "medium",
    playTime: 8,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
    patternColor: "#fff5e6",
    externalUrl: "https://sliding-game.vercel.app/select",
  },
];

export const categories: Record<string, CategoryInfo> = {
  textiles: {
    id: "textiles",
    title: "Textiles & Prints",
    titleHi: "वस्त्र और छापकारी",
    description:
      "Discover the art of Bandhani tie-dye, Ajrakh block printing, and legendary Rajasthani fabrics",
    descriptionHi:
      "बंधनी, अज्रख ब्लॉक प्रिंटिंग और प्रसिद्ध राजस्थानी वस्त्रों की कला को जानिए",
    icon: "🧵",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
  },
  "folk-art": {
    id: "folk-art",
    title: "Folk Art & Handicrafts",
    titleHi: "लोक कला और हस्तशिल्प",
    description:
      "Explore Phad paintings, blue pottery, lac bangles, and traditional craftsmanship",
    descriptionHi:
      "फड़ चित्रकला, ब्लू पॉटरी, लाख की चूड़ियां और पारंपरिक शिल्प को खोजिए",
    icon: "🎨",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
  },
  "desert-life": {
    id: "desert-life",
    title: "Desert Life & Nature",
    titleHi: "मरुस्थलीय जीवन और प्रकृति",
    description:
      "Journey through the Thar desert, learn about camels, wildlife, and desert survival",
    descriptionHi:
      "थार मरुस्थल की यात्रा कीजिए और ऊंट, वन्यजीवन तथा रेगिस्तानी जीवन को जानिए",
    icon: "🐪",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
  },
  "music-dance": {
    id: "music-dance",
    title: "Music & Dance",
    titleHi: "संगीत और नृत्य",
    description:
      "Experience Ghoomar, Kalbelia, folk instruments, and the rhythm of Rajasthan",
    descriptionHi:
      "घूमर, कालबेलिया, लोक वाद्य और राजस्थान की लय का अनुभव कीजिए",
    icon: "💃",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
  },
  cuisine: {
    id: "cuisine",
    title: "Cuisine & Spices",
    titleHi: "पकवान और मसाले",
    description:
      "Master Dal Baati Churma, Ghewar, and the aromatic spices of royal kitchens",
    descriptionHi:
      "दाल बाटी चूरमा, घेवर और शाही रसोई के सुगंधित मसालों को जानिए",
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
  },
  festivals: {
    id: "festivals",
    title: "Festivals & Traditions",
    titleHi: "त्योहार और परंपराएं",
    description:
      "Celebrate Pushkar Mela, Teej, Gangaur, and vibrant Rajasthani celebrations",
    descriptionHi:
      "पुष्कर मेले, तीज, गणगौर और रंगीन राजस्थानी उत्सवों को जानिए",
    icon: "🎉",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
  },
};

export type CategoryId = keyof typeof categories;

export const getGamesByCategory = (categoryId: string): Game[] => {
  return games.filter((game) => game.category === categoryId);
};

export const getCategoryInfo = (categoryId: string) => {
  return categories[categoryId as CategoryId] || null;
};
