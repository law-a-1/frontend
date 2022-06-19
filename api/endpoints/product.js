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
    })
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
    })
  },

  /**
   * API method to create product
   *
   * @param {string} token JWT Token
   * @param {FormData} product Product form data
   */
  createProduct:  (token, product) => {
    return axios.post(`${BASE_URL}/products`, product, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (p) => {
        console.log(p);
        let percentCompleted = Math.round( (p.loaded * 100) / p.total );
        //this.setState({
        //fileprogress: p.loaded / p.total
        //})
      }
    })
    // try {
    //   const res = await fetch(`${BASE_URL}/products`, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: product,
    //   });
    //
    //   if (!res.ok) {
    //     return res.text().then((msg) => {
    //       throw new Error(msg);
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  },

  /**
   *  API method to update a product with a given ID
   *
   * @param {string} token JWT Token
   * @param {string} id Product ID
   * @param {FormData} product Product data
   */
  updateProduct: (token, id, product) => {
    return axios.post(`${BASE_URL}/products/${id}`, product, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (p) => {
        console.log(p);
        let percentCompleted = Math.round( (p.loaded * 100) / p.total );
        //this.setState({
        //fileprogress: p.loaded / p.total
        //})
      }
    })
    // try {
    //   const res = await fetch(`${BASE_URL}/products/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: product,
    //   });
    //
    //   if (!res.ok) {
    //     return res.text().then((msg) => {
    //       throw new Error(msg);
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  },

  /**
   * API method to delete a product with a given ID
   *
   * @param {string} token JWT Token
   * @param {string} id Product ID
   */
  deleteProduct: async (token, id) => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        return res.text().then((msg) => {
          throw new Error(msg);
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
};
