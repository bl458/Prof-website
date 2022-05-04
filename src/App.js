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

        <main className="body">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <div className="footer">
          <div className="footer_text-wrap">
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

          <div className="footer_contact-wrap">
            <a href="mailto: bl458@cornell.edu" className="footer_contact-img">
              <img
                src="https://bclim1.s3.us-east-2.amazonaws.com/mail.png"
                alt=""
                width="100%"
                height="100%"
              />
            </a>
            <a href="https://github.com/bl458" className="footer_contact-img">
              <img
                src="https://bclim1.s3.us-east-2.amazonaws.com/github.png"
                alt=""
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
