import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrendResults from './pages/TrendResults';
import TrendMagazine from './pages/TrendMagazine';
import MagazineDetail from './pages/MagazineDetail';
import FaceAnalysisReport from './pages/FaceAnalysisReport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trend-results" element={<TrendResults />} />
        <Route path="/trend-magazine" element={<TrendMagazine />} />
        <Route path="/magazine/:id" element={<MagazineDetail />} />
        <Route path="/face-analysis" element={<FaceAnalysisReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
