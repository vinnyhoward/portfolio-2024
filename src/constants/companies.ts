import { ROUTES } from "./routes";

export interface Company {
  title: string;
  projectLogo: string;
  techStack?: string;
  route: string;
}

export const COMPANIES: Company[] = [
  {
    title: "Reko",
    projectLogo: "/images/reko_logo.png",
    route: "https://rekohub.com/",
  },
  {
    title: "Quarter Machine",
    projectLogo: "/images/qm_logo.png",
    route: "https://www.quartermachine.io/",
  },
  {
    title: "Evernym",
    projectLogo: "/images/evernym_logo.png",
    route: "https://www.evernym.com/blog/",
  },
  {
    title: "Medici Ventures",
    projectLogo: "/images/medici_logo.png",
    route: "https://www.mediciventures.net/",
  },
];
