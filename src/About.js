import "./About.css";

export default function About() {
  return (
    <div className="container">
      <img
        src="https://bclim1.s3.us-east-2.amazonaws.com/me2.jpg"
        alt=""
        title="My Photo"
        className="photo"
      />
      <p className="intro">
        Hi, I am Michael, an incoming Cornell CS grad. I have a passion for
        <br />
        web dev and data science. I am currently exploring ideas in web3.
        <br />
        <br />
        My hobbies are playing the piano and biking.
        <br />
        <br />
        Check out my past projects and feel free to connect!
      </p>
    </div>
  );
}
