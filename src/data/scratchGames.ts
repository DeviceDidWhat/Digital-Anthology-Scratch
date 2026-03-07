export interface ScratchGame {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  difficulty: "easy" | "medium" | "hard";
  playTime: number;
  icon: string;
  gradient: string;
  patternColor: string;
  externalUrl: string;
}

export const scratchGames: ScratchGame[] = [
  {
    id: "divinecraft-2",
    title: "BlockCraft Adventure",
    titleHi: "ब्लॉकक्राफ्ट एडवेंचर",
    description:
      "A Scratch sandbox adventure inspired by Minecraft with mining, crafting, inventory, and survival-style exploration.",
    descriptionHi:
      "माइनिंग, क्राफ्टिंग, इन्वेंटरी और सर्वाइवल शैली की खोज के साथ माइनक्राफ्ट से प्रेरित एक स्क्रैच सैंडबॉक्स रोमांच।",
    difficulty: "hard",
    playTime: 15,
    icon: "⛏️",
    gradient: "bg-gradient-to-br from-[#2F6B3A] via-[#5D9C4F] to-[#9B7446]",
    patternColor: "#F0DFC2",
    externalUrl: "https://scratch.mit.edu/projects/1228633320/fullscreen/",
  },
  {
    id: "mission-space-learn-explore",
    title: "Space Quest Explorer",
    titleHi: "स्पेस क्वेस्ट एक्सप्लोरर",
    description:
      "A Scratch space adventure built around exploration and learning through an interactive mission-style experience.",
    descriptionHi:
      "खोज और सीख पर आधारित एक इंटरैक्टिव मिशन शैली का स्क्रैच अंतरिक्ष रोमांच।",
    difficulty: "easy",
    playTime: 8,
    icon: "🚀",
    gradient: "bg-gradient-to-br from-[#163B65] via-[#235C9F] to-[#6BB8E8]",
    patternColor: "#DDEEFF",
    externalUrl: "https://scratch.mit.edu/projects/1221403174/fullscreen/",
  },
  {
    id: "group2-final-project",
    title: "Shark Escape Challenge",
    titleHi: "शार्क एस्केप चैलेंज",
    description:
      "Guide a shark through an underwater challenge using the arrow keys and quick movement control.",
    descriptionHi:
      "एरो कीज़ और तेज़ नियंत्रण का उपयोग करके शार्क को पानी के भीतर की चुनौती से बाहर निकालिए।",
    difficulty: "medium",
    playTime: 10,
    icon: "🦈",
    gradient: "bg-gradient-to-br from-[#0C4A6E] via-[#0891B2] to-[#67E8F9]",
    patternColor: "#E0FBFF",
    externalUrl: "https://scratch.mit.edu/projects/1228772098/fullscreen/",
  },
  {
    id: "ct-project",
    title: "Brain Puzzle Lab",
    titleHi: "ब्रेन पज़ल लैब",
    description:
      "A Scratch computational thinking project presented as a short interactive digital activity.",
    descriptionHi:
      "एक छोटा इंटरैक्टिव डिजिटल अनुभव के रूप में प्रस्तुत कंप्यूटेशनल थिंकिंग पर आधारित स्क्रैच प्रोजेक्ट।",
    difficulty: "medium",
    playTime: 7,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-[#6B2D5C] via-[#A03D7C] to-[#E9A6C8]",
    patternColor: "#F8DDEA",
    externalUrl: "https://scratch.mit.edu/projects/1239018488/fullscreen/",
  },
  {
    id: "calculator",
    title: "QuickCalc",
    titleHi: "क्विककैल्क",
    description:
      "A simple Scratch calculator that turns basic arithmetic into an interactive mini-tool.",
    descriptionHi:
      "एक सरल स्क्रैच कैलकुलेटर जो बुनियादी गणना को इंटरैक्टिव मिनी-टूल में बदल देता है।",
    difficulty: "easy",
    playTime: 5,
    icon: "🧮",
    gradient: "bg-gradient-to-br from-[#2E3A59] via-[#4A5D8A] to-[#97A8D8]",
    patternColor: "#E3E8FA",
    externalUrl: "https://scratch.mit.edu/projects/1221205138/fullscreen/",
  },
  {
    id: "final-project-copy",
    title: "Arcade Adventure",
    titleHi: "आर्केड एडवेंचर",
    description:
      "A Scratch final project experience packaged as a short interactive game to explore from the homepage.",
    descriptionHi:
      "होमपेज से सीधे खेलने के लिए तैयार एक छोटा और रोचक स्क्रैच फाइनल प्रोजेक्ट अनुभव।",
    difficulty: "medium",
    playTime: 8,
    icon: "🎮",
    gradient: "bg-gradient-to-br from-[#5A2E0C] via-[#A65A1F] to-[#F2B35D]",
    patternColor: "#FBE6C7",
    externalUrl: "https://scratch.mit.edu/projects/1241113290/fullscreen/",
  },
  {
    id: "quiz",
    title: "Quiz Blitz",
    titleHi: "क्विज़ ब्लिट्ज़",
    description:
      "A fast Scratch quiz game designed for quick answers and lightweight challenge-based play.",
    descriptionHi:
      "तेज़ जवाबों और हल्की चुनौती वाले खेल के लिए बनाया गया एक फुर्तीला स्क्रैच क्विज़ गेम।",
    difficulty: "easy",
    playTime: 4,
    icon: "❓",
    gradient: "bg-gradient-to-br from-[#5B3A1E] via-[#A66A2B] to-[#F2C14E]",
    patternColor: "#FFF1C7",
    externalUrl: "https://scratch.mit.edu/projects/1220491143/fullscreen/",
  },
];
