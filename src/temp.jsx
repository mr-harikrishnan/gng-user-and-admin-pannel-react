import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCreate() {
  const navigate = useNavigate(); //move product page function

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      productDetails: [{ key: "", value: "", qty: "" }],
    },

    validate: (values) => {
      let errors = {};

      if (!values.title) {
        errors.title = "Please enter product title";
      } else if (values.title.length < 3) {
        errors.title = "Title must be at least 3 characters";
      }

      if (!values.image) {
        errors.image = "Please enter image URL";
      }

      if (!values.description) {
        errors.description = "Please enter product description";
      } else if (values.description.length < 10) {
        errors.description = "Description must be at least 10 characters";
      }

      const detailsErrors = values.productDetails.map((item) => {
        const error = {};
        if (!item.key) {
          error.key = "Please enter size";
        }
        if (!item.value) {
          error.value = "Please enter price";
        }
        if (!item.qty) {
          error.qty = "Please enter quantity";
        } else if (!/^\d+$/.test(item.qty)) {
          error.qty = "Quantity must be a positive integer";
        } else if (parseInt(item.qty, 10) <= 0) {
          error.qty = "Quantity must be greater than zero";
        }
        return error;
      });

      if (detailsErrors.some((e) => Object.keys(e).length > 0)) {
        errors.productDetails = detailsErrors;
      }

      return errors;

    },

    onSubmit: async (values) => {
      try {
        console.log("Form Submitted:", values);
        // await axios.post("/api/products", values);
        // navigate("/products");
      } catch (error) {
        console.log("Submit error:", error);
      }
    },
  });

  const addProductDetails = () => {
    const newDetails = [...formik.values.productDetails, { key: "", value: "", qty: "" }];
    formik.setFieldValue("productDetails", newDetails);
  };

  const deleteProductDetails = (index) => {
    const updatedDetails = [...formik.values.productDetails];
    updatedDetails.splice(index, 1);
    formik.setFieldValue("productDetails", updatedDetails);
  };

  return (
    <div className="bg-gray-100 pt-2 flex justify-center items-center">
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
            {formik.touched.title && formik.errors.title && (
              <span className="text-red-500 text-sm">{formik.errors.title}</span>
            )}
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
            {formik.touched.image && formik.errors.image && (
              <span className="text-red-500 text-sm">{formik.errors.image}</span>
            )}
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
            {formik.touched.description && formik.errors.description && (
              <span className="text-red-500 text-sm">{formik.errors.description}</span>
            )}
          </div>

          {/* Add Button */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-base font-semibold text-gray-700">Product Details</p>
              <button
                type="button"
                onClick={addProductDetails}
                className="h-8 w-8 pb-1 flex items-center justify-center bg-gradient-to-br from-[#232232] to-indigo-800 text-white text-2xl rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="border border-gray-300 md:col-span-2 p-4 rounded-lg bg-gray-50 space-y-6">
            {formik.values.productDetails.map((detail, index) => (
              <div key={index} className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">

                {/* Size */}
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-sm font-medium text-gray-700 mb-1">Size</label>
                  <input
                    type="text"
                    name={`productDetails[${index}].key`}
                    value={detail.key}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter size"
                    className="border border-gray-300 rounded-lg px-4 py-2"
                  />
                  {formik.errors.productDetails?.[index]?.key && (
                    <span className="text-red-500 text-sm">{formik.errors.productDetails[index].key}</span>
                  )}
                </div>

                {/* Price */}
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="text"
                    name={`productDetails[${index}].value`}
                    value={detail.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter price"
                    className="border border-gray-300 rounded-lg px-4 py-2"
                  />
                  {formik.errors.productDetails?.[index]?.value && (
                    <span className="text-red-500 text-sm">{formik.errors.productDetails[index].value}</span>
                  )}
                </div>

                {/* Quantity */}
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-sm font-medium text-gray-700 mb-1">Qty</label>
                  <input
                    type="text"
                    name={`productDetails[${index}].qty`}
                    value={detail.qty}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter qty"
                    className="border border-gray-300 rounded-lg px-4 py-2"
                  />
                  {formik.errors.productDetails?.[index]?.qty && (
                    <span className="text-red-500 text-sm">{formik.errors.productDetails[index].qty}</span>
                  )}
                </div>

                {/* Delete Button */}
                <div className="flex items-center pt-6">
                  {formik.values.productDetails.length > 1 && (
                    <button
                      type="button"
                      onClick={() => deleteProductDetails(index)}
                      className="h-6 w-6 flex items-center justify-center bg-red-500 text-white text-sm rounded-full shadow hover:scale-110 active:scale-95 transition"
                    >
                      x
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-[#232232] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#3a3a4a] transition"
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
