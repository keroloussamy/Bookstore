import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import { getBooksAsync } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAsync());
  }, []);

  return (
    <main className="bg-zinc-100 min-h-screen">
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
