export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    label: string;
    url: string;
    icon: "globe" | "github";
  }[];
};

export const projectsData: Project[] = [
  {
    title: "Project One",
    description:
      "Short description of what this project does and the problem it solves.",
    image: "",
    tags: ["React", "TypeScript", "TailwindCSS"],
    links: [
      { label: "Website", url: "#", icon: "globe" },
      { label: "Source", url: "#", icon: "github" },
    ],
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and the problem it solves.",
    image: "",
    tags: ["FastAPI", "Python", "Docker", "PostgreSQL"],
    links: [{ label: "Source", url: "#", icon: "github" }],
  },
];
