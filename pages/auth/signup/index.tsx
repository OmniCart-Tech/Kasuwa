import { Button, Card, Spacer, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import logo from "public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const API_BASE_URL = "https://kasuwa-b671.onrender.com/";

export default function SignUpForm() {
  const [loading, setLoading] = useState("idle");
  const router = useRouter();
  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading("loading");
    try {
      await axios.post(API_BASE_URL + "users/register", formData);
      router.push("/");
    } catch (error) {
      setLoading("failed");
    }
  };
  const renderLoadingUI = () => {
    if (loading === "idle") {
      return <div>Sign up</div>;
    } else if (loading === "loading") {
      return (
        <div className="flex justify-center items-center gap-1">
          <Spinner className="z-50" size="md" color="default" />
          Signing up...
        </div>
      );
    } else if (loading === "failed") {
      return <div>Signup failed. Please try again.</div>;
    }
    return null;
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    location: "",
  });

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "0 5%",
      }}
    >
      <div className="flex justify-center items-center mb-4">
        <Image src={logo} alt="logo" width={35} height={45} />
        <p className=" md:flex text-3xl font-bold text-[#A46E05] ">KASUWA</p>
      </div>
      <Card>
        <div className="bg-white px-6 py-4 rounded-xl">
          <h2 className="text-center font-semibold text-2xl">Create an account</h2>
          <hr className="bg-gray-400 w-full mt-4 " />
          <div className="my-4">
            <form className="w-full mt-5" onSubmit={handleSignUp}>
              <div className="mb-4">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <label htmlFor="first_name" className="block mb-2">First Name</label>
                    <input id="first_name" name="firstName" type="text" value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      required aria-label="First Name"
                      className="border border-[#ccc] rounded-lg h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]" />
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <label htmlFor="last_name" className="block mb-2">Last Name</label>
                    <input id="last_name" name="lastName" type="text" value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      required aria-label="Last Name"
                      className="border border-[#ccc] rounded-lg h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input id="email" name="email" type="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-[#ccc] rounded-lg h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input id="password" name="password" type="password" required value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="border border-[#ccc] rounded-lg h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]" />
              </div>
              <Spacer y={2} />
              <Button type="submit" className="bg-[#A46E05BD] text-white rounded-lg h-12 w-full">
                {renderLoadingUI()}
              </Button>
            </form>
          </div>
          <Spacer y={2} />
          <div className="text-center mt-2 text-md">
            <p>Have an account?<Link href={"/auth/signIn"} className="text-[#38B419]">{""} Login</Link></p>
          </div>
          <Spacer y={16} />
        </div>
      </Card>
    </div>
  );
}
