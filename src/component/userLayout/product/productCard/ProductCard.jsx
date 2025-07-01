import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {



  return (
    <div className="w-72   rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <Link to={`veiwProduct/${product.id}`}>
        <div className="w-full h-72 overflow-hidden">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src={product.image}
            alt="Unisex Jerkin"
          />
        </div>
      </Link>


      {/* Details Section */}
      <div className="bg-[#f3f0f5] text-[#2C3E50] px-4 py-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-semibold">{product.title.slice(0,20)}</h2>

        {/* Description */}
        <p className="text-sm text-[#5D6D7E] leading-snug">
          {product.description.slice(0, 30)}...
        </p>



        {/* Price & Add Button */}
        <div className="flex items-center justify-between pt-3">
          <p className="text-sm text-[#5D6D7E]">
            Price ₹ <span className="text-lg font-bold text-[#2C3E50]">{product.details[0].value}</span> /-
          </p>
          <button className="bg-[#232232] cursor-pointer text-white font-bold text-sm px-4 py-1.5 rounded hover:bg-[#726db7] transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
