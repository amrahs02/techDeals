import { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const api_url = (window.location.hostname === 'localhost') 
    ? 'http://localhost:5000' 
    : 'https://techdeals.onrender.com';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api_url}/api/v1/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${api_url}/api/v1/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Failed to delete product');
    }
  };

  return (
    <div className="p-6 mt-2 bg-gray-100 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Delete a Product</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
              <button
                onClick={() => handleDelete(product._id)}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
              >
                Delete Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteProduct;
