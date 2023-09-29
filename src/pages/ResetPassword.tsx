import logo from "../assets/logo.svg";
import hero from "../assets/heroimg.svg";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import eye from "../assets/eye.png";
import { Loader } from "@mantine/core";
import { FormEvent, useState } from "react";
import axios from "axios";
import { base_url } from "../../types";

function ResetPassword() {
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const params = useSearchParams();
  const email = params[0].get("email");
  const access = params[0].get("access");
  const navigate = useNavigate();

  const [toggleType1, setToggleType1] = useState<"text" | "password">(
    "password"
  );
  const [toggleType2, setToggleType2] = useState<"text" | "password">(
    "password"
  );

  const toggle1 = () => {
    if (toggleType1 === "password") {
      return setToggleType1("text");
    }
    setToggleType1("password");
  };

  const toggle2 = () => {
    if (toggleType2 === "password") {
      return setToggleType2("text");
    }
    setToggleType2("password");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password1 != password2) {
      setMessage("password do not match");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    if (!email || !access || !password1 || password2) return;
    try {
      setisLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/auth/forgot_password/${email}/${access}`,
        { password: password2 }
      );
      if (data.code === 200) {
        setMessage("password reset successful, signin with new password");
        setTimeout(() => {
          navigate("/");
        }, 3000);
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
                  Enter New Password
                </h1>
                <p className="text-[#999999] leading-6">
                  Enter your new password to access your account
                </p>
              </div>
              <form className="mt-7" onSubmit={handleSubmit}>
                <label htmlFor="" className="flex relative flex-col gap-1 mb-6">
                  <p>New Password</p>

                  <input
                    type={toggleType1}
                    name="password"
                    id="pass"
                    className="w-full  outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Enter New Password"
                    required
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                  <img
                    src={eye}
                    className="w-4 h-4 absolute right-7 top-[45px] lg:top-[52px] cursor-pointer"
                    onClick={toggle1}
                  />
                </label>
                <label htmlFor="" className="relative flex flex-col gap-1 mb-4">
                  <p>Re-enter Password</p>

                  <input
                    type={toggleType2}
                    name="password2"
                    id="pass2"
                    className="w-full  outline-0 px-4 py-3 lg:p-5 border-[#F0F0F0] border-[2px] rounded-[4px]"
                    placeholder="Re-enter Password"
                    required
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  <img
                    src={eye}
                    className="w-4 h-4 absolute right-7 top-[45px] lg:top-[52px] cursor-pointer"
                    onClick={toggle2}
                  />
                </label>

                <p className="text-center text-red-500 my-3 text-[14px]">
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

export default ResetPassword;
