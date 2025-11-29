"use client"
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import {
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import ProductCard from "@/components/productCard";
import Cartitem from "@/components/cartItem";
import { useRouter } from "next/router";

import SkeletonLoading from "@/components/skeletonLoading";

import { usePaystackPayment } from "react-paystack";

export default function Cart() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const { cartItems, list, count } = useContext(AppContext);
  const userDetails =
    typeof window !== "undefined" ? window.localStorage.getItem("user") : false;
  const DeliveryFee = 1000;
  const user = JSON.parse(userDetails as string);
  const total = cartItems.reduce(
    (item: any, current: any) =>
      item + parseFloat(current.originalPrice) * current.quantity,
    0.0
  );
  const checkout = () => {
    if (!user) {
      router.push("/auth/signIn");
    } else {
      onOpen();
    }
  };

  const publicKey = "pk_test_861fff4e3acc786df9a3e54d2889fc2633e0f888"; // Paystack test public key
  const amount = (total + DeliveryFee) * 100;
  const reference = `order_${Math.floor(Math.random() * 1000000) + 1}`; // Generate a unique reference for each transaction

  const onSuccess = () => {
    // Payment successful
  };

  const config = {
    reference,
    email: user?.email,
    amount,
    publicKey,
    onSuccess,
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    // Trigger the Paystack payment process
    initializePayment();
  };

  return (
    <div className="pt-6 " suppressHydrationWarning={true}>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Check Out
              </ModalHeader>

              <div className="bg-stone-200 px-6">ORDER SUMMARY</div>
              <ModalBody>
                <div className=" border-b border-b-gray-400 pb-1">
                  <div className="flex justify-between">
                    <p>Item's total({cartItems.length})</p>
                    <span className="font-semibold">
                      ₦{total.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p>Delivery fees</p>
                    <span className="font-semibold">
                      ₦{DeliveryFee.toLocaleString("en-US")}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between  border-b border-b-gray-400 pb-1">
                  <p>Total</p>
                  <span className="font-semibold">
                    ₦{(total + DeliveryFee).toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex gap-[3px]">
                  <Input
                    placeholder="Enter discount code here"
                    className="border text-black border-gray-400 rounded-md"
                    radius="sm"
                  />
                  <Button className="text-white bg-[#A46E05] rounded-md">
                    Apply{" "}
                  </Button>
                </div>
                <div className="border border-gray-400 rounded-md">
                  <div className="flex justify-between p-2 border-b border-gray-400">
                    <p>we support</p>
                    <div className="flex gap-[4px] justify-center items-center">
                      <Image src="mastercard.svg" alt=""></Image>
                      <Image src="verve.svg" alt=""></Image>
                      <Image src="interswitch.svg" alt=""></Image>
                    </div>
                  </div>
                  <p className="p-2 ">
                    please note that you will be directed to our paystack
                    payment account to complete your purchase of goods...
                  </p>
                </div>

                <div className="flex gap-2 w-fit ml-auto">
                  <p>powered by</p>
                  <div className="flex">
                    <Image src="logo.svg" alt="logo" className="w-[20px]" />
                    <span className="text-[#A46E05]">KASUWA</span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel Order
                </Button>
                <Button
                  color="primary"
                  disabled={cartItems.length === 0}
                  onPress={handlePayment}
                >
                  Place order
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex max-w-[1280px] mx-auto px-6 gap-3 md:flex-row flex-col">
        <div
          className={`min-h-[55vh] w-full h-full flex flex-col gap-3 bg-white p-4`}
        >
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
            <div className="h-[50vh] gap-2 flex justify-center items-center w-full ">
              <p>you have no items in your cart</p>
              <Image src="cart.svg" alt="logo" width={20} height={20} />
            </div>
          )}
        </div>

        <div className="lg:w-[30%] h-[180px] bg-white">
          <div className="flex flex-col gap-2 px-3 bg-white py-3">
            <h2 className="border-b border-b-black text-xl font-semibold">
              Cart Summary
            </h2>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-md">Subtotal</span>
                <p className="text-stone-600">Delivery not included yet</p>
              </div>
              <span>₦{parseFloat(total.toFixed(2)).toLocaleString()}</span>
            </div>
            {cartItems.length > 0 && (
              <Button
                onPress={checkout}
                className="text-white text-sm bg-[#A46E05BD] rounded-md py-2 px-4"
              >
                Checkout (₦{parseFloat(total.toFixed(2)).toLocaleString()})
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] mx-auto  py-10 gap-2">
        <span className="text-[27px] font-semibold px-6">
          {" "}
          Most Searched Product
        </span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
          {list && list.length > 0 ? (
            list.slice(1, 6).map(
              (
                items: {
                  images: any;
                  originalPrice: string;
                  saleScale: string;
                  name: string;
                  _id: string;
                  stock:string
                },
                index: number
              ) => (
                <ProductCard
                stock={items.stock}
                  _id={items._id}
                  item={items}
                  key={index}
                  src={items.images[0].url}
                  index={index}
                  originalPrice={items.originalPrice}
                  title={items.name}
                  count={count}
                />
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
