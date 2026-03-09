import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;