import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/contents/1-1' component={Page1In1}/>
          <Route path='/contents/1-2' component={Page2In1}/>
          <Route path='/contents/1-3' component={Page3In1}/>
          <Route path='/contents/2-1' component={Page1In2}/>
          <Route path='/contents/2-2' component={Page2In2}/>
          <Route path='/contents/2-3' component={Page3In2}/>
          <Route path='/contents/about' component={About}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
