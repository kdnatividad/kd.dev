import Stack from "./photostack/Stack.tsx";
import coffee from "./photostack/coffee.jpg";

import mountain from "./photostack/mountain.jpg";
import airsoft from "./photostack/airsoft.jpg";
import grad from "./photostack/grad.jpg";
import { FileText, Github, Mail, Linkedin } from "lucide-react";
const images = [coffee, airsoft, grad, mountain];

const Hero = () => {
  return (
    <section className="flex flex-col items-start gap-10 py-7 px-5 md:flex-row md:items-start md:justify-between md:px-0">
      <div className="relative grid h-[233px] w-[175px] place-items-center md:mr-8 md:order-last">
        <Stack
          randomRotation
          sensitivity={230}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ))}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-calistoga text-4xl sm:text-5xl ">
          hi ken here. 👋
        </h1>
        <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base ">
          WordPress Developer from the Philippines
        </p>
        <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
          Elementor Pro. Beaver Builder Pro. Performance-first builds. I design,
          develop, optimize — and scale websites that convert.
        </p>
        <div className="mt-4 flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-400 hover:border-white hover:text-white transition-colors">
              Resume
              <FileText size={18} />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kenneth-dave-natividad-81b525230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="items-center gap-2 px-4 py-2">
              <Linkedin
                size={20}
                className="text-gray-400 hover:text-white transition-colors"
              />
            </button>
          </a>
          <a
            href="https://github.com/kdnatividad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="items-center gap-2 px-4 py-2">
              <Github
                size={20}
                className="text-gray-400 hover:text-white transition-colors"
              />
            </button>
          </a>
          <a
            href="mailto:kdnatividad00@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-4 py-2">
              <Mail
                size={20}
                className="text-gray-400 hover:text-white transition-colors"
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
