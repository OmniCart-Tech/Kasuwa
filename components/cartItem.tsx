import { Button, Image } from "@nextui-org/react";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "@/utils/AppContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import Link from "next/link";
interface cartItem {
  img: string;
  index: number;
  originalPrice: string;
  title: string;
  _id: string;
  quantity: number;
  stock: string;
}

export default function Cartitem({
  img,
  index,
  title,
  originalPrice,
  quantity,
  _id,
  stock,
}: cartItem) {
  const [count, setCount] = useState(quantity);
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(AppContext);
  const amount = parseFloat(stock);

  function getStockStatus() {
    if (amount === 0) {
      return <p className="text-red-500">Out of stock</p>;
    } else if (amount < 20) {
      return <p className="text-yellow-500">Low on stock</p>;
    } else {
      return <p className="text-stone-600">In stock</p>;
    }
  }

  useEffect(() => {
    if (amount === 0) {
      setCount(0);
    }
  }, [amount]);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  function deleteFromCart(title: string, index: number) {
    removeFromCart(title, index);
  }
  const increaseCountQuantity = () => {
    // Pass the index of the item to update its quantity
    increaseQuantity(index);
  };
  const decreaseCountQuantity = () => {
    // Pass the index of the item to update its quantity
    decreaseQuantity(index);
  };

  return (
    <div className="cartItem w-full flex gap-2 " key={index}>
      <Image
        radius="none"
        removeWrapper
        className="w-[150px] h-[120px] object-cover max-w-[150px]"
        src={img}
        alt="logo"
        width={100}
        height={100}
      />
      <div className="goods flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            <Link href={`/product/${_id}`}>{title}</Link>
          </p>
          <div>{getStockStatus()}</div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-center">₦{originalPrice.toLocaleString()}</p>
          {amount === 0 && (
            <div className="flex justify-between px-1 gap-1 text-white items-center">
              <Button
                isDisabled
                radius="none"
                className="w-[25px] h-[25px] min-w-[25px] p-1 bg-[#A46E0580]"
                onClick={() => {
                  if(count>1){
                  decreaseCountQuantity();
                  decreament();
                  }
                }}
              >
                -
              </Button>
              <span className="text-black">{count}</span>
              <Button
                isDisabled
                radius="none"
                className="w-[25px] h-[25px] min-w-[25px] p-1 bg-[#A46E05]"
                onClick={() => {
                  increaseCountQuantity();
                  increament();
                }}
              >
                +
              </Button>
            </div>
          )}

          {amount > 0 && (
            <div className="flex justify-between px-1 gap-1 text-white items-center">
              <Button
                radius="none"
                className="w-[25px] h-[25px] min-w-[25px] p-1 bg-[#A46E0580]"
                onClick={() => {
                  if(count>1){
                  decreaseCountQuantity();
                  decreament();
                  }
                }}
              >
                -
              </Button>
              <span className="text-black">{count}</span>
              <Button
                radius="none"
                className="w-[25px] h-[25px] min-w-[25px] p-1 bg-[#A46E05]"
                onClick={() => {
                  increaseCountQuantity();
                  increament();
                }}
              >
                +
              </Button>
            </div>
          )}
          <Button
            startContent={<MdOutlineDeleteForever size={25} />}
            onClick={() => {
              deleteFromCart(title, index);
            }}
            className="p-2 bg-[#A46E05BD] text-white rounded-md mt-auto"
          >
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  );
}
