import {
  Button,
  Input,
  extendVariants,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { useState, useReducer } from "react";
import { MailIcon } from "@/components/mailIcon";
import { useRouter } from "next/router";
import "../../../app/form style.css";
import Link from "next/link";

const API_URL = "https://kasuwa-b671.onrender.com";

interface Form {
  shopName: string;
  password: string;
  businessType: any;
  phoneNumber: string;
  accountManagerName: string;
  email: string;
  retypepassword: string;
  accountManagerPhoneNumber: string;
  state: string;
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
const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
export default function SellerForm() {
  const [hasReadContract, setHasReadContract] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [contractError, setContractError] = useState("");

  const router = useRouter();
  const [form, setForm] = useReducer(reducer, {
    shopName: "",
    password: "",
    businessType: "",
    accountManagerPhoneNumber: "",
    phoneNumber: "",
    accountManagerName: "",
    email: "",
    state: "",
    retypepassword: "",
  });

  function reducer(state: Form, action: ActionType): Form {
    switch (action.type) {
      case "shopName-change":
        return { ...state, shopName: action.payload };
      case "businessType-change":
        return { ...state, businessType: action.payload };
      case "state-change":
        return { ...state, state: action.payload };
      case "accountManagerName-change":
        return { ...state, accountManagerName: action.payload };
      case "accountManagerPhoneNumber-change":
        return { ...state, accountManagerPhoneNumber: action.payload };
      case "phoneNumber-change":
        return { ...state, phoneNumber: action.payload };
      case "email-change":
        return { ...state, email: action.payload };
      case "password-change":
        return { ...state, password: action.payload };
      case "retypePassword-change":
        return { ...state, retypepassword: action.payload };
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
        fullname: form.accountManagerName,
        email: form.email,
        location: form.state,
        shop_name: form.shopName,
        password: form.password,
      };
      const CONFIG = {
        method: "POST",
        body: JSON.stringify(farmerDetails),
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (form.password === form.retypepassword && hasReadContract === true) {
        const signup = await fetch(`${API_URL}/farmers/farmerRegister`, CONFIG);
        const signupRes = await signup.json();
        if (signupRes.success) {
          router.push("/seller/dashboard");
        }
      } else {
        // Set error messages when conditions are not met
        if (form.password !== form.retypepassword) {
          setPasswordError("Passwords do not match.");
        } else {
          setPasswordError("");
        }
        if (!hasReadContract) {
          setContractError("Please accept the e-contract.");
        } else {
          setContractError("");
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
        </div>
      </nav>
      <div className="py-10 px-4 sm:px-8 flex flex-col gap-8 ">
        <p className="font-semibold text-lg text-left md:w-[70%]   md:mx-auto">
          Register and start selling today - Create a seller account
        </p>
        <div className="w-full h-full flex flex-col justify-start lg:justify-center lg:items-center">
          <div className=" bg-[#D9D9D9] flex flex-col py-10 lg:px-8 px-4 w-full  md:w-[70%] h-[80%] m-auto rounded-md">
            <span className="text-xl font-semibold">
              Add Seller Information
            </span>
            <form
              className=" text-black flex flex-col gap-2 justify-center lg:items-center"
              onSubmit={(e) => {
                e.preventDefault();
                signupFarmer();
              }}
            >
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Shop Name
                </span>
                <MyInput
                  value={form.shopName}
                  placeholder="kasuwa"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "shopName-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>

              <p className="text-sm max-w-[600px] mx-auto">
                Choose a unique name for your online shop: this is the name that
                will appear on the kasuwa marketplace! It is forbidden to use a
                registered trademark in your shop name without the brand
                authorisation.
              </p>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold  max-w-[300px] pr-1">
                  Please select if you're an Individual or Business
                  Entity/Company
                </span>
                <Select
                  style={{
                    height: "35px",
                    paddingTop: "5px",
                  }}
                  placeholder="Choose business organization type"
                  value={form.businessType}
                  className="my_form text-black   max-w-[600px] w-full md:w-[300px]  mr-auto "
                  radius="lg"
                  onChange={(e) => {
                    setForm({
                      type: "businessType-change",
                      payload: e.target.value,
                    });
                  }}
                >
                  <SelectItem
                    className=""
                    key={"Individual"}
                    value={"Individual"}
                  >
                    Individual
                  </SelectItem>
                  <SelectItem
                    className=" "
                    key={"Registered business company"}
                    value={"Registered business company"}
                  >
                    Registered business company
                  </SelectItem>
                </Select>
              </div>
              <div className="my_states my_form flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold w-full  max-w-[300px] pr-1">
                  Choose your state
                </span>
                <Select
                  style={{
                    height: "35px",
                    paddingTop: "5px",
                    background: "white",
                  }}
                  scrollShadowProps={{
                    isEnabled: false,
                  }}
                  placeholder="Choose your state"
                  value={form.state}
                  className=" text-black  max-w-[600px] w-full md:w-[300px]  mr-auto "
                  radius="lg"
                  onChange={(e) => {
                    setForm({
                      type: "state-change",
                      payload: e.target.value,
                    });
                  }}
                >
                  {states.map((state) => (
                    <SelectItem
                      className="bg-white "
                      key={state}
                      value={state}
                      style={{
                        background: "white",
                      }}
                    >
                      {state}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Account Farmer First and Last Name
                </span>
                <MyInput
                  value={form.accountManagerName}
                  placeholder="John doe"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px] "
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "accountManagerName-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Account Farmer phone number
                </span>
                <MyInput
                  value={form.accountManagerPhoneNumber}
                  placeholder="09012345678"
                  type="number"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    marginLeft: "auto",
                    padding: 10,
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "accountManagerPhoneNumber-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Additional phone number
                </span>
                <MyInput
                  value={form.phoneNumber}
                  placeholder="09012345678"
                  type="number"
                  isRequired
                  radius="md"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                  }}
                  className="my_form text-black py-2 max-w-[600px] w-full md:w-[300px]"
                  labelPlacement="outside-left"
                  onChange={(e) => {
                    setForm({
                      type: "phoneNumber-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>
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
              <div className="flex gap max-w-[600px] flex-col lg:flex-row justify-between lg:items-center w-full">
                <span className="font-semibold lg:text-right pr-1">
                  Re-type Password
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
                      type: "retypePassword-change",
                      payload: e.target.value,
                    });
                  }}
                />
              </div>

              {passwordError && (
                <div className="text-red-500">{passwordError}</div>
              )}
              <div className="w-full mx-auto max-w-[600px] py-5">
                <Checkbox
                  isSelected={hasReadContract}
                  onValueChange={() => {
                    setHasReadContract(!hasReadContract);
                  }}
                  className="mr-auto"
                  color="primary"
                >
                  I have read and accepted the kasuwa e-contract.{" "}
                </Checkbox>
              </div>

              <div className="row flex">
                Have an account already?{" "}
                <Link href={"sellerLogin"}>
                  <h1 className="text-[#A46E05BD] ml-2">Login here</h1>
                </Link>
              </div>

              {contractError && (
                <div className="text-red-500">{contractError}</div>
              )}
              <div className="w-full mx-auto max-w-[600px] py-5 flex px-6">
                <Button
                  type="submit"
                  className="bg-[#A46E05BD] p-2 px-3 text-white rounded-md m-0 ml-auto"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
