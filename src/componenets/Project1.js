import "./Project1.css";
function Project1() {
  return (
    <div className="project1-cont active">
      <div className="project-header">
        <h2>Exambly</h2>
      </div>
      <div className="about-text">
        <p>
          Welcome to the Employee Dashboard project, where seamless employee data management is at your fingertips. Built with Angular for a dynamic frontend experience, .NET for robust backend functionality, and CSS/SCSS for sleek design, this dashboard ensures a smooth and intuitive user experience. Hosted on Vercel for frontend deployment and Azure for backend deployment, you can effortlessly search for users, access detailed user information with a simple click, and seamlessly add and search for new users.
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
