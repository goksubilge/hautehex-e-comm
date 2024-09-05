import ShopCardBTwoData from "../mocks/ShopCardBTwoData";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ShopCardBTwo() {
  return (
    <section className="bg-[#FAFAFA] px-10" aria-label="editors-pick-section">
      <div
        className="flex flex-col md:flex-row items-center md:justify-between gap-8 py-6 "
        aria-label="editors-pick-title"
      >
        <h3 id="shopcardbtwo" className="tracking-wider py-6 md:py-0">
          Shop
        </h3>
        <div className="text-mainSpace-grey flex gap-4 py-3 md:py-0 items-baseline font-bold tracking-wider">
          <NavLink exact to="/">
            Home
          </NavLink>
          <FontAwesomeIcon icon={faAngleRight} />
          <NavLink exact to="/shop">
            Shop
          </NavLink>
        </div>
      </div>

      <div
        aria-label="editors-pick-inner-card"
        className="flex flex-wrap justify-center gap-3"
      >
        {ShopCardBTwoData().map((item, index) => (
          <div
            aria-label="editors-pick-card"
            key={index}
            className="relative gap-3"
          >
            <img
              className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover "
              src={item.picture}
              alt="Photo"
            />
            <div
              aria-label="editors-pick-card-title"
              className="absolute bottom-20 left-20 md:left-12 md:bottom-16 gap-3 text-center font-bold px-12 py-3 backdrop-filter backdrop-blur-xs bg-[rgba(0,0,0,0.2)] rounded-xl"
            >
              <p className="text-textPapayas-white">
                {item.description}
                <p>{item.emptyInfo}</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopCardBTwo;
