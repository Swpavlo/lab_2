function Footer() {
  return (
    <footer className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4">Контакти</h2>

      <div className="space-y-2 text-slate-200">
        <p>Email: pavlo@gmail.com</p>
        <p>Телефон: +380632532487</p>
      </div>

      <a
        href="https://github.com/Swpavlo/lab_2"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300"
      >
        GitHub репозиторій
      </a>
    </footer>
  );
}

export default Footer;