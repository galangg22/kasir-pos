import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from './components';
import Home from './pages/Home';
import Sukses from './pages/Sukses';

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sukses" element={<Sukses />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}