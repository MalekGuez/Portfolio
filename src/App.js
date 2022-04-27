import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Portfolio from './pages/Portfolio';
import FourOhFour from './pages/FourOhFour';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;