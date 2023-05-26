import { Button, Spacer } from "@nextui-org/react";
import React from "react";

const ForgotPasswordForm: React.FC = () => {
  const handleSignUp = () => {
    // Handle form submission 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-center font-semibold text-3xl">Reset Password</h2>
        <div className="my-4">
          <form className="w-[500px] mt-5" onSubmit={handleSignUp}>

          <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="border border-[#A46E05] rounded h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmpassword" className="block mb-2">
                Confirm Password
              </label>
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                required
                className="border border-[#A46E05] rounded h-12 px-3 w-full focus:outline-none focus:border-[#A46E05]"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#A46E05] text-white rounded h-12 w-full"
            >
              Proceed
            </Button>
          </form>
        </div>

        <Spacer y={2} />

        <div className="text-center mt-5">
          <p>
            Don't have an account?
            <a href="#" className="text-[#38B419]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
