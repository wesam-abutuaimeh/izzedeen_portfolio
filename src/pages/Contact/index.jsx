import Form from "../../components/Form";
import SectionTitle from "../../components/SectionTitle";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <SectionTitle title={"Contact Me"} />

        <div className="row contact-form-container">
          <Form />

          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>alfarrajs2004@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+201018055912</p>
            </div>
            <div className="contact-info-item">
              <h3>My Socials</h3>
              <div className="social-links">
                <Link to="https://github.com/z4dev">
                  <FontAwesomeIcon icon={faGithub} size="1x" />
                </Link>
                <Link to="https://discordapp.com/users/993778906010226749">
                  <FontAwesomeIcon icon={faDiscord} size="1x" />
                </Link>
                <Link to="https://www.linkedin.com/in/izzedeenalfarra">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
