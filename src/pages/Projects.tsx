import { Globe, GitBranch, Briefcase } from "lucide-react";
import { projectsData } from "../components/projectsdata";

const iconMap = {
  globe: Globe,
  github: GitBranch,
};

const Projects = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">my projects.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white/60 dark:bg-gray-900/40"
          >
            <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
                  preview
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.links.map((link, k) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={k}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                    >
                      <Icon size={13} />
                      {link.label}
                    </a>
                  );
                })}
                <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                  <Briefcase size={13} />
                  {project.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
