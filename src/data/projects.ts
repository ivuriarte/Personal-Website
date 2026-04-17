export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate: boolean;
  badge?: string;
  gradient: string;
  accentColor: string;
  features: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 4,
    title: "MarCoach",
    description:
      "An AI-powered OSCE coach that lets medical students practise clinical stations with simulated patients. Features real-time chat-based consultations, structured rubric evaluation, and detailed performance analytics across specialties.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Claude AI", "Zustand", "React Query"],
    githubUrl: "https://github.com/ivuriarte/MarCoach",
    isPrivate: false,
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    accentColor: "#0ea5e9",
    features: [
      "AI-powered patient simulation",
      "Rubric-based structured feedback",
      "Progress tracking & analytics",
      "Multi-specialty OSCE stations",
    ],
  },
  {
    id: 1,
    title: "Tic-Tac-Toe 3D",
    description:
      "A modern reimagination of the classic Tic-Tac-Toe game built in a fully interactive 3D environment. Features drag-to-rotate viewport, real-time score tracking, and GSAP-powered animations for a smooth, immersive player experience.",
    tech: ["Three.js", "GSAP", "Vite", "JavaScript", "CSS3"],
    liveUrl: "https://tic-tac-toe-3d-vert.vercel.app",
    githubUrl: "https://github.com/ivuriarte/tic-tac-toe-3d",
    isPrivate: false,
    image: "/screenshots/tic-tac-toe.png",
    gradient: "from-indigo-500 via-purple-500 to-violet-600",
    accentColor: "#6366f1",
    features: [
      "Fully interactive 3D game board",
      "Drag to rotate, scroll to zoom",
      "GSAP-powered smooth animations",
      "Real-time scoreboard",
    ],
  },
  {
    id: 2,
    title: "Snakes & Ladders 3D",
    description:
      "A digital adaptation of the beloved board game featuring an immersive rainforest theme, procedural audio generation, animated piece movement, and dynamic visual feedback — all rendered in a rich 3D interface.",
    tech: ["Three.js", "Vite", "JavaScript", "Web Audio API", "CSS3"],
    liveUrl: "https://snakes-and-ladders-3d.vercel.app",
    githubUrl: "https://github.com/ivuriarte/snakes-and-ladders-3d",
    isPrivate: false,
    image: "/screenshots/snakes-and-ladders.png",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "#10b981",
    features: [
      "Immersive rainforest 3D theme",
      "Procedural audio generation",
      "Animated piece movement",
      "Dynamic game-state feedback",
    ],
  },
  {
    id: 3,
    title: "Park-Your",
    description:
      "A smart parking reservation platform designed for busy urban environments. Users can discover, reserve, and manage parking spaces in real time — improving convenience for drivers and maximizing utilization for space owners.",
    tech: ["Mobile App", "Web App", "Location Services", "Real-Time Data"],
    isPrivate: true,
    image: "/screenshots/park-your.png",
    badge: "Private",
    gradient: "from-rose-600 via-pink-600 to-fuchsia-600",
    accentColor: "#e11d48",
    features: [
      "Real-time parking space availability",
      "Location-based discovery",
      "Reservation & management system",
      "Dual interface: drivers & owners",
    ],
  },
];
