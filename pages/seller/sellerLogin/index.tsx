import {
  Button,
  Input,
  extendVariants,
} from "@nextui-org/react";
import { useReducer } from "react";
import { MailIcon } from "@/components/mailIcon";
import { useRouter } from "next/router";
import "../../../app/form style.css";

const API_URL = "https://kasuwa-b671.onrender.com";

interface Form {
  password: string;
  email: string;
}

interface ActionType {
  type: string;
  payload: any;
}

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      white: {
        inputWrapper: [
          "bg-white ",
          "text-black",
          "py-[6px]",
          "px-1",
          "ml-auto",
          "w-[270px]",
        ],
      },
    },
  },
  defaultVariants: {
    color: "white",
  },
});
export default function SellerLogin() {
  const router = useRouter();
  const [form, setForm] = useReducer(reducer, {
    password: "",
    email: "",
  });

  function reducer(state: Form, action: ActionType): Form {
    switch (action.type) {
      case "email-change":
        return { ...state, email: action.payload };
      case "password-change":
        return { ...state, password: action.payload };
      case "show-details":
        alert(JSON.stringify(action.payload));
        return { ...state };
      default:
        return { ...state };
    }
  }

  const signupFarmer = async () => {
    try {
      const farmerDetails = {
        email: form.email,
        password: form.password,
      };
      const CONFIG = {
        method: "POST",
        body: JSON.stringify(farmerDetails),
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (form.password) {
        const signup = await fetch(`${API_URL}/farmers/farmerLogin`, CONFIG);
        const signupRes = await signup.json();
        if (signupRes.success) {
          localStorage.setItem("farmer", JSON.stringify(signupRes.data))
          router.push("/seller/dashboard");
        }
      } 
    } catch (error) {
      // Error handled silently
    }
  };

  return (
    <div>
      <nav className="py-2 px-2 bg-white shadow-sm top-[0] sticky z-20">
        <div className="max-w-[1280px] flex justify-between px-6 w-full mx-auto ">
          <p className="text-2xl">
            <b>SELLER</b> CENTER
          </p>
          <Button className="bg-[#A46E05] text-white p-2 rounded-md">
            Report a claim
          </Button>
        </div>
      </nav>
      <div className="py-10 px-4 sm:px-8 flex flex-col gap-8 ">
        <p className="font-semibold text-lg text-left md:w-[70%]   md:mx-auto">
          Login to your Account
        </p>
        <div className="w-full h-full flex flex-col justify-start lg:justify-center lg:items-center">
          <div className=" bg-[#D9D9D9] flex flex-col py-10 lg:px-8 px-4 w-full  md:w-[70%] h-[80%] m-auto rounded-md">
            <span className="text-xl font-semibold">
              <b>Login</b>
            </span>
            <form
              className=" text-black flex flex-col gap-2 justify-center lg:items-center"
              onSubmit={(e) => {
                e.preventDefault();
                signupFarmer();
              }}
            >
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold max-w-[300px] pr-1">
                  Email Address
                </span>
                <MyInput
                  startContent={<MailIcon className="ml-2" />}
                  isClearable
                  isRequired
                  type="email"
                  placeholder="user@example.com"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({ type: "email-change", payload: e.target.value });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Password
                </span>
                <MyInput
                  isRequired
                  type="password"
                  placeholder="********"
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "password-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
             
              <div className="w-full mx-auto max-w-[600px] py-5 flex px-6">
                <Button
                  type="submit"
                  className="bg-[#A46E05BD] p-2 px-3 text-white rounded-md m-0 ml-auto"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
