// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import EmergencyPlan from './pages/EmergencyPlan';
import PlanDetail from './pages/EmergencyPlanDetail';
import ExerciseDetail from './pages/EmergencyExercise';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />
        {/* 其他页面路由 */}
        <Route path="/emergency-plan" element={<EmergencyPlan />} />
        <Route path="/emergency-plan/detail" element={<PlanDetail />} />
        <Route path="/emergency-exercise/detail" element={<ExerciseDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
