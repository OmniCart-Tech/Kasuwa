// million-ignore
import {
  Button,
  Card,
  Input,
  Select,
  SelectItem,
  Spacer,
  Textarea,
  Spinner,
} from "@nextui-org/react";
import React, { useContext, useReducer, useState, useEffect } from "react";
import bag from "public/bag.svg";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import uploadIcon from "../../../public/upload.svg";
import "../../../app/form style.css";
import axios from "axios";
import { AppContext } from "@/utils/AppContext";

//interface for form
interface reducerInterface {
  image: any;
  nameOfProduct: string;
  salePrice: string;
  originalPrice: string;
  quantityAvailable: string;
  productDescription: string;
  productCategory: string;
  subCategory: string;
}
//interface for action in reducer function
interface actionInterface {
  payload: any;
  type: string;
}

const categories = [
  "Dairy products",
  "Legumes",
  "Tubers",
  "Grains",
  "Livestock",
  "Vegetables",
  "Fertilizers",
];
const API_URL = "https://kasuwa-b671.onrender.com";

export default function AddProduct() {
  const [productExists, setProductExists] = useState(false);
  const [loading, setLoading] = useState("idle");
  const [form, setForm] = useReducer(reducer, {
    image: null,
    nameOfProduct: "",
    salePrice: "",
    originalPrice: "",
    quantityAvailable: "",
    productDescription: "",
    productCategory: "",
    subCategory: "",
  });
  const context = useContext(AppContext);
  const setNotificationAction = context?.setNotificationAction;
  const showNotification = context?.showNotification;
  
  // Ensure this only renders on client side
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }

  const Loader = () => {
    if (loading === "idle") {
      return <p>Add product</p>;
    } else if (loading === "loading") {
      return (
        <div className="flex gap-2 justify-center items-center">
          <Spinner color="default" />
          <p>Adding product</p>
        </div>
      );
    } else if (loading === "failed") {
      return <p>retry</p>;
    }
    return null;
  };

  //reducer function for handling state changes for form
  function reducer(
    state: reducerInterface,
    action: actionInterface
  ): reducerInterface {
    switch (action.type) {
      case "image-change":
        return { ...state, image: action.payload };
      case "nameOfProduct-change":
        return { ...state, nameOfProduct: action.payload };
      case "salePrice-change":
        return { ...state, salePrice: action.payload };
      case "originalPrice-change":
        return { ...state, originalPrice: action.payload };
      case "quantityAvailable-change":
        return { ...state, quantityAvailable: action.payload };
      case "productDescription-change":
        return { ...state, productDescription: action.payload };
      case "productCategory-change":
        return { ...state, productCategory: action.payload };
      case "subCategory-change":
        return { ...state, subCategory: action.payload };
      default:
        return { ...state };
    }
  }

  const AddProduct = async () => {
    setLoading("loading");
    try {
      const formData = new FormData();
      formData.append("name", form.nameOfProduct);
      formData.append("description", form.productDescription);
      formData.append("category", form.productCategory);
      formData.append("tags", "tag 1");
      formData.append("stock", form.quantityAvailable);
      formData.append(
        "discountPrice",
        (parseFloat(form.originalPrice) - parseFloat(form.salePrice)).toString()
      );
      formData.append("originalPrice", form.salePrice);
      formData.append("images", form.image);

      // Use Axios to make the POST request
      const addProductRes = await axios.post(
        `${API_URL}/products/addProduct`,
        formData,
        {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
          maxBodyLength: Infinity,
          maxContentLength: Infinity,
        }
      );
      // Handle the response, e.g., show success message or perform other actions
     
      if (addProductRes.status === 200) {
        showNotification(form.nameOfProduct);
        setNotificationAction("added to kasuwa");
        setLoading("idle");
        setForm({
          type: "image-change",
          payload: null,
        });
        setForm({
          type: "nameOfProduct-change",
          payload: "",
        });
        setForm({
          type: "salePrice-change",
          payload: "",
        });
        setForm({
          type: "originalPrice-change",
          payload: "",
        });
        setForm({
          type: "quantityAvailable-change",
          payload: "",
        });
        setForm({
          type: "productDescription-change",
          payload: "",
        });
        setForm({
          type: "productCategory-change",
          payload: "",
        });
        setForm({
          type: "subCategory-change",
          payload: "",
        });      
        
      }
      if (addProductRes.status === 409) {
        setProductExists(true);
      setLoading("failed");
    }
  } catch (error) {
    setLoading("failed");
  }
  };
  // const deleteId=async()=>{
  //   try{
  //   axios.delete(`${API_URL}/products/product/6536aad486c350c521aee891`)
  //   }
  //   catch(error){
  //   console.log(error);
  //   }
    
  //     }
  //     useEffect(()=>{
  //     deleteId()
  //   })
  return (
    <div>
      <div
        className="px-6 gap-4"
        style={{
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div className="w-full flex flex-col px-2 sm:px-10 pt-6 pb-6 gap-[20px]">
            <Card className=" mt-6 h-[100px] px-6 sm:px-10 pt-6">
              <div className="">
                <div className="flex items-center">
                  <Image
                    src={bag}
                    alt="logo"
                    width={35}
                    height={45}
                    className="mr-2"
                  />
                  <h1 className="font-bold text-2xl">Add Products</h1>
                </div>
                <Spacer y={2} />
                <Spacer y={20} />
              </div>
            </Card>
            <form
              className="flex flex-col gap-8 sm:px-4 border border-black py-6 rounded-lg"
              onSubmit={(e) => {
                e.preventDefault();
                AddProduct();
              }}
            >
              <div className="px-6">
                <span className="text-xl font-semibold">Product Details</span>
                <p>Basic Product Details</p>
              </div>
              <div className="flex flex-col">
                <div className="px-6 font-semibold pb-2">
                  <span>Images</span>
                  <br />
                  <p className="text-sm font-normal">
                    Your image needs to be at least 300×300 pixels, preferably a
                    square image
                  </p>
                </div>
                <Input
                  isRequired
                  aria-label="Add Image"
                  startContent={
                    <Image
                      src={uploadIcon}
                      alt="logo"
                      width={35}
                      height={45}
                      className="mr-2"
                    />
                  }
                  className="fileInput border px-6 shadow-none"
                  type="file"
                  multiple
                  label={""}
                  labelPlacement="outside"
                  accept=".png,.gif, .jpeg,.svg,"
                  placeholder="Drag and drop your product images or Browse"
                  
                  onChange={(e) => {
                    setForm({
                      type: "image-change",
                      payload: e.target.files?.[0],
                    });
                  }}
                ></Input>
                <div>
                  <div className="mt-4 text-center gap-2 px-6 flex flex-wrap">
                    {form.image && (
                      <div className="mt-4 text-center gap-2 px-6 flex flex-wrap">
                        {form.image &&
                          
                              <div className="w-fit">
                                <Image
                                  src={URL.createObjectURL(form.image)}
                                  alt={`Selected Image`}
                                  className="w-[150px] h-[150px]"
                                  width={100}
                                  height={100}
                                />
                              </div>
                          }
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Input
                isRequired
                aria-label="Name of Product"
                name="nameOfProduct"
                placeholder="Name of Product"
                label="Name of Product"
                labelPlacement="outside"
                className="p-0 myProductInput px-6"
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "7px",
                  width: "100%",
                }}
                value={form.nameOfProduct}
                onChange={(e) => {
                  setForm({
                    type: "nameOfProduct-change",
                    payload: e.target.value,
                  });
                }}
              ></Input>
              <div className="flex flex-col md:flex-row">
                <Input
                  isRequired
                  aria-label="Sale Price"
                  name="salePrice"
                  type="number"
                  label="Sale Price (NGN)"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  value={form.salePrice}
                  onChange={(e) => {
                    setForm({
                      type: "salePrice-change",
                      payload: e.target.value,
                    });
                  }}
                ></Input>
                <Input
                  isRequired
                  aria-label="Original Price"
                  name="originalPrice"
                  type="number"
                  label="Original Price (NGN)"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  value={form.originalPrice}
                  onChange={(e) => {
                    setForm({
                      type: "originalPrice-change",
                      payload: e.target.value,
                    });
                  }}
                ></Input>
                <Input
                  isRequired
                  aria-label="Quantity Available"
                  name="quantityAvailable"
                  type="number"
                  label="Quantity Available"
                  labelPlacement="outside"
                  className="p-0 myProductInput px-6"
                  style={{
                    border: "1px solid black",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderRadius: "7px",
                    width: "100%",
                  }}
                  placeholder="0"
                  value={form.quantityAvailable}
                  onChange={(e) => {
                    setForm({
                      type: "quantityAvailable-change",
                      payload: e.target.value,
                    });
                  }}
                ></Input>
              </div>
              <Textarea
                aria-label="Product Description"
                name="productDescription"
                label="Product Description"
                labelPlacement="outside"
                className="myProductInput productDescriptionInput px-6 rounded-md"
                style={{
                  border: "1px solid black",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "100%",
                  overflow: "auto",
                }}
                radius="md"
                placeholder={"insert text here..."}
                value={form.productDescription}
                onChange={(e) => {
                  setForm({
                    type: "productDescription-change",
                    payload: e.target.value,
                  });
                }}
              ></Textarea>
              <div className="px-6 my_states">
                <Select
                  aria-label="Choose Product Category"
                  style={{
                    height: "35px",
                    paddingTop: "5px",
                    background: "white",
                    width: "100%",
                  }}
                  scrollShadowProps={{
                    isEnabled: false,
                  }}
                  placeholder="Choose the product category"
                  value={form.productCategory}
                  className="text-black bg-white w-full mr-auto border border-black py-1 pb-0 rounded-md"
                  radius="lg"
                  onChange={(e) => {
                    setForm({
                      type: "productCategory-change",
                      payload: e.target.value,
                    });
                  }}
                >
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              {productExists && (
                <div className="px-6 ">
                  <p className="text-red-500">Product already exists</p>
                </div>
              )}
              <div className="px-6 mx-auto w-full flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#A46E05BD] rounded-md px-3 w-[200px] py-[7px] ml-auto text-white"
                >
                  {Loader()}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
