import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} transition-colors`}>
          <header className="flex justify-between items-center p-4 bg-white shadow-md mb-5">
            <h1 className="font-bold text-2xl">My React App</h1>
            <nav className="flex gap-4">
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/about" className="hover:text-blue-500">About</Link>
              <Link to="/product/1" className="hover:text-blue-500">Product</Link>
            </nav>
          </header>

          <main className="p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
