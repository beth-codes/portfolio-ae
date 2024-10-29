import "./Project1.css";
function Project1() {
  return (
    <div className="project1-cont active">
      <div className="project-header">
        <h2>Exambly</h2>
      </div>
      <div className="about-text">
        <p>
          Exambly is a gamified exam prep platform I developed to improve student outcomes in Nigeria, featuring engaging practice tests, personalized learning with deep-learning algorithms, offline access, and a seamless, cross-platform experience to make exam preparation interactive and accessible.
        <br/> 
          Built using PHP, CMS, JavaScript (React, Node.js), SQL, HTML and CSS (SASS)
        </p>
        <h3 className="project-link">
          <a
            href="https://exambly.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Site</span>
          </a>
          <br />
        </h3>
      </div>
    </div>
  );
}

export default Project1;
