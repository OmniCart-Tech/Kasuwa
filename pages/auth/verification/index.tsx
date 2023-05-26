import { Button, Spacer } from "@nextui-org/react";
import React, { useState } from "react";

const VerificationForm = () => {
  const [verificationCodes, setVerificationCodes] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleChange = (index: number, value: string) => {
    const newCodes = [...verificationCodes];
    newCodes[index] = value;
    setVerificationCodes(newCodes);
  };

  const handleSignUp = () => {
    verificationCodes.join("");
    // Verification code processing
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-center font-semibold text-2xl mb-4">
        Enter Verification Code
      </h2>
      <div className="my-4">
        <form className="w-[500px] mt-5" onSubmit={handleSignUp}>
          <div className="mb-6 flex justify-center">
            {verificationCodes.map((code, index) => (
              <input
                key={index}
                id={`verification-${index}`}
                name={`verification-${index}`}
                type="text"
                required
                maxLength={1}
                value={code}
                onChange={(e) => handleChange(index, e.target.value)}
                className="border border-[#A46E05] rounded h-16 px-3 w-16 text-center ml-6 focus:outline-none focus:border-[#A46E05]"
              />
            ))}
          </div>
          <Spacer y={4} />
          <p className="text-center">
            Didn't receive a code?
            <a href="#" className="text-[#38B419]">
              Resend
            </a>
          </p>
          <Spacer y={4} />
          <Button
            type="submit"
            className="bg-[#A46E05] text-white rounded h-12 w-full"
          >
            Proceed
          </Button>
        </form>
      </div>

      <Spacer y={2} />
    </div>
  );
};

export default VerificationForm;
