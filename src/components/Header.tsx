import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#020611]/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-8 py-6 h-[84px] flex items-center">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
