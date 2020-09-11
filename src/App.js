import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound';
import OsBrownies from './components/OsBrownies/OsBrownies';

function App() {
  return (
    <div className="App">
          <Header />
          <Home />
          <OsBrownies />
          {/* <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main> */}
    </div>
  );
}

export default App;
