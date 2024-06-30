import Header from "../layout/Header";
import Slider from "../components/Slider";
import ShopCardAOne from "../components/ShopCardAOne";
import ProductCardAOne from "../components/ProductCardAOne";
import Clients from "../components/Clients";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <ShopCardAOne />
      <ProductCardAOne />
      <Clients />
      <Footer />
    </div>
  );
}

export default HomePage;
