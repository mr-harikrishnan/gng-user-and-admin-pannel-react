import React from "react";
import { Link, useSearchParams } from "react-router-dom";




function ProductsList() {
  const products = []


  const [searchparam, setSearchParam] = useSearchParams();


  const setParam = (value) => {
    setSearchParam({ search: value });
  };

  let deleteProduct = async (id) => {
    try {
      let permission = window.confirm("Are you sure delete this content")
      if (permission) {
        await axios.delete(`https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products/${id}`)
        getData()
      }



    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to={"/product-create"}>
        <div className="p-4 flex justify-end">
          <button className="border-2 border-gray-400 px-2 bg-[#3ecc72] rounded text-white font-semibold cursor-pointer">
            Product Create +
          </button>
        </div>
      </Link>

      <div className="border p-2">

      

      </div>



    </div>
  );
}

export default ProductsList;
