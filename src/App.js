import { Route, Routes, Link, useLocation } from 'react-router-dom';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import AboutMe from './AboutMe/AboutMe';
import './App.css';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      <div className='main'>
        {location.pathname === "/" && (
          <div className='left-side'>
            <div>
              <header>Emalee Poellot</header>
              <nav>
                <Link to="/myportfolio">
                  <button>My Portfolio</button>
                </Link>
                <Link to="/aboutme">
                  <button>About Me</button>
                </Link>
              </nav>
            </div>
                <img className="portrait" src="/selfportrait.jpg" alt="Self-Portrait" />
          </div>
        )}
      </div>
      <div>
        <Routes>
          <Route path="/myportfolio" element={<MyPortfolio />}>My Portfolio</Route>
          <Route path="/aboutme" element={<AboutMe />}>About Me</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
