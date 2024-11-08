import Header from "../layout/Header";
import Bredcrumb from "../components/Bredcrumb";
import ProductCardAOne from "../components/ProductCardAOne";
import Footer from "../layout/Footer";
import Clients from "../components/Clients";

function ProductDetailPage() {
  return (
    <main>
      <Header />
      <Bredcrumb />
      <ProductCardAOne />
      <Clients />
      <Footer />
    </main>
  );
}

export default ProductDetailPage;
