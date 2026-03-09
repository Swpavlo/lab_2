function Footer() {
  return (
    <footer className="bg-gray-200 p-6 rounded-xl text-center shadow-md">
      <h2 className="text-xl font-bold mb-2">Контакти</h2>
      <p>Email: pavlo@gmail.com</p>
      <p>Телефон: +380632532487</p>

      <a
        href="https://github.com/Swpavlo/lab_2"
        className="text-blue-600 hover:underline"
      >
        GitHub репозиторій
      </a>
    </footer>
  );
}

export default Footer;