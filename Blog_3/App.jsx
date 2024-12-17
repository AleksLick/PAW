import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CategoriesPage from './pages/CategoriesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
