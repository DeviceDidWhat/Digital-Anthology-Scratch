export interface ScratchGame {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  playTime: number;
  icon: string;
  gradient: string;
  patternColor: string;
  externalUrl: string;
  badgeLabel?: string;
}

export const scratchGames: ScratchGame[] = [
  {
    id: "divinecraft-2",
    title: "BlockCraft Adventure",
    description:
      "A Scratch sandbox adventure inspired by Minecraft with mining, crafting, inventory, and survival-style exploration.",
    difficulty: "hard",
    playTime: 15,
    icon: "⛏️",
    gradient: "bg-gradient-to-br from-[#2F6B3A] via-[#5D9C4F] to-[#9B7446]",
    patternColor: "#F0DFC2",
    externalUrl: "https://scratch.mit.edu/projects/1228633320/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "mission-space-learn-explore",
    title: "Space Quest Explorer",
    description:
      "A Scratch space adventure built around exploration and learning through an interactive mission-style experience.",
    difficulty: "easy",
    playTime: 8,
    icon: "🚀",
    gradient: "bg-gradient-to-br from-[#163B65] via-[#235C9F] to-[#6BB8E8]",
    patternColor: "#DDEEFF",
    externalUrl: "https://scratch.mit.edu/projects/1221403174/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "group2-final-project",
    title: "Shark Escape Challenge",
    description:
      "Guide a shark through an underwater challenge using the arrow keys and quick movement control.",
    difficulty: "medium",
    playTime: 10,
    icon: "🦈",
    gradient: "bg-gradient-to-br from-[#0C4A6E] via-[#0891B2] to-[#67E8F9]",
    patternColor: "#E0FBFF",
    externalUrl: "https://scratch.mit.edu/projects/1228772098/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "ct-project",
    title: "Brain Puzzle Lab",
    description:
      "A Scratch computational thinking project presented as a short interactive digital activity.",
    difficulty: "medium",
    playTime: 7,
    icon: "🧩",
    gradient: "bg-gradient-to-br from-[#6B2D5C] via-[#A03D7C] to-[#E9A6C8]",
    patternColor: "#F8DDEA",
    externalUrl: "https://scratch.mit.edu/projects/1239018488/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "calculator",
    title: "QuickCalc",
    description:
      "A simple Scratch calculator that turns basic arithmetic into an interactive mini-tool.",
    difficulty: "easy",
    playTime: 5,
    icon: "🧮",
    gradient: "bg-gradient-to-br from-[#2E3A59] via-[#4A5D8A] to-[#97A8D8]",
    patternColor: "#E3E8FA",
    externalUrl: "https://scratch.mit.edu/projects/1221205138/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "final-project-copy",
    title: "Arcade Adventure",
    description:
      "A Scratch final project experience packaged as a short interactive game to explore from the homepage.",
    difficulty: "medium",
    playTime: 8,
    icon: "🎮",
    gradient: "bg-gradient-to-br from-[#5A2E0C] via-[#A65A1F] to-[#F2B35D]",
    patternColor: "#FBE6C7",
    externalUrl: "https://scratch.mit.edu/projects/1241113290/fullscreen/",
    badgeLabel: "Scratch",
  },
  {
    id: "quiz",
    title: "Quiz Blitz",
    description:
      "A fast Scratch quiz game designed for quick answers and lightweight challenge-based play.",
    difficulty: "easy",
    playTime: 4,
    icon: "❓",
    gradient: "bg-gradient-to-br from-[#5B3A1E] via-[#A66A2B] to-[#F2C14E]",
    patternColor: "#FFF1C7",
    externalUrl: "https://scratch.mit.edu/projects/1220491143/fullscreen/",
    badgeLabel: "Scratch",
  },
];
