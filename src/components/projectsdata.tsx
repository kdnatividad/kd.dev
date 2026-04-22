export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  company: string;
  links: {
    label: string;
    url: string;
    icon: "globe" | "github";
  }[];
};

export const projectsData: Project[] = [
  {
    title: "LA Scraper",
    description:
      "AI-powered scraper that extracts sports org website content — staff, programs, athletes, and more — structured and ready for LeagueApps.",
    image: "/projects/la-scraper/la-scraper-ft.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    company: "LeagueApps",
    links: [
      {
        label: "Website",
        url: "https://la-scraper-theta.vercel.app/",
        icon: "globe",
      },
      {
        label: "Source",
        url: "https://github.com/kdnatividad/la-scraper",
        icon: "github",
      },
    ],
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and the problem it solves.",
    image: "",
    tags: ["FastAPI", "Python", "Docker", "PostgreSQL"],
    company: "JNC Sports PH",
    links: [{ label: "Source", url: "#", icon: "github" }],
  },
];
