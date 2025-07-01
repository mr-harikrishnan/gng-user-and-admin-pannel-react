import { useEffect } from "react";
import useProducts from "../../../../hooks/useProducts";

function DashBoard() {
    const products = useProducts(); // Get all products
    

    return (
        <div className=" p-6 h-screen overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ">

                {/* Card 1 */}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">{products.length}</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">Total Products </div>
                        </div>
                        <div className="dropdown relative">
                            <button className="text-gray-400 hover:text-gray-600">
                                <i className="ri-more-fill"></i>
                            </button>
                            {/* Dropdown actions for admin users can go here */}
                        </div>
                    </div>
                    <a
                        href="#"
                        className="text-[#f84525] font-medium text-sm hover:text-red-800"
                    >
                        Manage Products
                    </a>
                </div>


                
            </div>
        </div>
    );
}

export default DashBoard;
