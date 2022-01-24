import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import Page1In1 from './Page1In1';
import Page2In1 from './Page2In1';
import Page3In1 from './Page3In1';
import Page1In2 from './Page1In2';
import Page2In2 from './Page2In2';
import Page3In2 from './Page3In2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/contents/1-1' element={<Page1In1 />}/>
          <Route path='/contents/1-2' element={<Page2In1 />}/>
          <Route path='/contents/1-3' element={<Page3In1 />}/>
          <Route path='/contents/2-1' element={<Page1In2 />}/>
          <Route path='/contents/2-2' element={<Page2In2 />}/>
          <Route path='/contents/2-3' element={<Page3In2 />}/>
          <Route path='/contents/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
