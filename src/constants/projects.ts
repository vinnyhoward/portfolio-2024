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
    title: "BMO Wallet",
    techStack: "React Native, Expo, Ethers, Solana/Web3",
    projectLogo: "/images/bmo_logo.png",
    route: ROUTES.BMO_WALLET,
  },
  {
    title: "Loot Chest",
    techStack: "Three.js, Web Components, Sanity",
    projectLogo: "/images/loot_chest_logo.png",
    route: ROUTES.LOOT_CHEST,
  },
  {
    title: "CloneX Subgraph",
    techStack: "Next.js, The Graph, Prisma",
    projectLogo: "/images/rtfkt_logo.png",
    route: ROUTES.CLONEX_SUBGRAPH,
  },
  {
    title: "Reko",
    techStack: "React Native, Firebase, Expo",
    projectLogo: "/images/reko_logo.png",
    route: ROUTES.REKO,
  },
];
