import { useState, ChangeEvent } from "react";
import { FormEvent } from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/heroimg.svg";
import { Link, useNavigate } from "react-router-dom";
import eye from "../assets/eye.png";
import axios from "axios";
import { Loader } from "@mantine/core";
import { base_url } from "../../types";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toggleType, setToggleType] = useState<"password" | "text">("password");
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const toggle = () => {
    if (toggleType === "password") {
      return setToggleType("text");
    }
    setToggleType("password");
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/auth/contact_verification`,
        userData
      );
      if (data.code !== 200) {
        setMessage(data.message);
      }
      if (data.code === 200) {
        sessionStorage.setItem("authSignUp", JSON.stringify(userData));
        navigate("/signup/verify-otp");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section className="bg-[#f4f4f4] xl:p-8 h-screen">
      <div className="xl:grid xl:grid-cols-2 mx-auto h-full">
        <div className="xl:pt-4 xl:pb-4">
          <div className=" mx-auto h-screen xl:h-full bg-[#ffffff] px-4 sm:px-[10%] md:px-[20%] lg:w-[] xl:px-[16%] xl:w-full">
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
                  Welcome to the admin dashboard{" "}
                </h1>
                <p className="text-[#999999] leading-6">
                  Sign up to Stackivy’s admin dashboard and start putting things
                  right
                </p>
              </div>
              <form className="mt-7" onSubmit={handleSubmit}>
                <label htmlFor="" className="flex flex-col gap-1 mb-4">
                  <p>First Name</p>
                  <input
                    type="text"
                    name="first_name"
                    className="w-full outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter First Name"
                    required
                    onChange={handleFormChange}
                  />
                </label>

                <label htmlFor="" className="flex flex-col gap-1 mb-4">
                  <p>Last Name</p>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter Last Name"
                    onChange={handleFormChange}
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1 mb-4">
                  <p>Phone Number</p>
                  <input
                    type="number"
                    name="phone"
                    required
                    className="w-full outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter Phone Number"
                    onChange={handleFormChange}
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-1 mb-4">
                  <p>Email</p>

                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter Email"
                    onChange={handleFormChange}
                  />
                </label>
                <label htmlFor="" className="relative flex flex-col gap-1 mb-4">
                  <p>Password</p>

                  <input
                    type={toggleType}
                    name="password"
                    id="pass"
                    required
                    className="w-full  outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter Password"
                    onChange={handleFormChange}
                  />
                  <img
                    src={eye}
                    className="w-4 h-4 absolute right-7 top-[45px] lg:top-[52px] cursor-pointer"
                    onClick={toggle}
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
                    "Create Account"
                  )}
                </button>
              </form>
              <p className="leading-[22px] mt-2 font-normal text-center">
                Already have an account?{" "}
                <span className="text-[#116B89]">
                  <Link to={"/"}>Sign in</Link>
                </span>
              </p>
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

export default Signup;
