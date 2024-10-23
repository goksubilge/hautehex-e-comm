import Header from "../layout/Header";

import ShopCardBTwo from "../components/ShopCardBTwo";
import ProductFilter from "../components/ProductFilter";
import ProductCardBTwo from "../components/ProductCardBTwo";
import Clients from "../components/Clients";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <main>
      <Header />
      <ShopCardBTwo />
      <ProductFilter />
      <ProductCardBTwo />
      <Clients />
      <Footer />
    </main>
  );
}

export default HomePage;
