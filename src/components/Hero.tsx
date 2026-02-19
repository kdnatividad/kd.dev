const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-10 py-7 md:flex-row md:justify-between">
      <div className="flex flex-col">
        <h1 className="title text-balance text-4xl sm:text-5xl ">
          hi ken here. 👋
        </h1>
        <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base ">
          WordPress Developer from the Philippines
        </p>
        <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
          Elementor Pro. Beaver Builder Pro. Performance-first builds. I design,
          develop, optimize — and scale websites that convert.
        </p>
        <div className="flex gap-3">{/* icon buttons */}</div>
      </div>
      <div>
        <img
          src="/your-photo.jpg"
          className="rounded-2xl rotate-3 w-64 h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
