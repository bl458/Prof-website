import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <p className="header_title">michaellim</p>
        <div className="header_tabs">
          <p className="header_tabs-text">About</p>
          <p className="header_tabs-text">Projects</p>
          <p className="header_tabs-text">Writing</p>
        </div>
      </div>

      <div className="body"></div>

      <div className="footer">
        <p className="footer_name">© 2020 Michael Lim</p>
        <a
          className="footer_source"
          href="https://github.com/bl458/Prof-website"
        >
          Source
        </a>
      </div>
    </div>
  );
}

export default App;
