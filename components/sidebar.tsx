import Image from "next/image";
import Link from "next/link";
import dashboard from "../public/dashboardIcon.svg";
import products from "../public/product.svg";
import orders from "../public/ordersIcon.svg";
import reviews from "../public/reviews.svg";
import feedback from "../public/feedback.svg";
import logout from "../public/logout.svg";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";
import { Button } from "@nextui-org/react";
export default function Sidebar() {
  const context = useContext(AppContext);
  const isNavOpen = context?.isNavOpen ?? false;

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div
      className={` md:w-[270px] flex flex-col gap-10 py-8  bg-white transition-all duration-75   left-[0] ${
        !isNavOpen
          ? "w-[0] overflow-hidden relative "
          : "w-[270px] z-50 h-full fixed overflow-auto"
      } `}
    >
      <ul className="flex flex-col gap-3 px-8">
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center ${
            pathname.includes("dashboard") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"/seller/dashboard"}
          >
            <Image src={dashboard} width={20} height={20} alt="img"></Image>
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("products") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"/seller/addProduct"}

          >
            <Image src={products} width={20} height={20} alt="img"></Image>
            <span>Add Products</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("orders") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={orders} width={20} height={20} alt="img"></Image>
            <span>Orders</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("reviews") && "bg-[#A46E054D]"
          } `}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={reviews} width={20} height={20} alt="img"></Image>
            <span>Reviews</span>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-3 py-4 border-t border-t-[#A46E05] px-8">
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("feedback") && "bg-[#A46E054D]"
          }`}
        >
          <Link
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            href={"#"}
          >
            <Image src={feedback} width={20} height={20} alt="img"></Image>
            <span>Send Feedback</span>
          </Link>
        </li>
        <li
          className={`py-2 px-2 w-full transition-all duration-150  hover:bg-[#A46E054D] rounded-md flex gap-2 justify-start items-center  ${
            pathname.includes("logout") && "bg-[#A46E054D]"
          } `}
        >
          <Button
          style={{
            background:"transparent",
            padding:"2px",
            height:"fit-content"
          }}
            className="flex gap-2 justify-start w-full items-center text-[#A46E05]"
            onClick={() => {
              localStorage.removeItem("farmer");
              router.push("/");
            }}
          >
            <Image src={logout} width={20} height={20} alt="img"></Image>
            <span>Logout</span>
          </Button>
        </li>
      </ul>
    </div>
  );
}
