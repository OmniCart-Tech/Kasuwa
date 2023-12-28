import Link from "next/link";
import facebook from "../public/facebok.svg";
import youtube from "../public/youtube.svg";
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";
import Image from "next/image";
import verve from "../public/verve.svg";
import masterCard from "../public/mastercard.svg";
import interSwitch from "../public/interswitch.svg";
import { Button, Input } from "@nextui-org/react";
import { MailIcon } from "./mailIcon";
import logo from "public/logo.svg";
import ioslogo from "public/ios store.svg";
import googleplay from "public/google play.svg";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#313133]">
        <div className=" max-w-[1280px] px-6  mx-auto flex flex-col gap-4 md:flex-row justify-between md:h-[260px] py-8 pt-14">
          <div className="flex justify-start items-start h-full">
            <Image src={logo} alt="logo" width={35} height={45} />
            <p className=" md:flex text-3xl font-bold text-[#A46E05] ">
              KASUWA
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:m-0 ">
            <span className="text-xl text-white font-semibold">
              NEW TO KASUWA
            </span>
            <p className="text-white">
              Suscribe to our newsletter and get notified about offers
            </p>
            <div className="flex gap-1 max-w-[400px]">
              <Input
                startContent={<MailIcon />}
                style={{
                  padding: "8px",
                }}
                className="text-black rounded-md bg-white"
                placeholder="Enter your email address"
              />
              <Button className="text-white text-sm bg-[#A46E05BD] rounded-md py-2 px-4">
                Suscribe
              </Button>
            </div>
          </div>
          <div className="flex gap-2 items-start justify-start md:justify-center">
            <Image src={logo} alt="logo" width={35} height={45} className="" />
            <div className="flex flex-col gap-2">
              <p className="text-xl text-white font-semibold">
                DOWNLOAD KASUWA MOBILE APP FOR FREE!
              </p>
              <p className="text-white">Get Access to our exclusive offers</p>
              <div className="flex sm:flex-row flex-col gap-2">
                <Button
                  className="w-[200px] border-white border h-[55px] py-2 bg-transparent "
                  startContent={
                    <Image
                      src={ioslogo}
                      width={40}
                      height={40}
                      alt="ios"
                      className="pl-2 w-[50px]"
                    />
                  }
                >
                  <p className="flex flex-col leading-[13px]  h-full w-full text-white">
                    <span className="text-[14px] font-light text-left">
                      Download on the
                    </span>
                    <span className="text-lg text-left font-semibold">
                      App Store
                    </span>
                  </p>
                </Button>
                <Button
                  className=" w-[200px] border-white border h-[55px] py-2 bg-transparent"
                  startContent={
                    <Image
                      src={googleplay}
                      width={40}
                      height={40}
                      alt="ios"
                      className="pl-2 w-[50px]"
                    />
                  }
                >
                  <p className="flex flex-col leading-[13px]  h-full w-full text-white">
                    <span className="text-[14px] font-light text-left">
                      Get it on
                    </span>
                    <span className="text-lg text-left font-semibold">
                      Play Store
                    </span>
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#151515]">
        <div className="max-w-[1280px] mx-auto w-full px-6 py-8 flex flex-col">
          <div className="flex justify-between flex-wrap">
            <ul className="w-[150px] pt-[20px]">
              <li className="text-lg text-white  font-semibold">NEED HELP</li>
              <li>
                <Link href={"#"} className="text-white">
                  Chat with us
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Help centre
                </Link>
              </li>
            </ul>
            <ul className="w-[150px] pt-[20px]">
              <li className="text-lg text-white font-semibold">ABOUT KASUWA</li>
              <li>
                <Link href={"#"} className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Flash Sales
                </Link>
              </li>
            </ul>
            <ul className="w-[150px] pt-[20px]">
              <li className="text-lg text-white font-semibold">
                EARN ON KASUWA
              </li>
              <li>
                <Link href={"/seller/sellerForm"} className="text-white">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Become a Delivery Partner
                </Link>
              </li>
            </ul>
            <ul className="w-[150px] pt-[20px]">
              <li className="text-lg text-white font-semibold">
                KASUWA PRESENCE
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Plateau State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Benue State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Niger State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Adamawa State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Taraba State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Anambra State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Delta State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Oyo State
                </Link>
              </li>
              <li>
                <Link href={"#"} className="text-white">
                  Kano State
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between flex-col sm:flex-row flex-wrap max-w-[650px] mx-auto sm:m-0 sm:pt-0 pt-10 sm:gap-0 gap-8 ">
            <div className="flex flex-col sm:m-0 m-m-auto sm:text-left text-center ">
              <span className="text-lg text-white font-semibold">JOIN US</span>
              <div className="flex justify-normal items-center gap-4 sm:gap-3 w-fit sm:m-0 m-auto">
                <Link href={"#"}>
                  <Image src={facebook} alt="logo" width={25} height={15} />
                </Link>
                <Link href={"#"}>
                  <Image src={youtube} alt="logo" width={25} height={15} />
                </Link>
                <Link href={"#"}>
                  {" "}
                  <Image src={instagram} alt="logo" width={25} height={15} />
                </Link>
                <Link href={"#"}>
                  {" "}
                  <Image src={twitter} alt="logo" width={25} height={15} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <p className="text-lg text-white font-semibold gap-3">
                PAYMENT AND DELIVERY PARTNERS
              </p>
              <div className="w-fit gap-3 m-auto flex justify-center items-center">
                <Link href={"#"}>
                  {" "}
                  <Image src={verve} alt="logo" width={70} height={35} />
                </Link>
                <Link href={"#"}>
                  {" "}
                  <Image src={masterCard} alt="logo" width={50} height={35} />
                </Link>
                <Link href={"#"}>
                  {" "}
                  <Image src={interSwitch} alt="logo" width={70} height={45} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
