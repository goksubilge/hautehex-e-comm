import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="sm:w-full flex flex-col ">
      <section className="flex flex-wrap justify-between my-0 gap-8 py-20 p-48 ">
        <div className="gap-3">
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

          <nav className="flex flex-row gap-3" aria-label="footer-nav">
            <a href="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/pages" className="text-2xl">
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
          </nav>
        </div>

        <nav
          className="flex flex-col items-start gap-3"
          aria-label="footer-nav"
        >
          <h3 className="min-w-max">Company Info</h3>
          <a href="/pages">About Us</a>
          <a href="/pages">Carrier</a>
          <a href="/pages">We are hiring</a>
          <a href="/pages">Blog</a>
        </nav>

        <nav
          className="flex flex-col items-start gap-3"
          aria-label="footer-nav"
        >
          <h3>Features</h3>
          <a href="/pages" className="min-w-max">
            Business Marketing
          </a>
          <a href="/pages">User Analytic</a>
          <a href="/pages">Live Chat</a>
          <a href="tel:444 0 444">Unlimited Support</a>
        </nav>

        <nav
          className="flex flex-col items-start gap-3"
          aria-label="footer-nav"
        >
          <h3>Resources</h3>
          <a href="/pages">IOS & Android</a>
          <a href="/pages">Watch a Demo</a>
          <a href="/pages">Customers</a>
          <a href="/pages">API</a>
        </nav>
      </section>

      <div className="min-w-full text-center bg-[#FAFAFA] pb-6">
        <h6>Made With Love By Finland All Right Reserved</h6>
      </div>
    </footer>
  );
}

export default Footer;
