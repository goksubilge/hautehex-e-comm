import HighlightsData from "../mocks/HighlightsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Highlights() {
  return (
    <section className="flex flex-col justify-between items-center py-20 md:py-28 tracking-normal">
      <div
        className="flex flex-col text-center gap-3"
        aria-label="editors-pick-title"
      >
        <h6 className="text-mainSpace-blue">Practice Advise</h6>
        <h3>Featured Products</h3>
        <p className="text-mainSpace-grey max-w-[190px] md:max-w-full">
          Problems trying to resolve the conflict between two major
        </p>
      </div>

      <div className="pt-20">
        <div className="flex flex-wrap mt-20 justify-center gap-6 max-w-6xl ">
          {HighlightsData().map((item, index) => (
            <div key={index} className="max-w-60 min-w-min">
              <div className="w-[330px] md:w-[348px] h-[300px]">
                <img
                  src={item.picture}
                  className="object-cover object-center w-full h-full"
                  alt="HighLights"
                ></img>
              </div>

              <nav className="text-sm text-mainSpace-grey leading-1 gap-4 py-6 text-left flex flex-row ">
                <p href="/" className="hover">
                  {item.nav.nav1}
                </p>
                <p href="/" className="hover">
                  {item.nav.nav2}
                </p>
                <p href="/" className="hover">
                  {item.nav.nav3}
                </p>
              </nav>

              <div>
                <h4>
                  {item.title.title1}
                  <p className="block">{item.title.title2}</p>
                </h4>
                <p>{item.description}</p>
                <div className="flex justify-between py-4">
                  <p className="text-mainSpace-grey">
                    <FontAwesomeIcon
                      icon={faClock}
                      fade
                      size="sm"
                      style={{ color: "#4A4E69" }}
                    />
                    {item.date}
                  </p>
                  <p className="text-mainSpace-grey">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      fade
                      size="sm"
                      style={{ color: "#4A4E69" }}
                    />
                    {item.comments}
                  </p>
                </div>
                <div className="inline gap-2 font-bold text-lg text-mainSpace-blue">
                  {item.moreInfo}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="lg"
                    style={{ color: "#4A4E69" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
