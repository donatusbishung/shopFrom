import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AllProducts from '../components/categories/AllProducts';
import BestSellingLayout from '../components/categories/BestSelling';
import Catergories from '../components/categories/Categories';
import Experience from '../components/categories/Experience';
// import NewArrival from '../components/categories/NewArrival';
import ProductGrid from '../components/categories/ProductGrid';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex flex-col gap-20 mb-10 lg:mb-20">
        <BestSellingLayout />
        <Catergories />
        <Experience />
        <AllProducts />
        {/* <NewArrival /> */}
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};
