"use client"
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import {
  Image,
  Button,
} from "@nextui-org/react";
import ProductCard from "@/components/productCard";
import Cartitem from "@/components/cartItem";
import SkeletonLoading from "@/components/skeletonLoading";

export default function Cart() {
  const { cartItems, list, count } = useContext(AppContext);
  const total = cartItems.reduce(
    (item: any, current: any) =>
      item + parseFloat(current.originalPrice) * current.quantity,
    0.0
  );

  return (
    <div className="pt-6" suppressHydrationWarning={true}>
      <div className="flex max-w-[1280px] mx-auto px-6 gap-3 md:flex-row flex-col">
        <div className="min-h-[55vh] w-full h-full flex flex-col gap-3 bg-white p-4">
          <h1 className="border-b border-b-black text-3xl py-2 font-semibold">
            Cart({cartItems.length})
          </h1>
          {cartItems.length > 0 ? (
            cartItems.map((items: any, index: number) => (
              <Cartitem
                stock={items.stock}
                _id={items._id}
                img={items.images[0].url}
                index={index}
                originalPrice={items.originalPrice}
                title={items.name}
                key={index}
                quantity={items.quantity}
              />
            ))
          ) : (
            <div className="h-[50vh] gap-2 flex justify-center items-center w-full">
              <p>you have no items in your cart</p>
              <Image src="cart.svg" alt="logo" width={20} height={20} />
            </div>
          )}
        </div>
        <div className="lg:w-[30%] h-[180px] bg-white">
          <div className="flex flex-col gap-2 px-3 bg-white py-3">
            <h2 className="border-b border-b-black text-xl font-semibold">Cart Summary</h2>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-md">Subtotal</span>
                <p className="text-stone-600">Delivery not included yet</p>
              </div>
              <span>₦{parseFloat(total.toFixed(2)).toLocaleString()}</span>
            </div>
            {cartItems.length > 0 && (
              <Button className="text-white text-sm bg-[#A46E05BD] rounded-md py-2 px-4">
                Checkout (₦{parseFloat(total.toFixed(2)).toLocaleString()})
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto py-10 gap-2">
        <span className="text-[27px] font-semibold px-6">Most Searched Product</span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto">
          {list && list.length > 0 ? (
            list.slice(1, 6).map(
              (items: { images: any; originalPrice: string; saleScale: string; name: string; _id: string; stock:string }, index: number) => (
                <ProductCard stock={items.stock} _id={items._id} item={items} key={index} src={items.images[0].url} index={index} originalPrice={items.originalPrice} title={items.name} count={count} />
              )
            )
          ) : (
            <SkeletonLoading />
          )}
        </div>
      </div>
    </div>
  );
}
