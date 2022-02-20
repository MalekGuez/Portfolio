import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FourOhFour from './pages/FourOhFour';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;