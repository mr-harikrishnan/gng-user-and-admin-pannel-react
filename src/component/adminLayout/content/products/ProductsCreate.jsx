import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
    const navigate =useNavigate()
    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            image: "",
            instock: true,
            description: ""
        },
        validate: (values) => {
            let error = {};

            if (values.title === "") {
                error.title = "Please enter product title";
            } else if (values.title.length < 3) {
                error.title = "Title must be at least 3 characters";
            }

            if (values.price === "") {
                error.price = "Please enter product price";
            } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
                error.price = "Enter a valid price";
            }

            if (values.image === "") {
                error.image = "Please enter image URL";
            }

            if (values.description === "") {
                error.description = "Please enter product description";
            }

            return error;
        },
        onSubmit: async (values) => {
            try {
                const createdData=await axios.post("https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products",values)
                navigate("/products")
                
            } catch (error) {
                console.log(error);
                
            }
        },
    });






    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
                <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Product Title */}
                    <div>
                        <label className="block text-gray-600 mb-1">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product name"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <span className="text-red-500 text-sm">{formik.errors.title}</span>
                        ) : null}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-600 mb-1">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product price"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <span className="text-red-500 text-sm">{formik.errors.price}</span>
                        ) : null}
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-gray-600 mb-1">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter image URL"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <span className="text-red-500 text-sm">{formik.errors.image}</span>
                        ) : null}
                    </div>

                    {/* In Stock */}
                    <div>
                        <label className="block text-gray-600 mb-1">Instock</label>
                        <select
                            name="instock"
                            value={formik.values.instock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                            className="w-full border border-gray-400 rounded px-3 py-2 text-gray-600"
                        >
                            <option disabled value="">Select Your instock</option>
                            <option value={true}>In stock</option>
                            <option value={false}>No stock</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-600 mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter product description"
                            className="w-full border border-gray-400 rounded px-3 py-2"
                            rows="4"
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <span className="text-red-500 text-sm">{formik.errors.description}</span>
                        ) : null}
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className={`mt-4 hover:bg-blue-700 ${!formik.isValid ? "bg-blue-400" : "bg-blue-600"} text-white font-semibold px-6 py-2 rounded shadow`}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductCreate;
