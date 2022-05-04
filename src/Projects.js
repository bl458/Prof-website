import "./Projects.css";

const PROJECTS_DATA = [
  {
    title: "Caml Messenger",
    detail: "A STOMP messenger application written in OCaml, with a GTK+ gui",
    link: "https://github.com/yuhuanq/Club-Caml",
  },
  {
    title: "Cornell Electric",
    detail:
      "Flask web app that scrapes Cornell building energy data and displays the data intuitively.",
    link: "https://github.com/Derrig/Cornell-Electric",
  },
  {
    title: "MemeFactory",
    detail:
      "Web app that spits out random memes from an image server and lets users share memes",
    link: "https://github.com/bl458/meme-factory-frontend",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects_title-wrap">
        <p className="projects_title">Projects</p>
      </div>

      <div className="projects_cards-wrap">
        {PROJECTS_DATA.map((p, i) => (
          <>
            <div className="projects_card">
              <div className="projects_card-title-wrap">
                <p className="projects_card-title">{p["title"]}</p>
              </div>
              <div className="projects_card-detail-wrap">
                <p className="projects_card-detail">{p["detail"]}</p>
              </div>
              <p className="projects_card-learn">Learn more</p>
              <a href={p["link"]}>&zwnj;</a>
            </div>
            {i < PROJECTS_DATA.length - 1 && (
              <div className="projects_card-divider" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
