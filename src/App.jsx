import { useState } from 'react'
import react from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Find from './components/Recipe/Find'
import About from './components/About/About'
import Usage from './components/Usage/Usage';
import Github from './components/Github/Github';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/about" element={<About />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </Router>
  );
}

export default App
