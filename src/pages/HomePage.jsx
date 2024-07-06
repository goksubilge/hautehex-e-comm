import Header from "../layout/Header";

import ShopCardAOne from "../components/ShopCardAOne";
import ProductCardAOne from "../components/ProductCardAOne";
import Clients from "../components/Clients";

import Fluid from "../components/Fluid";
import Highlights from "../components/HighLights";
import Footer from "../layout/Footer";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <ShopCardAOne />
      <ProductCardAOne />
      <Clients />
      <Fluid />
      <Highlights />
      <Footer />
    </div>
  );
}

export default HomePage;
