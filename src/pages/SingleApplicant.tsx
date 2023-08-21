import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import doc from "../assets/document.png";
import cvgrp from "../assets/cvgrp.png";

function SingleApplicant() {
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto min-h-screen bg-white rounded-[16px]">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link
              to="/career/applications"
              className="flex items-center gap-[2px]"
            >
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Details</h1>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11 gap-y-7 pt-[50px] px-8">
            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                First Name
              </h1>
              <h2 className="font-bold">Akande</h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Last Name
              </h1>
              <h2 className="font-bold">Olabode</h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Email
              </h1>
              <h2 className="font-bold text-[#2563EB]">
                Akandeolabode656@gmail.com
              </h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Phone Number
              </h1>
              <h2 className="font-bold ">0816 7878 986</h2>
            </div>

            <div className="px-6 pt-7 pb-10 w-full truncate rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Website/Portfolio Link
              </h1>
              <h2 className="font-bold text-[#2563EB]">
                https://www.linkein.com/in/michael opa....
              </h2>
            </div>

            <div className="px-6 w-full  pt-7 truncate  pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Linkedin Profile Link
              </h1>
              <h2 className="font-bold text-[#2563EB]">
                https://www.linkein.com/in/michael opa....
              </h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Work Type
              </h1>
              <h2 className="font-bold">Remote</h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Work Type
              </h1>
              <h2 className="font-bold">Full Time</h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Able to start immediately
              </h1>
              <h2 className="font-bold">Yes</h2>
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">CV</h1>
              <div className="flex gap-2">
                <img src={doc} className="w-6 h-6" />
                <h2 className="font-bold">My CV.docx</h2>
              </div>
              <img
                src={cvgrp}
                className="w-[24px] h-[24px] absolute right-6 top-7"
              />
            </div>

            <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
              <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                Cover Letter
              </h1>
              <div className="flex gap-2">
                <img src={doc} className="w-6 h-6" />
                <h2 className="font-bold">My Cover Letter.docx</h2>
              </div>
              <img
                src={cvgrp}
                className="w-[24px] h-[24px] absolute right-6 top-7"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SingleApplicant;
