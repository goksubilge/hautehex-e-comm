import Header from "../layout/Header";
import Slider from "../components/Slider";
import ShopCardAOne from "../components/ShopCardAOne";
import ProductCardAOne from "../components/ProductCardAOne";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <ShopCardAOne />
      <ProductCardAOne />
      <Footer />
    </div>
  );
}

export default HomePage;
