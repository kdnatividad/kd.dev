import Stack from "./photostack/Stack.tsx";
import coffee from "./photostack/coffee.jpg";
import airsoft from "./photostack/airsoft.jpg";
import mountain from "./photostack/mountain.jpg";
import grad from "./photostack/grad.jpg";
import { FileText } from "lucide-react";
const images = [coffee, mountain, grad, airsoft];

const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-10 py-7 md:flex-row md:justify-between">
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
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-400 hover:border-white hover:text-white transition-colors">
            Resume
            <FileText size={16} />
          </button>
        </div>
      </div>
      <div className="relative grid h-[233px] w-[175px] place-items-center md:mr-8">
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
    </section>
  );
};

export default Hero;
