
"use client";

import { Card, Spacer } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck, faWallet } from "@fortawesome/free-solid-svg-icons";

const Account: React.FC = () => {

  const userDetails = typeof window !== "undefined" ? window.localStorage.getItem("user") : null;
  const user = userDetails ? JSON.parse(userDetails) : null;

  return (
    <div >
      <div
        className="items-center justify-center"
        style={{
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 3%",
        }}
      >
        <Card>
          <div className="bg-white px-6 py-4 mt-14 rounded-xl">
            <div className="my-4">
              <h1>Account Overview</h1>
              <hr className="bg-gray-400 w-full mt-4 " />
            </div>
            <Spacer y={2} />

            <div className="flex flex-wrap mt-6">
              <div className="w-full md:w-1/2 px-4">
                <div className="border  p-4 rounded-xl h-48 mb-4">
                  <p>Account Details</p>
                  <hr className="bg-gray-400 w-full mt-4 " />

                  {user && (
                    <>
                      <h1 className="mt-3">{user.first_name}</h1>
                      <p className="font-light text-gray-400 ">{user.email}</p>
                    </>
                  )}

                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="border p-4 h-48 rounded-xl mb-4">
                  <div className="flex justify-between">
                    <p>Address</p>
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="w-4"
                      color="#A46E05"
                    />
                  </div>
                  <hr className="bg-gray-400 w-full mt-4 " />
                  {user && (
                    <>
                      <h1 className="mt-3">Your default shipping Address</h1>
                      <p className="font-light text-gray-400 text-sm mt max-w-[350px] ">
                        {user.location}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="border p-4 h-48 rounded-xl mb-4">
                  <p>STORE CREDIT BALANCE</p>
                  <hr className="bg-gray-400 w-full mt-4 " />

                  {user && (
                    <>
                      <h1 className="mt-3">Available Store Details</h1>
                      <div className="flex mt-1 items-center">
                        <FontAwesomeIcon
                          icon={faWallet}
                          className="text-4xl mr-2 w-7"
                          color="#A46E05"
                        />
                        <h1 className="">₦0.00</h1>
                      </div>
                    </>
                  )}

               
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="border p-4 h-48 rounded-xl mb-4">
                  <div className="flex justify-between">
                    <p>Newsletter Preference</p>

                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="w-5"
                      color="#A46E05"
                    />
                  </div>
                  <hr className="bg-gray-400 w-full mt-4 " />
                  {user && (
                    <>
                      <h1 className="mt-3">You are currently subscribed</h1>
                      <div className="flex mt-1">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-gray-500 mr-3 w-5"
                        />
                        <p className="font-light text-gray-400 text-sm mt ">
                          New Offers
                        </p>
                      </div>
                      <div className="flex mt-1">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-gray-500 mr-3 w-5"
                        />
                        <p className="font-light text-gray-400 text-sm mt ">
                          Daily Newsletter
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Account;
