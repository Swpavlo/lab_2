function Skills() {
  return (
    <section className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">
        Навички
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
        <li className="bg-slate-100 rounded-xl px-4 py-3 shadow-sm">
          Основи мережевої безпеки
        </li>
        <li className="bg-slate-100 rounded-xl px-4 py-3 shadow-sm">
          Робота з Git
        </li>
        <li className="bg-slate-100 rounded-xl px-4 py-3 shadow-sm">
          HTML (базовий рівень)
        </li>
        <li className="bg-slate-100 rounded-xl px-4 py-3 shadow-sm">
          PHP та робота з базами даних
        </li>
      </ul>
    </section>
  );
}

export default Skills;