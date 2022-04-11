import {
  BrowserRouter, 
  Routes, 
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import QualityOfLife from './QualityOfLife/Index';
import InfectiousDisease from './InfectiousDisease/Index';
import CaliforniaMerged from './CaliforniaMerged/Index'
import "./Navbar.css";

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <nav id="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/health-viz">Health Related Quality of Life</Link>
            </li>
            <li>
              <a href="/usa.html">USA Cloropleth</a>
            </li>
            <li>
              <Link to="/disease-viz">Rate of Infectious Disease</Link>
            </li>
            <li>
              <a href="/california.html">California Cloropleth</a>
            </li>
            <li>
              <Link to="/california-viz">Rate of Infectious Disease vs Quality of Life</Link>
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/health-viz" element={ <QualityOfLife /> }/>
          <Route path="/disease-viz" element={ <InfectiousDisease /> }/>
          <Route path="/california-viz" element={ <CaliforniaMerged /> }/>
          <Route path="/usa.html"/>
          <Route path="/california.html"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
