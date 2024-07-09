import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center">
      <section className="max-w-60  sm:max-w-full flex flex-wrap flex-col sm:flex-row justify-center gap-8 py-20">
        <div className="gap-3 sm:min-w-60">
          <h3 className="min-w-max">Get In Touch</h3>
          <p className=" text-mainSpace-blue text-sm min-w-max my-3">
            the quick fox jumps over the{" "}
            <span
              className="block 
        text-mainSpace-blue"
            >
              lazy dog
            </span>
          </p>

          <nav
            className="flex flex-row gap-3 sm:min-w-60"
            aria-label="footer-nav"
          >
            <NavLink to="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </NavLink>
            <NavLink to="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink to="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </NavLink>
          </nav>
        </div>

        <nav
          className="flex flex-col items-start gap-3 sm:min-w-60"
          aria-label="footer-nav"
        >
          <h3 className="min-w-max">Company Info</h3>
          <NavLink to="/pages">About Us</NavLink>
          <NavLink to="/pages">Carrier</NavLink>
          <NavLink to="/pages">We are hiring</NavLink>
          <NavLink to="/pages">Blog</NavLink>
        </nav>

        <nav
          className="flex flex-col items-start gap-3 sm:min-w-60"
          aria-label="footer-nav"
        >
          <h3>Features</h3>
          <NavLink to="/pages" className="min-w-max">
            Business Marketing
          </NavLink>
          <NavLink to="/pages">User Analytic</NavLink>
          <NavLink to="/pages">Live Chat</NavLink>
          <NavLink to="tel:444 0 444">Unlimited Support</NavLink>
        </nav>

        <nav
          className="flex flex-col items-start gap-3 sm:min-w-60"
          aria-label="footer-nav"
        >
          <h3>Resources</h3>
          <NavLink to="/pages">IOS & Android</NavLink>
          <NavLink to="/pages">Watch a Demo</NavLink>
          <NavLink to="/pages">Customers</NavLink>
          <NavLink to="/pages">API</NavLink>
        </nav>
      </section>

      <div className="min-w-full text-center bg-[#FAFAFA] pb-6">
        <h6>Made With Love By Finland All Right Reserved</h6>
      </div>
    </footer>
  );
}

export default Footer;
