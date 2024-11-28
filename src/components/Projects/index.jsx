const Projects = () => {
  return (
    <div className="tab-content active" id="education">
      <div className="timeline">
        <div className="timeline-item">
          <h4 className="date">
            E-commerce Web APP :<span>PHP and vanilla JavaScript </span>
          </h4>
          <p>
            Had solve an issue for a client in the e-commerce website, the issue
            was related to the payment gateway and the shipping method.
            Technology Used : PHP, JavaScript, MySQL.
          </p>
          <a href="https://github.com/z4dev/phone_e_web_site">review code</a>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <h4 className="date">
            E-commerce API : <span>Nodejs and Expressjs</span>{" "}
          </h4>
          <p>
            In our E-commerce API project, I spearheaded the implementation of
            advanced features using Express.js to create a robust solution for
            online payments. Integrating various payment gateways securely, I
            optimized API endpoints for speed and scalability, ensuring seamless
            transactions.
          </p>
          <a href="https://github.com/z4dev/e-commerce-api">review code</a>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <h4 className="date">
            CRUD Task Manager : <span>Laravel APIs</span>
          </h4>
          <p>
            Laravel CRUD Task Management simplifies task organization with
            essential CRUD operations. Developed during my internship at Eagle
            Owl Tech, users can create, read, update, and delete tasks
            effortlessly. It features user authentication, task categorization,
            and search/filter functionality. Built on Laravel, it offers a
            responsive interface and follows MVC architecture for scalability
            and maintainability, enhancing productivity.
            <a href="https://github.com/z4dev/intern01-laravel">review code</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;