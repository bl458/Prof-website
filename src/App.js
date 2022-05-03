function App() {
  return (
    <div className="app">
      <div className="header">
        <p className="title">michaellim</p>
        <div className="header_tabs">
          <p>About</p>
          <p>Projects</p>
          <p>Writing</p>
        </div>
      </div>

      <div className="body">
        <div className="body_inner">
          <div className="body_my-photo-wrap"></div>
          <div className="body_intro-wrap">
            <p>
              Hi, I am Michael, an incoming Cornell CS grad. I have a passion
              for web dev and data science. I am currently exploring ideas in
              web3. My hobbies are playing the piano and biking. Check out my
              past projects and feel free to connect!
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2020 Michael Lim</p>
        <a href="https://github.com/bl458/Prof-website">Source</a>
      </div>
    </div>
  );
}

export default App;
