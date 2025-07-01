import NavBar from './navbar/NavBar';
import ProductCard from './product/productCard/ProductCard';
import useProducts from '../../hooks/useProducts';
import { Outlet, useLocation } from 'react-router-dom';

function UserLayout() {
  const products = useProducts(); // ✅ call hook directly
  const location = useLocation();

  const isProductViewPage = location.pathname.includes('/skydash/veiwProduct/');

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <Outlet />

 
      {!isProductViewPage && (
        <div className='flex flex-wrap justify-center gap-4 lg:justify-start p-2 md:gap-12 xl:gap-4 h-screen overflow-auto pb-24'>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserLayout;
