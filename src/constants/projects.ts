import { ROUTES } from "./routes";

export interface Project {
  title: string;
  techStack: string;
  projectLogo: string;
  route: string;
  links?: {
    title: string;
    url: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    title: "CloneX Subgraph",
    techStack: "Next.js, The Graph, Prisma",
    projectLogo: "/images/rtfkt_logo.png",
    route: ROUTES.CLONEX_SUBGRAPH,
  },
  {
    title: "Loot Chest",
    techStack: "Three.js, Sanity, Web Components",
    projectLogo: "/images/loot_chest_logo.png",
    route: ROUTES.LOOT_CHEST,
  },
  {
    title: "Reko",
    techStack: "React Native, Firebase, Expo",
    projectLogo: "/images/reko_logo.png",
    route: ROUTES.REKO,
  },
];
