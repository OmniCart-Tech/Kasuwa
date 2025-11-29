import React, { useEffect, useContext, useState, useCallback } from "react";
import { AppContext } from "@/utils/AppContext";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import Bookmark from "@/components/bookmark";
import ProductCard from "@/components/productCard";
import ProductSkeletonLoader from "@/components/ProductSkeletonLoader";

interface ProductInterface {
  images: any;
  name: string;
  description: string;
  originalPrice: string;
  stock: string;
  category: string;
}

export default function ProductInformation() {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const router = useRouter();
  const { productInfo } = router.query;
  const { addToCart, list, count } = useContext(AppContext);

  const fetchProducts = useCallback(async () => {
    const API_URL = "https://kasuwa-b671.onrender.com";
    try {
      const productData = await fetch(
        `${API_URL}/products/product/${productInfo}`
      );
      const productDataRes = await productData.json();
      setProduct(productDataRes);
      setIsLoading(false); // Set isLoading to false after data is fetched
    } catch (error) {
      setIsLoading(false); // Set isLoading to false on error
    }
  }, [productInfo]);

  useEffect(() => {
    if (router.isReady) {
      fetchProducts();
    }
  }, [productInfo, router.isReady, fetchProducts]);

  const checkStock = () => {
    if (product) {
      if (parseFloat(product.stock) <= 20) {
        return "Low in stock";
      } else if (parseFloat(product.stock) > 20) {
        return "In stock";
      } else if (parseFloat(product.stock) < 1) {
        return "Out of stock";
      }
    }
  };

  return (
    <div>
      {isLoading ? ( // Show skeleton loading component while data is being fetched
       <ProductSkeletonLoader/>
      ) : product ? (
        <div className="py-8">
          <div className="bg-transparent sm:w-[90%] w-full flex flex-col gap-6 shadow-none rounded-none mx-auto px-6">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 w-full sm:p-8 p-3 bg-white">
              <Image
                className="sm:w-[200px] h-[200px] w-full rounded"
                src={product.images[0].url}
                alt={`${product.name}`}
              ></Image>
              <div>
                <div className="flex flex-col gap-2 pb-4">
                  <div className="flex flex-wrap gap-1 justify-end items-center">
                    <h1 className="font-semibold text-xl">{product.name}</h1>
                    <Button
                      style={{
                        background: "transparent",
                        marginLeft: "auto",
                        width: "fit",
                        padding: "4px",
                        borderRadius: "23px",
                        minWidth: "fit-content",
                      }}
                      startContent={
                        <Bookmark title={product.name} item={product} />
                      }
                    ></Button>
                  </div>
                  <p>₦{parseFloat(product.originalPrice).toLocaleString()}</p>
                  <span>{checkStock()}</span>
                </div>
                <div>
                  <Button
                    radius="none"
                    className="flex gap-2 w-full px-3 bg-[#38B419] text-white py-2 rounded"
                    onClick={() => {
                      addToCart(product, 1);
                    }}
                  >
                    
                    <span>Add to cart</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-white sm:p-8 p-3">
              <h2 className="text-2xl font-semibold mb-2">Products Details</h2>
              <div>
                <p>{product.description}</p> 
              </div>
             
            </div>
          </div>
<div className="max-w-[1280px] px-6 mx-auto py-6">
  <span className="font-semibold text-xl">
    RELATED PRODUCTS
  </span>
</div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] justify-between w-full gap-x-[1.50rem] gap-y-4  max-w-[1280px] px-6 py-8 pt-3 mx-auto">
            {list &&
              list
                .filter(
                  (item: { category: string }) =>
                    item.category === product.category
                )
                .map(
                  (
                    items: {
                      name: string;
                      images: any;
                      originalPrice: string;
                      saleScale: string;
                      title: string;
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
                )}
          </div>
        </div>
      ) : (
        <div className="min-h-[50vh] h-full flex flex-col justify-center items-center text-red-500">
          <p>No product data available.</p>{" "}
        </div> // Handle the case where no product data is available
      )}
    </div>
  );
}
