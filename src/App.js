import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FourOhFour from './pages/FourOhFour';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;