"use client";
import dairy from "../public/dairy.svg";
import legumes from "../public/leghumes.svg";
import Tubers from "../public/tubers.svg";
import grains from "../public/grains.svg";
import livestock from "../public/livestock.svg";
import vegetable from "../public/vegetables.svg";
import fertilizer from "../public/fertilizers.svg";
import fruitGrp from "../public/fruitgroup.svg";
import nairabag from "../public/sack-of-naira-removebg-preview 1.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import ProductCard from "@/components/productCard";

export default function Home() {
  const { list, count } = useContext(AppContext);

  return (
    <div className="mx-auto flex flex-col w-full">
      <div className=" m-auto flex-col flex gap-3 lg:flex-row sm:flex-col w-full pt-10 max-w-[1280px] px-6 py-10 ">
        <div className="flex lg:w-[70%] md:w-full gap-2">
          <div className="w-[50px] sm:w-[30%] border-black border rounded-md">
            <div className="px-2 sm:px-6  py-3 flex flex-col gap-4   max-w-[200px]">
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={dairy} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Dairy products</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={legumes} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Legumes</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={Tubers} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Tubers</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={grains} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Grains</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={livestock} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Livestock</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={vegetable} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Vegetables</span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <Image className="mx-auto sm:m-0" src={fertilizer} width={20} height={20} alt=""></Image>
                <span className="hidden sm:flex">Fertilizers</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[91%] bg-[#3E382E] rounded-md pl-2 z-[2] relative blend bg-no-repeat bg-blend-multiply">
            <div className="flex flex-col gap-3 lg:pl-5 py-3">
              <div>
                <span className="text-[#38B419]">Categories</span>
                <h1 className="text-3xl font-semibold text-white max-w-[300px]">
                  Enhance Your <span className="text-[#38B419]">Plant</span>{" "}
                  Growth Experience
                </h1>
                <p className="text-[#38B419]">The Best Fertilizer Nature Can Offer</p>
              </div>
              <Button radius="sm" className="bg-[#38B419] w-[100px] py-3 px-6 text-xs text-white">
                Buy Now!
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-col sm:flex-col md:flex-row gap-2 lg:w-[29%] md:w-full text-white">
          <div className="flex bg-[#008837] rounded-md justify-between p-3 lg:h-[50%] w-full">
            <div className="flex-col flex">
              <span className="font-semibold text-xl">The safety of your Money I Guaranteed</span>
              <p className="text-sm">Money is released to seller after order has been confirmed as received.</p>
            </div>
            <Image src={nairabag} width={90} height={70} alt="" />
          </div>
          <div className="bg-[#A46E05] justify-between flex rounded-md p-3 lg:h-[50%] w-full">
            <div className="flex flex-col">
              <span className="font-semibold text-xl">Delivery to your doorstep</span>
              <p className="text-sm">Products are delivery to your door step</p>
            </div>
            <Image src={fruitGrp} width={90} height={70} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto">
        {list && list.length > 0 ? (
          list.map(
            (items: { name: string; images: any; originalPrice: string; saleScale: string; title: string; _id:string; stock:string }, index: number) => (
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
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
