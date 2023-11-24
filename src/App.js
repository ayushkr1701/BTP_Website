import React from 'react'
import HomePage from './components/HomePage'
import FileInfo from './pages/FileInfo';
import AtomicPosition from './pages/AtomicPosition';
import OptimumValues from './pages/OptimumValues';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage';
import VisvualizePlot from './pages/VisualizePlot';
import VisualizePlot from './pages/VisualizePlot';
const App = () => {

  return (
    <>
      <section className="parent_app">
        <BrowserRouter>
          <Routes>
            <Route path="/" forceRefresh={true} element={<MainPage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/fileinfo" element={<FileInfo />} />
            <Route path="/atomicPosition" element={<AtomicPosition />} />
            <Route path="/optimumvalues" element={<OptimumValues />} />
            <Route path="/VisualizePlot" element={<VisualizePlot />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App