import BlogOne1 from "/images/BlogOne1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Blog() {
  return (
    <div className="flex flex-col">
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

      <div>
        <img src={BlogOne1} alt="Blog" />
      </div>
      <div className="flex flex-row justify-start  font-thin text-sm text-mainSpace-grey    leading-1 gap-4">
        <p href="/" className="hover">
          Google
        </p>
        <p href="/" className="hover">
          Tranding
        </p>
        <p href="/" className="hover">
          New
        </p>
      </div>
      <div>
        <h4>Loudest à la Madison #1 (Le integral)</h4>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between py-4">
          <p className="text-mainSpace-grey">
            <FontAwesomeIcon
              icon={faClock}
              size="sm"
              style={{ color: "#4a4e69" }}
            />
            22 April 2021
          </p>
          <p className="text-mainSpace-grey">
            <FontAwesomeIcon
              icon={faChartLine}
              size="sm"
              style={{ color: "#9a8c98" }}
            />
            10 comments
          </p>
        </div>
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
  );
}

export default Blog;
