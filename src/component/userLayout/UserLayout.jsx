import React from 'react'
import NavBar from './navbar/NavBar'
import ProductCard from './product/productCard/ProductCard'

function UserLayout() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>

      <div className='flex flex-wrap justify-center gap-4 lg:justify-start p-2 md:gap-12 xl:gap-4'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

    </div>
  )
}

export default UserLayout