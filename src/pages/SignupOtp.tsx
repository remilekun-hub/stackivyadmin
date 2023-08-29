import { useState, useEffect } from "react";
import { FormEvent } from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/heroimg.svg";
import { Link } from "react-router-dom";
import OtpInput from "react18-input-otp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupOtp() {
  const [userEmail, setUserEmail] = useState("");
  let parsedOTP: number;
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUserEmail(email);
    }
  }, [userEmail]);

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      parsedOTP = parseInt(otp);

      const { data } = await axios.post(
        "https://stackivy-admin-be.onrender.com/api/v1/stackivy/admin/auth/register",
        { email: userEmail, otp: parsedOTP }
      );
      console.log({ data });
      if (data.code === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert("finished");
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
                  OTP Verification
                </h1>
                <p className="text-[#999999] leading-6">
                  We sent you an OTP code to this email{" "}
                  {userEmail ? (
                    <span className="text-black font-semibold">
                      {userEmail}
                    </span>
                  ) : (
                    <span className="text-black font-semibold">
                      AyodeleVincentOlagunju888@gmail.com{" "}
                    </span>
                  )}
                </p>
              </div>

              <form className="mt-7" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={7}
                    inputStyle={"otp"}
                  />
                </div>
                <p>
                  Didn’t get an OTP code?{" "}
                  <span className="text-[#116B89] font-medium">RESEND</span>
                </p>

                <button className="mb-4  bg-[#116B89] p-4 lg:p-5 w-full text-white rounded-full text-[15px] leading-[22px] font-medium mt-7 hover:bg-[#0E5971] focus:bg-[#0E5971] transition">
                  Sign in
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

export default SignupOtp;
