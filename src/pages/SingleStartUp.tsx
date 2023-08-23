import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import backbtn from "../assets/arrow-left.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import doc from "../assets/document.png";
import cvgrp from "../assets/cvgrp.png";

function SingleStartUp() {
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
            <Link to="/startup" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Details</h1>
            </Link>
          </div>
          <div className="p-7 px-10">
            <Tabs defaultValue="personal" className="">
              <TabsList className="flex gap-10 justify-start relative">
                <TabsTrigger
                  value="personal"
                  className="text-[14px] py-4 leading-6 px-0"
                >
                  Personal Details
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="text-[14px]  py-4 leading-6 px-0"
                >
                  Startup Details
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className=" text-[14px] py-4 leading-6 px-0"
                >
                  Other Details
                </TabsTrigger>
              </TabsList>
              <div className="pt-6 mt-5 px-2">
                <TabsContent value="personal">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Name
                      </h1>
                      <h2 className="font-bold">Michael Opara Ndukwe Dennis</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Linkedin Profile
                      </h1>
                      <h2 className="font-bold text-[#2563EB] break-words">
                        https://www.linkein.com/in/michael opa....
                      </h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Contact Email
                      </h1>
                      <h2 className="font-bold text-[#2563EB] break-words">
                        Michaelopara24@gmail.com
                      </h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Additional Email
                      </h1>
                      <h2 className="font-bold text-[#2563EB] break-words">
                        Michaelopara24@gmail.com
                      </h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Phone Number
                      </h1>
                      <h2 className="font-bold text-black">081 6745 6357</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Whatsapp Number
                      </h1>
                      <h2 className="font-bold text-black">081 6745 6357</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Position
                      </h1>
                      <h2 className="font-bold text-black">Manager</h2>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="details">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Startup Name
                      </h1>
                      <h2 className="font-bold">Transcorp LTD</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Startup Website
                      </h1>
                      <h2 className="font-bold text-[#2563EB] break-words">
                        https://www.linkein.com/in/michael opa....
                      </h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Startup Stage
                      </h1>
                      <h2 className="font-bold">Level 1</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Startup Country
                      </h1>
                      <div className="flex gap-3">
                        <span></span>
                        <h2 className="font-bold">Nigeria</h2>
                      </div>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Needed
                      </h1>

                      <h2 className="font-bold">N 1,000,000,</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Needed for 3 years
                      </h1>

                      <h2 className="font-bold">N 5,000, 000</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Startup Industry
                      </h1>
                      <h2 className="font-bold">Technology</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Cost for Warm Introductions
                      </h1>

                      <h2 className="font-bold">N 5,000, 000</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Priority
                      </h1>

                      <h2 className="font-bold">High</h2>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="other">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Legal Advice
                      </h1>
                      <h2 className="font-bold">Yes</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Assist in Negotiation
                      </h1>
                      <h2 className="font-bold">Yes</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Presence in Negotiation Phase
                      </h1>
                      <h2 className="font-bold">Yes</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Invester by Founders So Far
                      </h1>
                      <h2 className="font-bold">N 1,000,000,</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Invested by external investors So Far
                      </h1>
                      <h2 className="font-bold">N 1,000,000,</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Pitch Deck
                      </h1>
                      <div className="flex gap-2">
                        <img src={doc} className="w-6 h-6" />
                        <h2 className="font-bold">My pitchdeck.docx</h2>
                      </div>
                      <img
                        src={cvgrp}
                        className="w-[24px] h-[24px] absolute right-6 top-7"
                      />
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Business Plan
                      </h1>
                      <div className="flex gap-2">
                        <img src={doc} className="w-6 h-6" />
                        <h2 className="font-bold">My businessplan.docx</h2>
                      </div>
                      <img
                        src={cvgrp}
                        className="w-[24px] h-[24px] absolute right-6 top-7"
                      />
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Needed
                      </h1>
                      <h2 className="font-bold">N 1,000,000,</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Besy way to Follow Up
                      </h1>
                      <h2 className="font-bold">Email</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        How Did you hear about us
                      </h1>
                      <h2 className="font-bold">From a Friend</h2>
                    </div>
                    <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                      <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                        Amount Needed For 3years
                      </h1>
                      <h2 className="font-bold">N 5,000, 000</h2>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SingleStartUp;
