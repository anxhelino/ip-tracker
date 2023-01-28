import Search from "./Search";

function Header() {
  return (
    <div className="h-1/3 bg-pattern bg-cover bg-shadow">
      <h1 className="text-center text-White font-bold text-3xl tracking-wide py-6">
        IP Address Tracker
      </h1>
      <Search />
    </div>
  );
}

export default Header;
