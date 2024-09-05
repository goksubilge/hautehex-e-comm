import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
function Clients() {
  return (
    <section className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-y-14 gap-x-8 px-48 bg-[#FAFAFA]">
      <FontAwesomeIcon
        icon={faHooli}
        fixed-width
        className="text-[#737373] size-40"
      />
      <FontAwesomeIcon icon={faLyft} className="text-[#737373] size-40" />
      <FontAwesomeIcon
        icon={faPiedPiperHat}
        className="text-[#737373] size-40"
      />
      <FontAwesomeIcon icon={faStripe} className="text-[#737373] size-40" />
      <FontAwesomeIcon icon={faAws} className="text-[#737373] size-40" />
      <FontAwesomeIcon
        icon={faRedditAlien}
        className="text-[#737373] size-40"
      />
    </section>
  );
}

export default Clients;
