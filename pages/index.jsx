import { useProduct } from "../context/ProductContext";
import Image from "next/image";
import Layout from "../components/Layout";
import dbConnection from "../utils/database";
import Product from "../models/Products";
import Link from "next/link";

export default function Home({ data }) {
  const { setProducts } = useProduct();
  setProducts(data);

  let filterDrinks = data.filter((item) => item.category === "bebidas");
  let filterPizzas = data.filter((item) => item.category === "pizzas");
  let filterEmpanadas = data.filter((item) => item.category === "empanadas");
  let filterSweets = data.filter((item) => item.category === "postres");

  return (
    <Layout>
      <div className="flex justify-center mt-8">
        <Image src="/assets/logo.jpg" width="600" height="600" alt="logo" />
      </div>
      <h4 className="text-center my-8 text-2xl text-red-500 font-semibold">
        Pizzas
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 lg:p-16">
        {filterPizzas.map((product) => (
          <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md shadow-gray-400 pt-8"
            key={product.slug}
          >
            <h3 className="text-center pb-4 text-lg">{product.name}</h3>
            <div className="flex justify-center">
              <Image
                className="p-8 rounded-lg"
                src={product.img}
                alt="product image"
                width={225}
                height={200}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <span className="text-xl lg:text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <Link href={`/product/${product.slug}`}>
                  <a className="text-white bg-red-500 hover:bg-red-400 font-semibold rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center">
                    Ver producto
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center my-8 text-2xl text-red-500 font-semibold">
        Empanadas
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 lg:p-16">
        {filterEmpanadas.map((product) => (
          <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md shadow-gray-400 pt-8"
            key={product.slug}
          >
            <h3 className="text-center pb-4 text-lg">{product.name}</h3>
            <div className="flex justify-center">
              <Image
                className="p-8 rounded-lg"
                src={product.img}
                alt="product image"
                width={225}
                height={200}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <Link href={`/product/${product.slug}`}>
                  <a className="text-white bg-red-500 hover:bg-red-400 font-semibold rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center ">
                    Ver producto
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center my-8 text-2xl text-red-500 font-semibold">
        Bebidas
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 lg:p-16">
        {filterDrinks.map((product) => (
          <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md shadow-gray-400 pt-8"
            key={product.slug}
          >
            <h3 className="text-center pb-4 text-lg">{product.name}</h3>
            <div className="flex justify-center">
              <Image
                className="p-8 rounded-lg"
                src={product.img}
                alt="product image"
                width={225}
                height={200}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <Link href={`/product/${product.slug}`}>
                  <a className="text-white bg-red-500 hover:bg-red-400 font-semibold rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center ">
                    Ver producto
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-center my-8 text-2xl text-red-500 font-semibold">
        Postres
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 lg:p-16">
        {filterSweets.map((product) => (
          <div
            className="w-full max-w-sm bg-white rounded-lg shadow-md shadow-gray-400 pt-8"
            key={product.slug}
          >
            <h3 className="text-center pb-4 text-lg">{product.name}</h3>
            <div className="flex justify-center">
              <Image
                className="p-8 rounded-lg"
                src={product.img}
                alt="product image"
                width={225}
                height={200}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <Link href={`/product/${product.slug}`}>
                  <a className="text-white bg-red-500 hover:bg-red-400 font-semibold rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center ">
                    Ver producto
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Product.find({});

    const data = res.map((item) => {
      const product = item.toObject();
      product._id = product._id.toString();
      return product;
    });
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
