import { Routes, Route, Link, useLocation } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";

import "./App.css";

// TODO writing
export default function App() {
  const location = useLocation();

  const getHeaderLinkColor = (linkName) => {
    if (location["pathname"] === linkName) {
      return "#f76540";
    }

    return "#141414";
  };

  return (
    <div className="app">
      <div className="app_inner">
        <div className="header">
          <Link to="/" className="header_title">
            michaellim
          </Link>
          <div className="header_tabs">
            <Link
              to="/"
              className="header_link"
              style={{
                "--header_link-color": getHeaderLinkColor("/"),
                "--header_link_hover-color": "#f76540",
              }}
            >
              About
            </Link>
            <Link
              to="projects"
              className="header_link"
              style={{
                "--header_link-color": getHeaderLinkColor("/projects"),
                "--header_link_hover-color": "#f76540",
              }}
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="body">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <div className="footer">
          <p className="footer_name">© 2020 Michael Lim</p>
          <p>
            <a
              href="https://github.com/bl458/Prof-website"
              className="footer_source"
            >
              Source
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
