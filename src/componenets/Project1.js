import "./Project1.css";
function Project1() {
  return (
    <div className="project1-cont active">
      <div className="project-header">
        <h2>Exambly</h2>
      </div>
      <div className="about-text">
        <p>
          C&B project connects clients and business owners through a streamlined task management interface. Clients can post tasks, browse available taskers, and assign work based on skills or rates. Through their personalized dashboard, clients can view all tasks (both active and completed), manage their profile, and book new tasks.
          <br/>
          Taskers access their own interface to manage assigned tasks, update their progress, and mark tasks as complete or cancelled.
        <br/> 
          Tech stack: ASP.NET Core, Entity Framework, JavaScript, JWT (JSON Web Tokens), SQL Server, HTML and CSS (SASS)
        </p>
        <h3 className="project-link">
          <a
            href="https://api-front-git-main-beth-codes-projects.vercel.app/"
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
