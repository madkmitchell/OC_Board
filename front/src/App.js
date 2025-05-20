import './App.css';
import Nav from './component/nav/nav.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSite from './general/aboutSite/aboutSite.js';
import Home from './general/home/home.js';
import Guestbook from './general/guestbook/guestbook.js';
import AboutMav from './mav_pages/about/mavAbout.js';
import AboutGator from './gator_pages/about/about.js';
import Tom from './mav_pages/tom/tom.js';
import MavHome from './mav_pages/mavHome/mavHome.js';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutSite" element={<AboutSite />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/mavAbout" element={<AboutMav />} />
          <Route path="/gatorAbout" element={<AboutGator />} />
          <Route path="/tom" element={<Tom />} />
          <Route path="/mavHome" element={<MavHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
