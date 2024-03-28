interface Route {
  HOME: string;
  ABOUT: string;
  HIRE: string;
  PROJECTS: string;
  CONTACT: string;
  RESUME: string;
  CLONEX_SUBGRAPH: string;
  LOOT_CHEST: string;
  REKO: string;
}

export const ROUTES: Route = {
  HOME: "/",
  ABOUT: "/about",
  HIRE: "/hire",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  RESUME: "/resume",

  // project sub pages
  CLONEX_SUBGRAPH: "/projects/clonex-subgraph",
  LOOT_CHEST: "/projects/loot-chest",
  REKO: "/projects/reko",
};
