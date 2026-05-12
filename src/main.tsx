import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Accueil from "./pages/acceuil.tsx";
import About from "./pages/about.tsx";
import MesProjets from "./pages/mes-projets.tsx";
import Contact from "./pages/contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Accueil />} />
          <Route path="about" element={<About />} />
          <Route path="mes-projets" element={<MesProjets />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
