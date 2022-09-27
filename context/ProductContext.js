import { useContext, createContext, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
