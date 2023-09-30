import { Button, Card, Spacer } from "@nextui-org/react";
import React from "react";
import Footer from "@/components/footer";
import dashboard from "public/dashboard.svg";
import cash from "public/cash.svg";
import coin from "public/coin.svg";
import bag from "public/bag.svg";
import Image from "next/image";
import egg from "public/egg.svg";
import Sidebar from "@/components/sidebar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div
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
        <Card className="mx-auto my-10 w-[85%] md:w-[75%]">
          <div className="p-4">
            <div className="flex items-center">
              <Image
                src={dashboard}
                alt="logo"
                width={35}
                height={45}
                className="mr-2"
              />
              <h1 className="font-bold text-2xl">Seller Dashboard</h1>
            </div>
            <Spacer y={2} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="sm:w-[90%] lg:w-full">
                <div className="bg-white p-4 h-32 rounded-xl flex justify-between items-center">
                  <div className="p-10">
                    <h1 className="text-lg font-bold">TOTAL SALES</h1>
                    <p className="text-gray-400">₦0.00</p>
                  </div>
                  <Image src={coin} alt="logo" />
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white p-4 h-32 rounded-xl flex justify-between items-center">
                  <div className="p-10">
                    <h1 className="text-lg font-bold">TOTAL PRODUCTS</h1>
                    <p className="text-gray-400">₦0.00</p>
                  </div>
                  <Image src={bag} alt="logo" width={70} height={70} />
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white p-4 h-32 rounded-xl flex justify-between items-center">
                  <div className="p-10">
                    <h1 className="text-lg font-bold">LAST PAYMENT</h1>
                    <p className="text-gray-400">₦0.00</p>
                  </div>
                  <Image src={cash} alt="logo" />
                </div>
              </div>
            </div>


            <div className="w-full mt-6 bg-white py-4 flex p-8 items-center justify-between rounded-xl flex-col gap-2 md:flex-row">
              <div className="flex  items-center">
                <Image
                  src={bag}
                  alt="logo"
                  width={50}
                  height={50}
                  className="mr-10"
                />
                <h1 className="text-2xl md:text-center">
                  Jump into Course creation
                </h1>
              </div>
              <Button className="bg-[#A46E05] text-white h-12 w-full md:w-48 md:ml-4 rounded-xl">
                Create Course
              </Button>
            </div>

            <Spacer y={6} />

            <div>
              <h1 className="text-2xl font-medium">Latest Products</h1>
            </div>

            {/* Cards with images, titles, sales, total reviews, and links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
              {/* Card 1 */}
              <Card className="bg-white rounded-xl">
                <div className=" flex items-center justify-center h-52">
                  <Image
                    src={egg}
                    alt="Product 1"
                    className="rounded-xl "
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-400">17 MAR, 2023</p>
                  <h2 className="text-xl font-semibold mt-4">Eggs</h2>
                  <div className="flex justify-between mt-6">
                  <p>Sales:</p>
                  <p>100</p>
                  </div>
                  <div className="flex justify-between">
                  <p>Total Reviews: </p>
                  <p>50</p>
                  </div>
                  <hr className="my-2" />
                  <div className="text-black mt-4 font-bold cursor-pointer">
                    See All Comments
                  </div>
                  <div className="text-black font-bold cursor-pointer">
                    See All Reviews
                  </div>
                  <Spacer y={10} />
                </div>
              </Card>

              {/* Card 2 */}
              <Card className="bg-white rounded-xl">
              <div className=" flex items-center justify-center h-52">
                  <Image
                    src={egg}
                    alt="Product 1"
                    className="rounded-xl "
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-400">17 MAR, 2023</p>
                  <h2 className="text-xl font-semibold mt-4">Eggs</h2>
                  <div className="flex justify-between mt-6">
                  <p>Sales:</p>
                  <p>100</p>
                  </div>
                  <div className="flex justify-between">
                  <p>Total Reviews: </p>
                  <p>50</p>
                  </div>
                  <hr className="my-2" />
                  <div className="text-black mt-4 font-bold cursor-pointer">
                    See All Comments
                  </div>
                  <div className="text-black font-bold cursor-pointer">
                    See All Reviews
                  </div>
                  <Spacer y={10} />
                </div>
              </Card>

              {/* Card 3 */}
              <Card className="bg-white rounded-xl">
              <div className=" flex items-center justify-center h-52">
                  <Image
                    src={egg}
                    alt="Product 1"
                    className="rounded-xl "
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-400">17 MAR, 2023</p>
                  <h2 className="text-xl font-semibold mt-4">Eggs</h2>
                  <div className="flex justify-between mt-6">
                  <p>Sales:</p>
                  <p>100</p>
                  </div>
                  <div className="flex justify-between">
                  <p>Total Reviews: </p>
                  <p>50</p>
                  </div>
                  <hr className="my-2" />
                  <div className="text-black mt-4 font-bold cursor-pointer">
                    See All Comments
                  </div>
                  <div className="text-black font-bold cursor-pointer">
                    See All Reviews
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
