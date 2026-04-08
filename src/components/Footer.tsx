import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-8">
      <div className="max-w-[770px] mx-auto px-8 py-6 flex items-center justify-between border-t border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500 text-xs">
        <span>© {year} kdnatividad.dev</span>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/kenneth-dave-natividad-81b525230/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/kdnatividad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:kdnatividad00@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
