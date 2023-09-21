import { useState } from "react";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import { Link } from "react-router-dom";
import { XCircleIcon, Undo2 } from "lucide-react";
import Modal from "@/components/Modal";

function SingleComplain() {
  const [replyEmail, setReplyEmail] = useState(false);
  const ReplyModal = () => (
    <Modal>
      <div className="bg-white rounded-[16px] w-[756px] mx-auto">
        <div className="flex justify-between items-center p-8 border-b-[1px] border-[#F5F5F5]">
          <p className="font-semibold">Reply Email</p>
          <XCircleIcon
            className="w- h-5 text-[#9CA3AF] cursor-pointer"
            onClick={() => setReplyEmail(false)}
          />
        </div>
        <div className="px-8 py-4">
          <div>
            <h1 className="font-bold mb-8">
              Michael Opara{" "}
              <span className="text-[#9CA3AF] text-[13px] font-normal">{`<MichaelOpara88@gmail.com>`}</span>
            </h1>

            <p className="font-bold mb-5">
              Having Issues Uploading Documents for kyc
            </p>
            <div className="flex flex-col gap-5 text-[#9CA3AF]">
              <p className="">Hello,</p>
              <p>
                I am having issues uploading documents for KYC verification. I
                am getting frustrated already. Please respond ASAP
              </p>
              <p> Thank You</p>
            </div>
          </div>
          <div className="rounded-[16px] border-[1px] border-[#F5F5F5] p-4 mt-8">
            <div className="flex items-center gap-2">
              <Undo2 className="text-[#101828] w-4 h-4" />
              <p className="font-semibold">MichaelOpara88@gmail.com</p>
            </div>
            <textarea
              className="outline-none w-full h-[100px] p-2"
              placeholder="Enter Mail"
            ></textarea>
          </div>
          <div className="mb-7">
            <button className="rounded-full bg-[#116B89] text-white mt-9 px-6 py-3 ml-auto block">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
  return (
    <section>
      {replyEmail && <ReplyModal />}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Support</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link to="/support" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium"> View Complaints</h1>
            </Link>
          </div>
          <div className="p-10">
            <div className="rounded-[16px] border-[1px] border-[#E5E7EB]">
              <div className="p-9">
                <h1 className="font-semibold">
                  Michael Opara -{" "}
                  <span className="text-[#005FEE]">
                    MichaelOpara88@gmail.com{" "}
                  </span>
                </h1>
              </div>
              <div className="p-9">
                <p className="font-semibold">
                  Having Issues Uploading Documents for kyc
                </p>
                <div className="mt-7">
                  <p className="text-[#9CA3AF] mb-6">Hello,</p>
                  <p className="text-[#9CA3AF] mb-6">
                    I tried applying for partnership concerning my business i am
                    currently running, but i am having issues uploading my
                    company,s business profile
                  </p>
                </div>

                <button
                  className="rounded-full bg-[#116B89] text-white mt-9 px-6 py-3"
                  onClick={() => setReplyEmail(true)}
                >
                  Reply Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SingleComplain;
