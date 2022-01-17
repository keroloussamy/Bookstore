import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
