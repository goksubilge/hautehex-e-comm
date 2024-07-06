import BlogOne1 from "/images/BlogOne1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Highlights() {
  return (
    <div className="flex flex-col justify-between items-center py-20 tracking-normal ">
      <div
        className="flex flex-col text-center gap-3 max-w-52"
        aria-label="editors-pick-title"
      >
        <h6 className="text-mainSpace-blue">Practice Advise</h6>
        <h4 className="text-mainSpace-grey">Featured Products</h4>
        <h3>Featured Products</h3>
        <p className="text-mainSpace-grey">
          Problems trying to resolve the conflict between two major
        </p>
      </div>

      <div className="pt-20">
        <img src={BlogOne1} alt="Blog" />

        <div className="p-6">
          <nav className="flex flex-row items-start text-sm text-mainSpace-grey leading-1 gap-4">
            <p href="/" className="hover">
              Google
            </p>
            <p href="/" className="hover">
              Tranding
            </p>
            <p href="/" className="hover">
              New
            </p>
          </nav>
          <div>
            <h4>
              Loudest à la Madison #1 <p className="block">(L'integral)</p>
            </h4>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex justify-between py-4">
              <p className="text-mainSpace-grey">
                <FontAwesomeIcon
                  icon={faClock}
                  fade
                  size="sm"
                  style={{ color: "#4a4e69" }}
                />
                22 April 2021
              </p>
              <p className="text-mainSpace-grey">
                <FontAwesomeIcon
                  icon={faChartLine}
                  fade
                  size="sm"
                  style={{ color: "#4a4e69" }}
                />
                10 comments
              </p>
            </div>
            <div className="inline gap-2 font-bold text-lg text-mainSpace-blue">
              Learn More
              <FontAwesomeIcon
                icon={faAngleRight}
                size="lg"
                style={{ color: "#4a4e69" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
