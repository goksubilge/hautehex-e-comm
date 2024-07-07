import Header from "../layout/Header";

import ShopCardAOne from "../components/ShopCardAOne";
import ProductCardAOne from "../components/ProductCardAOne";
import Clients from "../components/Clients";

import Fluid from "../components/Fluid";
import Highlights from "../components/HighLights";
import Footer from "../layout/Footer";
import Slider from "../components/Slider";
import ProductSlider from "../components/ProductSlider";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <ShopCardAOne />
      <ProductCardAOne />
      <ProductSlider />
      <Fluid />
      <Highlights />
      <Footer />
    </div>
  );
}

export default HomePage;
