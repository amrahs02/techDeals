import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [buyLink, setBuyLink] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Dynamically set API URL based on the environment
  const api_url = (window.location.hostname === 'localhost') 
    ? 'http://localhost:5000' 
    : 'https://techdealsapi.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('myfile', image); // `myfile` should match the multer field name in the backend
    formData.append('buyLink', buyLink);

    try {
      // Fix: Template literals to concatenate the API URL correctly
      await axios.post(`${api_url}/api/v1/products`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(true);
      setError('');
      setName('');
      setImage(null);
      setBuyLink('');
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Failed to add product');
      setSuccess(false);
    }
  };

  return (
    <div className="p-6 mt-2 bg-gray-100 rounded-2xl max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a New Product</h2>
      {success && <p className="text-green-500 mb-4">Product added successfully!</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Product Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-medium mb-1">Product Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="buyLink" className="block font-medium mb-1">Buy Link</label>
          <input
            type="url"
            id="buyLink"
            value={buyLink}
            onChange={(e) => setBuyLink(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
