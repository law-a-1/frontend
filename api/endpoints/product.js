const BASE_URL = process.env.NEXT_PUBLIC_BASE_UR_PRODUCT_SERVICE;

export const ProductAPI = {
  getProducts: async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        headers: {
          "Content-Type": "application/json",
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

  getProduct: async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        return res.json();
      }

      if (!res.ok) {
        return res.text().then((msg) => {
          throw new Error(msg);
        });
      }

      return await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  createProduct: async (token, product) => {
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
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

  updateProduct: async (token, product) => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(product),
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
