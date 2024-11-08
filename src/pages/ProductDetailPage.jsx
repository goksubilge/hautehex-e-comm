import Header from "../layout/Header";
import Bredcrumb from "../components/Bredcrumb";
import ProductCardAOne from "../components/ProductCardAOne";
import Footer from "../layout/Footer";
import Clients from "../components/Clients";
import ProductDetail from "../components/ProductDetail";
import ProductDetailExtra from "../components/ProductDetailExtra";

function ProductDetailPage() {
  return (
    <main>
      <Header />
      <Bredcrumb />
      <ProductDetail />
      <ProductDetailExtra />
      <ProductCardAOne />
      <Clients />
      <Footer />
    </main>
  );
}

export default ProductDetailPage;
