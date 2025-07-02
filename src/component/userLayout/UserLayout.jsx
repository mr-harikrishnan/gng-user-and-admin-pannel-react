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

 
    </div>
  );
}

export default UserLayout;
