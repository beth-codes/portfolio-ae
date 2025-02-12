import "./Project.css";

function Project({ toggle }) {
  return (
    <div className="project-cont">
      <div className="project-content">
        <div className="project-header">
          <h2>Projects</h2>
        </div>
        <div className="project-list-container">
          <ul className="list">
          <li className="list-item" onClick={() => toggle("open1")}>
              <span>C&B</span>
            </li>
            <li className="list-item" onClick={() => toggle("open5")}>
              <span>Trafalgar st James</span>
            </li>
            <li className="list-item" onClick={() => toggle("open4")}>
              <span>Rabot - Hotel Chocolat</span>
            </li>
            <li className="list-item" onClick={() => toggle("open3")}>
              <span>Abbey House Hotel</span>
            </li>
            <li className="list-item" onClick={() => toggle("open2")}>
              <span>Ray's Portfolio</span>
            </li>
             <li className="list-item" onClick={() => toggle("open6")}>
              <span>Lensbury</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
