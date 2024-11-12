import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 mt-2 bg-gray-100 rounded-2xl">
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-gray-200 shadow-lg rounded-2xl overflow-hidden w-full sm:w-80"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-end justify-center mb-4  ">
              <h2 className="text-white p-2 bg-opacity-50 bg-black rounded-full text-xl font-semibold text-center">{product.name}</h2>
            </div>
            <a
              href={product.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="Buy Product"
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;