
export type navLinksNames = "home" | "section 2" | "section 3"

interface navLinksProps {
  name: navLinksNames
  href: string
  id: string
}

export const navLinks: navLinksProps[] = [
  {
    name: "home",
    href: "/",
    id: "/",
  },
  {
    name: "section 2",
    href: "#sec-2",
    id: "sec-2",
  },
  {
    name: "section 3",
    href: "#sec-3",
    id: "sec-3",
  },
];
