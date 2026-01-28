export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  playTime: number; // in minutes
  icon: string;
  gradient: string;
  patternColor: string;
  externalUrl?: string;
}

export const games: Game[] = [
  // Textiles & Prints
  {
    id: "bandhani-matching",
    title: "Bandhej Designer",
    description: "Create beautiful Bandhani tie-dye patterns with traditional techniques",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "🎯",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
    patternColor: "#d4a574",
    externalUrl: "https://bandhejio.vercel.app/"
  },
  {
    id: "ajrakh-puzzle",
    title: "Block Print Story",
    description: "Discover the art of Rajasthani block printing and stamp patterns",
    category: "textiles",
    difficulty: "medium",
    playTime: 10,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-primary via-primary/90 to-secondary/60",
    patternColor: "#e8d5c4",
    externalUrl: "https://rajasthani-stamp-story.lovable.app/"
  },
  {
    id: "fabric-quiz",
    title: "Desert Diva",
    description: "Explore the vibrant world of Rajasthani desert fashion and textiles",
    category: "textiles",
    difficulty: "hard",
    playTime: 8,
    icon: "👗",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://desert-diva.vercel.app/"
  },
  {
    id: "hidden-prints",
    title: "Hidden Prints",
    description: "Uncover the secrets of traditional Rajasthani block print designs",
    category: "textiles",
    difficulty: "medium",
    playTime: 7,
    icon: "🔍",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#fff5e6",
    externalUrl: "https://hiddenprints.netlify.app/"
  },
  {
    id: "mandana-art",
    title: "Mandana Art",
    description: "Draw traditional Mandana floor paintings with geometric patterns",
    category: "textiles",
    difficulty: "easy",
    playTime: 5,
    icon: "✨",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#d4a574",
    externalUrl: "https://digital-society-uzmr.vercel.app/#draw"
  },

  // Folk Art & Handicrafts
  {
    id: "kathputli-master",
    title: "Kathputli Master",
    description: "Learn the art of traditional Rajasthani puppet making and storytelling",
    category: "folk-art",
    difficulty: "medium",
    playTime: 12,
    icon: "🎭",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://kathputlimaster-digitalsociety.vercel.app/"
  },
  {
    id: "kathputli-info",
    title: "Kathputli Chronicles",
    description: "Discover the rich history and cultural significance of Kathputli puppetry",
    category: "folk-art",
    difficulty: "easy",
    playTime: 8,
    icon: "📜",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6",
    externalUrl: "https://drive.google.com/file/d/1JJbvgElhSgIlOrjPhz1wKgrnvI22Pu_1/view"
  },
  {
    id: "pabuji-story",
    title: "Pabuji Ki Phad",
    description: "Experience the legendary tale of Pabuji through traditional scroll art",
    category: "folk-art",
    difficulty: "medium",
    playTime: 10,
    icon: "🏇",
    gradient: "bg-gradient-to-br from-terracotta to-mustard/80",
    patternColor: "#4a3728",
    externalUrl: "https://priyanshu8058.github.io/Humanity_Digital_Society/"
  },
  {
    id: "story-place",
    title: "Story Place",
    description: "Immerse yourself in the storytelling traditions of Rajasthan",
    category: "folk-art",
    difficulty: "hard",
    playTime: 15,
    icon: "📖",
    gradient: "bg-gradient-to-br from-secondary via-terracotta to-mustard/60",
    patternColor: "#d4a574",
    externalUrl: "https://b23cs1037-digital-society.vercel.app/"
  },

  // Desert Life & Nature
  {
    id: "interactive-map",
    title: "Rajasthan Explorer",
    description: "Navigate an interactive map of Rajasthan's cultural landmarks",
    category: "desert-life",
    difficulty: "easy",
    playTime: 6,
    icon: "🗺️",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
    patternColor: "#fff5e6",
    externalUrl: "https://digital-society-rajasthan.onrender.com/"
  },
  {
    id: "market-map",
    title: "Market Navigator",
    description: "Explore the vibrant bazaars and markets of Rajasthan",
    category: "desert-life",
    difficulty: "medium",
    playTime: 8,
    icon: "🏪",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728",
    externalUrl: "https://mellow-panda-05bdb9.netlify.app/"
  },
  {
    id: "desert-adventure",
    title: "Desert Adventure",
    description: "Experience the magic of the Thar desert landscape",
    category: "desert-life",
    difficulty: "hard",
    playTime: 12,
    icon: "🏜️",
    gradient: "bg-gradient-to-br from-peacock to-primary/80",
    patternColor: "#fff5e6",
    externalUrl: "https://desert-4mpbjr7tk-anshuman-paridas-projects-4e6b1500.vercel.app/"
  },
  {
    id: "jhalara-digs",
    title: "Jhalara Artifact Digs",
    description: "Discover hidden treasures in ancient Rajasthani stepwells",
    category: "desert-life",
    difficulty: "medium",
    playTime: 10,
    icon: "🏛️",
    gradient: "bg-gradient-to-br from-primary to-peacock/80",
    patternColor: "#d4a574",
    externalUrl: "https://ihagoyal21.github.io/jhalara-artifact-digs/"
  },

  // Music & Dance
  {
    id: "kalbelia-dance",
    title: "Kalbeliya Dance",
    description: "Master the mesmerizing snake-like movements of Kalbelia",
    category: "music-dance",
    difficulty: "medium",
    playTime: 8,
    icon: "🐍",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
    patternColor: "#f5c542",
    externalUrl: "https://dushyant-nikhil-assignment.vercel.app/explore"
  },
  {
    id: "folk-music",
    title: "Folk Music Journey",
    description: "Experience the rich musical heritage of Rajasthan",
    category: "music-dance",
    difficulty: "easy",
    playTime: 6,
    icon: "🎵",
    gradient: "bg-gradient-to-br from-secondary to-terracotta/80",
    patternColor: "#fff5e6",
    externalUrl: "https://digisoc.vercel.app/"
  },
  {
    id: "ravanhatta",
    title: "Ravanhatta Player",
    description: "Learn about the ancient bowed string instrument of Rajasthan",
    category: "music-dance",
    difficulty: "hard",
    playTime: 10,
    icon: "🎻",
    gradient: "bg-gradient-to-br from-primary to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://raghavmaliwal.github.io/Ravanhatta/"
  },
  {
    id: "digital-culture",
    title: "Digital Culture Hub",
    description: "Explore Rajasthani culture through interactive digital experiences",
    category: "music-dance",
    difficulty: "medium",
    playTime: 7,
    icon: "🎭",
    gradient: "bg-gradient-to-br from-terracotta via-secondary to-primary/60",
    patternColor: "#d4a574",
    externalUrl: "https://digital-society-sigma.vercel.app/"
  },

  // Cuisine & Spices
  {
    id: "flavors-jodhpur",
    title: "Flavors of Jodhpur",
    description: "Discover the authentic tastes and recipes of Jodhpur cuisine",
    category: "cuisine",
    difficulty: "medium",
    playTime: 12,
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
    patternColor: "#4a3728",
    externalUrl: "https://flavors-of-jodhpur.vercel.app/"
  },
  {
    id: "jodhpur-tour",
    title: "Jodhpur Food Tour",
    description: "Take a virtual food tour through the blue city's best eateries",
    category: "cuisine",
    difficulty: "easy",
    playTime: 5,
    icon: "🥘",
    gradient: "bg-gradient-to-br from-terracotta to-secondary/80",
    patternColor: "#f5c542",
    externalUrl: "https://jodhpur-tour-aec4c.web.app/"
  },

  // Festivals & Traditions (Puzzles & Games)
  {
    id: "sliding-puzzle",
    title: "Rajasthan Puzzle",
    description: "Solve sliding puzzles featuring iconic Rajasthani locations",
    category: "festivals",
    difficulty: "medium",
    playTime: 8,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
    patternColor: "#fff5e6",
    externalUrl: "https://sliding-game.vercel.app/select"
  },
];

export const categories = {
  textiles: {
    id: "textiles",
    title: "Textiles & Prints",
    description: "Discover the art of Bandhani tie-dye, Ajrakh block printing, and legendary Rajasthani fabrics",
    icon: "🧵",
    gradient: "bg-gradient-to-br from-primary to-primary/80",
  },
  "folk-art": {
    id: "folk-art",
    title: "Folk Art & Handicrafts",
    description: "Explore Phad paintings, blue pottery, lac bangles, and traditional craftsmanship",
    icon: "🎨",
    gradient: "bg-gradient-to-br from-secondary to-secondary/80",
  },
  "desert-life": {
    id: "desert-life",
    title: "Desert Life & Nature",
    description: "Journey through the Thar desert, learn about camels, wildlife, and desert survival",
    icon: "🐪",
    gradient: "bg-gradient-to-br from-terracotta to-terracotta/80",
  },
  "music-dance": {
    id: "music-dance",
    title: "Music & Dance",
    description: "Experience Ghoomar, Kalbelia, folk instruments, and the rhythm of Rajasthan",
    icon: "💃",
    gradient: "bg-gradient-to-br from-peacock to-peacock/80",
  },
  cuisine: {
    id: "cuisine",
    title: "Cuisine & Spices",
    description: "Master Dal Baati Churma, Ghewar, and the aromatic spices of royal kitchens",
    icon: "🍛",
    gradient: "bg-gradient-to-br from-mustard/90 to-terracotta/80",
  },
  festivals: {
    id: "festivals",
    title: "Festivals & Traditions",
    description: "Celebrate Pushkar Mela, Teej, Gangaur, and vibrant Rajasthani celebrations",
    icon: "🎉",
    gradient: "bg-gradient-to-br from-secondary to-peacock/80",
  },
};

export type CategoryId = keyof typeof categories;

export const getGamesByCategory = (categoryId: string): Game[] => {
  return games.filter(game => game.category === categoryId);
};

export const getCategoryInfo = (categoryId: string) => {
  return categories[categoryId as CategoryId] || null;
};
