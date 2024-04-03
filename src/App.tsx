import { NavLink, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./Home";
import { About } from "./About";
import { Cats } from "./Cats";

function App() {
  return (
    <>
      <h1>Min sida med routes</h1>
      <h2>Länkmeny</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            Om oss
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cat/Bosse"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            Katten Bosse
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:secretParameter?" element={<About />} />
        <Route path="/cat/:catName?" element={<Cats />} />
      </Routes>
    </>
  );
}

export default App;
