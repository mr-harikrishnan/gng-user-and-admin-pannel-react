import React from 'react'
import useProducts from '../../../../hooks/useProducts'
import ProductCard from '../productCard/ProductCard'


function Products() {
  const products=useProducts()
  return (
    <div className='flex flex-wrap justify-center gap-4 lg:justify-start p-2 md:gap-12 xl:gap-4 h-screen overflow-auto pb-24'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default Products