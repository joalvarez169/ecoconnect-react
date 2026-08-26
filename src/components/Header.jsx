const Header = () => {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">🌿 EcoConnect</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="hover:text-green-200 transition">Inicio</a></li>
            <li><a href="#registro" className="hover:text-green-200 transition">Únete</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;