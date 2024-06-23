import axios from "axios";

export const getProducts = async () => {
  try {
    console.log("apiservice");
    const res = await axios.get("/api/products");
    return res;
  } catch (error) {
    console.log("Error getProduct", error);
  }
};
