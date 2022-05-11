import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img
        src="https://bclim1.s3.us-east-2.amazonaws.com/me2.jpg"
        alt=""
        title="My Photo"
        className="photo"
      />
      <p className="intro">
        Hi, I am Michael, an incoming Cornell CS grad. I have a passion for web
        dev and data science. I am currently exploring ideas in web3.
        <br />
        <br />
        My hobbies are playing the piano and biking.
        <br />
        <br />
        Here is my{" "}
        <a href="/resume.pdf" className="about_intro-link" target="_blank">
          resume.
        </a>
        <br />
        <br />
        Check out my past{" "}
        <a href="projects" className="about_intro-link">
          projects
        </a>{" "}
        and feel free to{" "}
        <a href="contact" className="about_intro-link">
          connect
        </a>
        !
      </p>
    </div>
  );
}
