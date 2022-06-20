import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_PRODUCT_SERVICE;

export const ProductAPI = {
  /**
   * API method to get all products
   *
   * @returns List of products
   */
  getProducts: async () => {
    return axios.get(`${BASE_URL}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  /**
   * API method to get a certain product according to ID
   *
   * @param {string} id Product ID
   * @returns Product with given ID
   */
  getProduct: async (id) => {
    return axios.get(`${BASE_URL}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  /**
   * API method to create product
   *
   * @param {string} token JWT Token
   * @param {FormData} product Product form data
   */
  createProduct: (token, product, setPercentage) => {
    return axios.post(`${BASE_URL}/products`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (p) => {
        setPercentage(`${Math.round((p.loaded * 100) / p.total)}`);
      },
    });
  },

  /**
   *  API method to update a product with a given ID
   *
   * @param {string} token JWT Token
   * @param {string} id Product ID
   * @param {FormData} product Product data
   */
  updateProduct: (token, id, product, setPercentage) => {
    return axios.put(`${BASE_URL}/products/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (p) => {
        setPercentage(`${Math.round((p.loaded * 100) / p.total)}%`);
      },
    });
  },

  /**
   * API method to delete a product with a given ID
   *
   * @param {string} token JWT Token
   * @param {string} id Product ID
   */
  deleteProduct: async (token, id) => {
    return axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
