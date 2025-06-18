import axios from 'axios'
import { useEffect, useState } from 'react'

function useProducts() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const collectedData = await axios.get(
          "https://684fcb12e7c42cfd1795faf8.mockapi.io/adminpannelproject/products"
        );
        setAllProducts(collectedData.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

  }, []);

  return allProducts;
}

export default useProducts;
