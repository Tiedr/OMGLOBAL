import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Express from "./pages/Express";
import Stay from "./pages/Stay";
import Lifestyle from "./pages/Lifestyle";
import Country from "./pages/Country";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/express" element={<Express />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
