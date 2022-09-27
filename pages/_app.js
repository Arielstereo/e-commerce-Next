import { Toaster } from "react-hot-toast";
import { ProductProvider } from "../context/ProductContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp;
