import React from 'react';

function ProductCard() {
  return (
    <div className="w-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-full h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/men-winter-clothes-folded-jacket-with-hood-shirt-isolated-white-background_142957-571.jpg?ga=GA1.1.2089794629.1746430998&semt=ais_hybrid&w=740"
          alt="Unisex Jerkin"
        />
      </div>

      {/* Details Section */}
      <div className="bg-[#232232] text-white px-4 py-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-semibold">Unisex Jerkin</h2>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-snug">
          Stay warm and stylish this winter with our premium unisex jerkin, designed for comfort and durability.
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-white text-[#232232] text-sm font-medium rounded-md cursor-pointer hover:bg-gray-200"
            >
              {size}
            </span>
          ))}
        </div>
        

        {/* Price & Add Button */}
        <div className="flex items-center justify-between pt-3">
          <p className="text-sm text-gray-300">
            Price ₹ <span className="text-lg font-bold text-white">450</span> /-
          </p>
          <button className="bg-white text-[#232232] font-bold text-sm px-3 py-1 rounded hover:bg-gray-200 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
