import Header from "../layout/Header";

import ShopCardBTwo from "../components/ShopCardBTwo";
import ProductCardBTwo from "../components/ProductCardBTwo";
import Clients from "../components/Clients";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <main>
      <Header />
      <ShopCardBTwo />
      <ProductCardBTwo />
      <Clients />
      <Footer />
    </main>
  );
}

export default HomePage;
