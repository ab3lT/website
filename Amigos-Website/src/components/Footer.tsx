import FooterList from "./FooterList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <FooterList
              title="Location"
              items={[
                {
                  label: "Around St. George",
                },
                {
                  label: "Church; In front of",
                },
                {
                  label: "Addis Ababa",
                },
                {
                  label: "Medical College",
                },
              ]}
            />
          </div>
          <div className="col-md-3">
            <FooterList
              title="Office Hours"
              items={[
                { label: "Monday to Friday " },
                { label: "08:30 AM to 07:00 PM" },
                { label: "Saturday" },
                { label: "08:30 AM to 12:30 PM" },
              ]}
            />
          </div>
          <div className="col-md-3">
            <FooterList
              title="Our Products"
              items={[
                { label: "Saving Products", href: "/saving-products" },
                { label: "Loan Products", href: "/loan-products" },
                { label: "Insurance Products", href: "/insurance-products" },
                { label: "Member Service", href: "/member-service" },
              ]}
            />
          </div>
          <div className="col-md-3">
            <FooterList
              title="Reach us"
              items={[
                { label: "+251-111267675", href: "#" },
                { label: "+251-930086830", href: "#" },
                { label: "Call on 8511", href: "#" },
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="amigos-logo.png"
              alt="Amigos Logo"
              className="footer-logo"
            />
          </div>
          <div className="col-md-4 text-center">
            <p>&copy; 2016-2024 Amigos Credit and Saving Coop</p>
          </div>
          <div className="col-md-4 text-right">
            <ul className="social-media-list">
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>
              <li style={{ display: "inline-block" }}>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
