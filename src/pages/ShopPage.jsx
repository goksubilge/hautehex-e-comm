import Header from "../layout/Header";

import ShopCardBTwo from "../components/ShopCardBTwo";
import ProductCardAOne from "../components/ProductCardAOne";
import Clients from "../components/Clients";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <main>
      <Header />
      <ShopCardBTwo />
      <ProductCardAOne />
      <Clients />
      <Footer />
    </main>
  );
}

export default HomePage;
