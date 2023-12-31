import { FormEvent, useState } from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/heroimg.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../types";
import { Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleReset = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setisLoading(true);
      const { data } = await axios.get(
        `${base_url}/api/v1/stackivy/admin/auth/forgot_password/${email}`
      );
      if (data.code === 200) {
        navigate(`/forgot-password/verify-otp?email=${email}`);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
    } finally {
      setisLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section className="bg-[#f4f4f4] xl:p-8 h-screen">
      <div className="xl:grid xl:grid-cols-2 mx-auto h-full">
        <div className="xl:pt-4 xl:pb-4">
          <div className="mx-auto h-screen xl:h-full bg-[#ffffff] px-4 sm:px-[10%] md:px-[20%] lg:w-[] xl:px-[16%] xl:w-full">
            <header className="h-[140px] xl:pt-[50px] flex items-center">
              <nav>
                <Link to={"/"}>
                  <img src={logo} alt="stackivy logo" />
                </Link>
              </nav>
            </header>

            {/* hero */}
            <div>
              <div className="mt-6">
                <h1 className="text-[#116B89] font-medium text-[20px] leading-6 mb-3">
                  Forgot password?
                </h1>
                <p className="text-[#999999] leading-6">
                  No worries, we’ll send you reset instructions
                </p>
              </div>
              <form className="mt-7" onSubmit={handleReset}>
                <label htmlFor="" className="flex flex-col gap-1 mb-4">
                  <p>Email</p>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter Email"
                  />
                </label>

                <p className="text-center text-red-500 mt-3 text-[14px]">
                  {message}
                </p>
                <button
                  disabled={isLoading}
                  className={`${
                    isLoading ? "bg-white" : "bg-[#116B89] hover:bg-[#0E5971] "
                  } mb-4  h-[60px] items-center p-4 lg:p-5 w-full flex justify-center text-white rounded-full text-[15px] leading-[22px] font-medium mt-7  transition`}
                >
                  {isLoading ? (
                    <Loader size={"lg"} variant="dots" color="#116B89" />
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden xl:block max-h-screen overflow-hidden">
          <img
            src={hero}
            alt="stack ivy hero img"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Forgotpassword;
