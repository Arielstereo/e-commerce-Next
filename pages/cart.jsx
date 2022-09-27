import Layout from "../components/Layout";
import { useProduct } from "../context/ProductContext";
import Image from "next/image";
import { RiDeleteBin6Fill, RiWhatsappLine } from "react-icons/ri";
import toast from "react-hot-toast";

export default function Cart() {
  const { cart, setCart } = useProduct();

  const totalCart = cart.reduce(
    (prev, curr) => prev + curr.price * curr.amount,
    0
  );

  const deleteCart = () => {
    setCart([]);
  };

  const handleSubmit = () => {
    toast.success("Pedido confirmado!");
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-32 items-center justify-center">
        <div className="text-2xl pt-8 font-bold">
          {cart.length === 0 ? (
            <div className="mt-32">
              <h3>No hay productos en el carrito!</h3>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center md:mt-4">
              <div className="w-96 md:w-[600px] lg:w-[800px]">
                <div className="flex mt-12 gap-2 w-[600px] md:w-[800px] md:gap-40">
                  <Image
                    src="/assets/logo.jpg"
                    width="80"
                    height="80"
                    alt="logo"
                    className="invisible md:visible"
                  />
                  <h1 className="text-3xl md:text-4xl font-bold mt-10 md:mt-8 text-red-600">
                    Tu pedido
                  </h1>
                  <button onClick={deleteCart}>
                    <RiDeleteBin6Fill
                      className="w-7 h-7 md:w-8 md:h-8 mt-10 md:mt-8 text-red-600 hover:text-red-400"
                      title="Vaciar carrito"
                    />
                  </button>
                </div>
                {cart.map((cart) => (
                  <div
                    className="w-[350px] md:w-[600px] bg-gray-100 rounded-lg shadow-md shadow-gray-400 my-8 mx-2"
                    key={cart.slug}
                  >
                    <div className="flex items-center justify-between px-8 py-4">
                      <Image
                        className="rounded-lg"
                        src={cart.img}
                        alt="product image"
                        width={50}
                        height={50}
                      />
                      <h3 className="text-center py-4 text-sm md:text-lg">
                        {cart.name}
                      </h3>
                      <div className="flex md:gap-6">
                        <span className="text-sm md:text-lg font-bold text-gray-900 mx-6">
                          ${cart.price}
                        </span>
                        <span className="text-sm md:text-lg font-bold text-gray-100 bg-red-500 rounded-full px-2 mx-6">
                          {cart.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-8 my-8 text-center items-center">
                <h3>
                  A pagar: <span className="text-red-500">${totalCart}</span>
                </h3>
                <button
                  onClick={handleSubmit}
                  className="bg-green-400 hover:bg-green-700 text-white rounded-2xl p-2 w-64"
                >
                  Confirmar pedido
                </button>
                <span className="text-red-500 text-sm">
                  * El pago es sólo en efectivo - Delivery sin cargo!
                </span>
                <a
                  href="https://wa.me/5124234234234234?text=Hola%20Don%20Remolo,%20quisiera%20realizar%20un%20pedido!"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 text-green-500 hover:text-black"
                >
                  <RiWhatsappLine className="w-8 h-8" /> Whatsapp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
