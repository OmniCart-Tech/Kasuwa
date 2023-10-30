import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import Check from "public/check.svg";
import Image from "next/image";

const PasswordResetSuccess: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
        <Image src={Check} alt="Check" width={100} height={100} />
      <h2 className="text-center font-semibold text-2xl mb-4">Password Reset Successful</h2>
      <p className="text-center text-gray-600">
        Your password has been successfully reset. You can now login with your new password.
      </p>
      <Spacer y={4} />
      <Button
        href="/login"
        className="bg-[#A46E05] text-white rounded h-12 w-48"
      >
        Login
      </Button>
    </div>
  );
};

export default PasswordResetSuccess;
