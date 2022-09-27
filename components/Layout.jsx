import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useProduct();

  const inCart = cart.reduce((prev, curr) => prev + curr.amount, 0);

  return (
    <div>
      <Head>
        <title>E-commerce | Next</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-transparent shadow-lg">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/logo.jpg"
                  width="60"
                  height="60"
                  alt="logo"
                  className="rounded-full"
                />
                <h2 className="md:text-2xl text-red-500 font-bold">
                  DON REMOLO
                </h2>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <MdOutlineClose className="w-6 h-6 text-red-500 font-bold" />
                  ) : (
                    <GiHamburgerMenu className="w-6 h-6 text-red-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-red-500 font-semibold hover:text-slate-700">
                  <Link href="/">
                    <a>Menu</a>
                  </Link>
                </li>
                <li className="text-red-500 hover:text-slate-700">
                  <Link href="/cart">
                    <a className="flex gap-2">
                      <TiShoppingCart className="w-8 h-8" />
                      <span className="text-white bg-red-500 rounded-full px-2 py-1">
                        {inCart}
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
