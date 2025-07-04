import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    const permission = window.confirm("Are you sure you want to delete this product?");
    if (permission) {
      try {
        await axios.delete(
          `https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products/${productId}`
        );
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product", error);
      }
    }
  };

  return (
    <div className="min-h-screen  p-6 relative overflow-auto">

      {/* Top Button */}
      <div className="flex justify-end mb-6">
        <Link to={"product-create"}>
          <button className="bg-gradient-to-r from-[#232232] to-[#9A98B4] cursor-pointer hover:from-[#625f8b] hover:to-[#c3c1e3] text-white px-4 py-2 rounded-lg shadow-md font-semibold transition duration-300">
            + Create Product
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className=" bg-white shadow-xl ">
        <table className="w-full text-sm text-center ">
          <thead className="bg-[#232232] text-white ">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Size - Cost - Qty</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody className="">
            {products.map((item, idx) => (
              <tr
                key={idx}
                className={`bg-gray-100
                  border-b hover:bg-[#F0F0F9] transition duration-200 `}
              >
                {/* Image */}
                <td className="px-4 py-3">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-20 h-16 object-cover rounded-md border border-gray-300 shadow-sm"
                  />
                </td>

                {/* Title */}
                <td className="px-4 py-3 font-medium text-gray-700">{item.title}</td>

                {/* Description */}
                <td className="px-4 py-3 text-gray-600">{item.description}</td>

                {/* Details */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap justify-left gap-2">
                    {item.details.map((detail, i) => (
                      <span
                        key={i}
                        className="bg-[#9a98b4] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                      >
                        {`${detail.key} - ₹${detail.value} - ${detail.qty}`}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 space-y-1 ">

                  <Link to={`veiw-product/${item.id}`}>
                  <button className="w-full flex  justify-center cursor-pointer border-amber-950 text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  </Link>

                  <Link to={`edit-product/${item.id}`}>
                  <button className="w-full flex  justify-center cursor-pointer text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </button>
                  </Link>

                  <button onClick={() => deleteProduct(item.id)} className="w-full flex  justify-center cursor-pointer text-white py-1 rounded-md text-xs font-medium  transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
