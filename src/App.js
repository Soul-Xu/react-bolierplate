// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />
        {/* 其他页面路由 */}
        {/* <Route path="/other" element={<OtherComponent />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
