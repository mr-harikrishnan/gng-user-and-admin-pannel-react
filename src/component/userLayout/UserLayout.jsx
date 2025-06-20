
import NavBar from './navbar/NavBar'
import ProductCard from './product/productCard/ProductCard'
import useProducts from '../../hooks/useProducts'
import { useEffect } from 'react'

function UserLayout() {
  const products = useProducts()  // ✅ call hook directly

  console.log(products)

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div className='flex flex-wrap justify-center gap-4 lg:justify-start p-2 md:gap-12 xl:gap-4 h-screen overflow-auto pb-20'>
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>

    </div>
  )
}

export default UserLayout