import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <p className="contact_text">
        I'd love to hear from you!
        <br />
        <br />
        The best way to contact me is to shoot me an email at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: bl458@cornell.edu"
          className="contact_link"
        >
          byungchan9707@gmail.com
        </a>
        .
        <br />
        <br />
        You can also check out my{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bl458"
          className="contact_link"
        >
          github
        </a>{" "}
        or message me on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/michael-byungchan-lim-629889126/"
          className="contact_link"
        >
          Linkedin
        </a>
        .
      </p>
    </div>
  );
}
