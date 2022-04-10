import {
  BrowserRouter, 
  Routes, 
  Route,
  Link
} from "react-router-dom";

import QualityOfLife from './QualityOfLife/Index';
import InfectiousDisease from './InfectiousDisease/Index';
import Home from './Home';

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/health-viz">Health Related Quality Of Life</Link>
            </li>
            <li>
              <Link to="/disease-viz">Infectious Disease</Link>
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/health-viz" element={ <QualityOfLife /> }/>
          <Route path="/disease-viz" element={ <InfectiousDisease /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
