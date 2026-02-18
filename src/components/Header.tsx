import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1] w-full bg-gray-950 px-[10px] py-4">
      <div className="max-w-3xl mx-auto">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
