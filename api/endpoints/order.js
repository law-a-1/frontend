const BASE_URL = "http://34.136.2.52:4915"
export const OrderAPI = {
    /**
     * API method to get all products
     *
     * @returns List of products
     */
    getOrder: async (token) => {
      try {
        const res = await fetch(`${BASE_URL}/orderservice/`, {
          headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${token}`
          },
        });
        if (!res.ok) {
          return res.text().then((msg) => {
            throw new Error(msg);
          });
        }
        return res.json();
      } catch (err) {
        console.error(err);
      }
    },
    
    /**
     *  API method to update a product with a given ID
     *
     * @param {string} token JWT Token
     * @param {string} id Product ID
     * @param {FormData} product Product data
     */
    updateProductWait: async (token, id) => {
      try {
        const res = await fetch(`${BASE_URL}/orderservice/wait/${id}/`, {
          method: "PUT",
          headers: {
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
        updateProductWait: async (token, id) => {
      try {
        const res = await fetch(`${BASE_URL}/orderservice/wait/${id}/`, {
          method: "PUT",
          headers: {
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
    updateProductSend: async (token, id) => {
        try {
          const res = await fetch(`${BASE_URL}/orderservice/send/${id}/`, {
            method: "PUT",
            headers: {
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
      updateProductReject: async (token, id) => {
        try {
          const res = await fetch(`${BASE_URL}/orderservice/rjct/${id}/`, {
            method: "PUT",
            headers: {
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
      updateProductRecieved: async (token, id) => {
        try {
          const res = await fetch(`${BASE_URL}/orderservice/rcvd/${id}/`, {
            method: "PUT",
            headers: {
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
  