import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import ProductCard from "@/components/productCard";
import Image from "next/image";
import savedIcon from "../../public/saved.svg";
export default function SavedItems() {
  const { savedItems, count } = useContext(AppContext);
  return (
    <div className="min-h-[50vh] m-auto" suppressHydrationWarning={true}>
      <h1 className="px-6 py-2 text-xl font-semibold max-w-[1208px] m-auto">
        SAVED ITEMS
      </h1>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]  w-full gap-x-[1.50rem] gap-y-4 pt-10 max-w-[1280px] px-6 py-10 mx-auto ">
        {savedItems.length > 0 &&
          savedItems.map(
            (
              items: {
                images: any;
                originalPrice: string;
                saleScale: string;
                name: string;
                _id:string;
                stock:string
              },
              index: number
            ) => (
              <ProductCard
              
                item={items}
                key={index}
                src={items.images[0].url}
                index={index}
                originalPrice={items.originalPrice}
                title={items.name}
                count={count} 
                _id={items._id}
                 stock={items.stock}              />
            )
          )}
      </div>
      <div>
        {savedItems <= 0 && (
          <div className="flex gap-2 justify-center items-center px-1 m-auto h-[10vh]">
            <p>You do not have any saved items</p>
            <Image src={savedIcon} alt="logo" width={19} height={20} />
          </div>
        )}
      </div>
    </div>
  );
}
