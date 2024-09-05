import ShopCardBTwo1 from "/images/ShopCardBTwo1.jpeg";
import ShopCardBTwo2 from "/images/ShopCardBTwo2.jpeg";
import ShopCardBTwo3 from "/images/ShopCardBTwo3.jpeg";
import ShopCardBTwo4 from "/images/ShopCardBTwo4.jpeg";
import ShopCardBTwo5 from "/images/ShopCardBTwo5.jpeg";

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
        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
            src={ShopCardBTwo1}
            alt="Men Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-20 left-24 font-bold px-12 py-3 "
          >
            <span className="text-textPapayas-white">
              CLOTHS<p>5 items</p>
            </span>
          </div>
        </div>

        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
            src={ShopCardBTwo2}
            alt="Women Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-20 left-24 font-bold px-12 py-3"
          >
            <span className="text-textPapayas-white">
              CLOTHS<p>5 items</p>
            </span>
          </div>
        </div>

        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
            src={ShopCardBTwo3}
            alt="Accessories Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-20 left-24 font-bold px-12 py-3 "
          >
            <span className="text-textPapayas-white">
              CLOTHS<p>5 items</p>
            </span>
          </div>
        </div>
        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
            src={ShopCardBTwo4}
            alt="Kids Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-20 left-24 font-bold px-12 py-3 "
          >
            <span className="text-textPapayas-white">
              CLOTHS<p>5 items</p>
            </span>
          </div>
        </div>
        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
            src={ShopCardBTwo5}
            alt="Kids Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-20 left-24 font-bold px-12 py-3 "
          >
            <span className="text-textPapayas-white">
              CLOTHS<p>5 items</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCardBTwo;
