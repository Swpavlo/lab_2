function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-8 rounded-2xl shadow-xl text-center border border-blue-500">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-3">
        Гада Павло Михайлович
      </h1>
      <p className="text-lg md:text-xl text-blue-100">
        Студент спеціальності "Кібербезпека"
      </p>
      <p className="mt-3 text-sm text-blue-200">Варіант: 3</p>
    </header>
  );
}

export default Header;