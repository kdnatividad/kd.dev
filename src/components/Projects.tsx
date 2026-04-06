import { Globe, GitBranch } from "lucide-react";
import { projectsData } from "./projectsdata";

const iconMap = {
  globe: Globe,
  github: GitBranch,
};

const Projects = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">featured projects</h2>
        <a
          href="/projects"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          view more →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl border border-gray-800 overflow-hidden bg-gray-900/40"
          >
            {/* Preview image */}
            <div className="w-full aspect-video bg-gray-800 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
                  preview
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.links.map((link, k) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={k}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                    >
                      <Icon size={13} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
