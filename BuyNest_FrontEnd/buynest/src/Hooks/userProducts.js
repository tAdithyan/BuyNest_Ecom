// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);


  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/products/allproducts/`);
      setProducts(response.data.productDetails);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new product
  const addProduct = async (product) => {
    setLoading(true);
    try {
      await axios.post(`${apiUrl}/products/addproduct`, product, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProducts();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  // Update a product
  const updateProduct = async (id, product) => {
    setLoading(true);
    try {
      await axios.put(`${apiUrl}/products/updateproduct/${id}`, product);
      fetchProducts();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${apiUrl}/products/deleteproduct/${id}`);
      fetchProducts();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };





  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,

    addProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;
