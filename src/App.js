import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Work from './pages/Work';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [themes, setThemes] = useState(true) 
  const contentBodyRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setThemes(true);
  }, []);

  useEffect(() => {
    if (!themes) {
      localStorage.setItem("theme", "light");
      contentBodyRef.current.classList.add("light-mode");
      document.querySelector("body").classList.add("light-mode");
    } else {
      localStorage.setItem("theme", "dark");
      contentBodyRef.current.classList.remove("light-mode");
      document.querySelector("body").classList.remove("light-mode");
    }
  }, [themes]);

  return (
    <div className={`content-wrapper`} ref={contentBodyRef} >
      <div className="App">
        <Header setThemes={setThemes} themes={themes} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
