import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ViewProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const [sizePrice, setSizePrice] = useState(null)
    const [sizeColour, setSizeColour] = useState(0)


    useEffect(() => {
        const getData = async () => {
            try {
                const collectedData = await axios.get(`https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products/${id}`);
                setProduct(collectedData.data);
                setSizePrice(collectedData.data.details[0].value)

            } catch (error) {
                console.log("Error fetching product:", error);
            }
        };
        if (id) {
            getData();
        }

    }, [id]);



    const chnagePrice = (index) => {
        setSizePrice(product.details[index].value)
    }

    // 🔐 Avoid error before data loads
    if (!product) return <p className="text-center py-10">Loading product...</p>;

    return (
        <section className="py-12 bg-gray-100 font-sans">
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-md">

                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="rounded-xl w-[85%] max-w-md shadow-lg"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-gray-600">{product.description}</p>

                        {/* Size Selection */}
                        <div className="space-y-2">
                            <p className="font-semibold text-gray-700">Select Size:</p>
                            <div className="flex gap-4">
                                {product.details?.map((item, index) => (
                                    <button
                                        onClick={() => {
                                            chnagePrice(index)
                                            setSizeColour(index)
                                        }}
                                        key={index}
                                        className={`${index === sizeColour ? "bg-black text-white " : ""}border border-gray-300 px-4 py-2 rounded-lg`}

                                    >
                                        {item.key}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-700">
                                Price : <span className="font-bold text-3xl">₹ {sizePrice}</span> /-
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                                Add to Cart
                            </button>
                            <button className="border border-black text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
