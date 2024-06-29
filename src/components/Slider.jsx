import SliderData from "../mocks/SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";

function Slider() {
  return (
    <div>
      <section>
        <Swiper
          scrollbar={{
            hide: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SliderData().map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.picture} alt="A Hero Picture" />
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
              <button>{item.button}</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Slider;
