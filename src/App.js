import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import BrownieCover from './components/BrownieCover/BrownieCover';
import Encomendas from './components/Encomendas/Encomendas';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import OsBrownies from './components/OsBrownies/OsBrownies';
import Sobre from './components/Sobre/Sobre';
import ScrollTop from './Hooks/ScrollTop';

function App() {
  return (
    <div className="App">
          <Header />
          {/* <Home /> */}
          <BrownieCover />
          <Sobre />
          <Menu />
          <Encomendas />
          <ScrollTop />
          {/* <OsBrownies /> */}
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
