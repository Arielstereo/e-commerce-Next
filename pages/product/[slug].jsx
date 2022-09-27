import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import { useProduct } from "../../context/ProductContext";

export default function ProductSlug() {
  const { products, cart, setCart } = useProduct();

  const [quantity, setQuantity] = useState(0);

  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;

  const product = products.find((product) => product.slug === slug);
  console.log(product);

  const addToCart = (cartItem) => {
    setQuantity(quantity + 1);
    const inCart = cart.find((item) => item.slug === cartItem.slug);
    if (!inCart) {
      setCart([...cart, { ...cartItem, amount: 1 }]);
    } else {
      setCart(
        cart.map((item) => {
          if (item.slug === cartItem.slug) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return item;
        })
      );
    }
  };

  return (
    <Layout>
      <div className="mx-2 md:mx-16 xl:mx-32 my-8">
        <div
          className="md:w-[600px] lg:w-[800px] xl:w-[1000px] mx-16 lg:mx-48 bg-gray-50 rounded-lg shadow-lg shadow-gray-400"
          key={product.slug}
        >
          <h3 className="text-center pt-4 text-xl font-bold">{product.name}</h3>
          <div className="flex flex-col lg:flex-row justify-center p-8">
            <Image
              className="rounded-lg"
              src={product.img}
              alt="product image"
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-6 md:w-96 mt-6">
              <span className="md:mx-6 text-sm text-red-400">
                {product.category}
              </span>
              <p className="text-sm md:text-xl font-semibold tracking-tight text-gray-900 md:mx-6">
                {product.description}
              </p>
              <span className="md:text-3xl font-bold text-gray-900 md:mx-6">
                ${product.price}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-48 bg-green-400 hover:bg-green-600 rounded-lg p-2 md:mt-32 md:mx-6 border-white border-2 text-white font-bold"
                >
                  Agregar
                </button>
                <div className="flex flex-col md:flex-row gap-2">
                  <span className="md:mt-32 pt-2 font-bold">Cantidad</span>
                  <span className="bg-green-400 rounded-lg md:p-2 md:mt-32 border-white border-2 text-white text-center font-bold">
                    {quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-red-500 p-2 my-6 mx-16 lg:mx-48 text-white rounded-lg"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
      </div>
    </Layout>
  );
}
