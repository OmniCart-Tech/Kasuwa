import { Card, Spacer } from "@nextui-org/react";
import React from "react";
import Footer from "@/components/footer";
import star from "public/star.svg";
import Image from "next/image";
import Sidebar from "@/components/sidebar";

const Reviews: React.FC = () => {
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
          <Card className="mt-10" style={{ flex: 1 }}>
            <div className="p-4">
              <div className="flex items-center">
                <Image
                  src={star}
                  alt="logo"
                  width={35}
                  height={45}
                  className="mr-2"
                />
                <h1 className="font-bold text-2xl">Reviews</h1>
              </div>
              <Spacer y={2} />
            </div>

            <div className="flex justify-center items-center h-96 text-gray-400">
              You have no reviews at the moment. Reviews will appear here when
              you have a review.
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
