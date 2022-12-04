import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Jillian from './pages/Jillian';
import William from './pages/William';
import Gelila from './pages/Gelila';
import Hanock from './pages/Hanock';
  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Jillian' element={<Jillian/>} />
        <Route path='/William' element={<William/>} />
        <Route path='/Gelila' element={<Gelila/>} />
        <Route path='/Hanock' element={<Hanock/>} />
    </Routes>
    </Router>
);
}
  
export default App;