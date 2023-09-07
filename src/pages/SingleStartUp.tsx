import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import backbtn from "../assets/arrow-left.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import doc from "../assets/document.png";
import cvgrp from "../assets/cvgrp.png";
import { userSlice } from "@/Hooks/user";
import { StarUpType } from "../../types";
import axios from "axios";

function SingleStartUp() {
  const { id: StartUpId } = useParams();
  const user = userSlice((state) => state.user);
  const [startUp, setStartup] = useState<StarUpType | null>(null);
  useEffect(() => {
    const controller = new AbortController(); // <-- create controller
    const getStartUp = async () => {
      try {
        const { data } = await axios.get(
          `https://stackivy-admin-be.onrender.com/api/v1/stackivy/admin/startup/${StartUpId}`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        console.log({ data });

        if (data.code === 200) {
          setStartup(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getStartUp();

    return () => controller.abort();
  }, []); //eslint-disable-line

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
                    {startUp?.startup_name && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Name
                        </h1>
                        <h2 className="font-bold">{startUp.startup_name}</h2>
                      </div>
                    )}
                    {startUp?.linkedin_profile && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Linkedin Profile
                        </h1>
                        <h2 className="font-bold text-[#2563EB] break-words">
                          {startUp.linkedin_profile}
                        </h2>
                      </div>
                    )}
                    {startUp?.contact_email && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Contact Email
                        </h1>
                        <h2 className="font-bold text-[#2563EB] break-words">
                          {startUp.contact_email}
                        </h2>
                      </div>
                    )}
                    {startUp?.additional_email && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Additional Email
                        </h1>
                        <h2 className="font-bold text-[#2563EB] break-words">
                          {startUp.additional_email}
                        </h2>
                      </div>
                    )}
                    {startUp?.phone && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Phone Number
                        </h1>
                        <h2 className="font-bold text-black">
                          {startUp.phone}
                        </h2>
                      </div>
                    )}
                    {startUp?.whatsapp_phone && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Whatsapp Number
                        </h1>
                        <h2 className="font-bold text-black">
                          {startUp.whatsapp_phone}
                        </h2>
                      </div>
                    )}
                    {startUp?.position && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Position
                        </h1>
                        <h2 className="font-bold text-black">
                          {startUp.position}
                        </h2>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="details">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                    {startUp?.startup_name && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Startup Name
                        </h1>
                        <h2 className="font-bold">{startUp.startup_name}</h2>
                      </div>
                    )}
                    {startUp?.startup_website && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Startup Website
                        </h1>
                        <h2 className="font-bold text-[#2563EB] break-words">
                          {startUp.startup_website}
                        </h2>
                      </div>
                    )}
                    {startUp?.startup_stage && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Startup Stage
                        </h1>
                        <h2 className="font-bold">{startUp.startup_stage}</h2>
                      </div>
                    )}
                    {startUp?.startup_country && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Startup Country
                        </h1>
                        <div className="flex gap-3">
                          <h2 className="font-bold">
                            {startUp.startup_country}
                          </h2>
                        </div>
                      </div>
                    )}
                    {startUp?.amount_needed && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Amount Needed
                        </h1>

                        <h2 className="font-bold">N {startUp.amount_needed}</h2>
                      </div>
                    )}
                    {startUp?.amount_needed_next_three_years && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Amount Needed for 3 years
                        </h1>

                        <h2 className="font-bold">
                          N {startUp.amount_needed_next_three_years}
                        </h2>
                      </div>
                    )}
                    {startUp?.startup_industry && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Startup Industry
                        </h1>
                        <h2 className="font-bold">
                          {startUp.startup_industry}
                        </h2>
                      </div>
                    )}

                    {startUp?.advanced_cost_warm_introductions && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Cost for Warm Introductions
                        </h1>

                        <h2 className="font-bold">
                          N {startUp.advanced_cost_warm_introductions}
                        </h2>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="other">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                    {startUp?.amount_invested_by_founders && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Amount Invested by Founders So Far
                        </h1>
                        <h2 className="font-bold">
                          N {startUp.amount_invested_by_founders}
                        </h2>
                      </div>
                    )}
                    {startUp?.amount_invested_by_external_investors && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Amount Invested by external investors So Far
                        </h1>
                        <h2 className="font-bold">
                          {startUp.amount_invested_by_external_investors}
                        </h2>
                      </div>
                    )}
                    {startUp?.pitch_deck && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Pitch Deck
                        </h1>
                        <div className="flex gap-2">
                          <img src={doc} className="w-6 h-6" />
                          <a
                            href={startUp.pitch_deck.file_url}
                            target="_blank"
                            className="font-bold"
                          >
                            {startUp.pitch_deck.file_name}
                          </a>
                        </div>
                        <img
                          src={cvgrp}
                          className="w-[24px] h-[24px] absolute right-6 top-7"
                        />
                      </div>
                    )}
                    {startUp?.business_plan && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px] relative">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Business Plan
                        </h1>
                        <div className="flex gap-2">
                          <img src={doc} className="w-6 h-6" />
                          <a
                            href={startUp.business_plan.file_url}
                            target="_blank"
                            className="font-bold"
                          >
                            {startUp.business_plan.file_name}
                          </a>
                        </div>
                        <img
                          src={cvgrp}
                          className="w-[24px] h-[24px] absolute right-6 top-7"
                        />
                      </div>
                    )}
                    {startUp?.amount_needed && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Amount Needed
                        </h1>
                        <h2 className="font-bold">N {startUp.amount_needed}</h2>
                      </div>
                    )}
                    {startUp?.best_way_to_follow_up && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          Besy way to Follow Up
                        </h1>
                        <h2 className="font-bold">
                          {startUp.best_way_to_follow_up}
                        </h2>
                      </div>
                    )}
                    {startUp?.how_did_you_hear_about_us && (
                      <div className="px-6 pt-7 pb-10 rounded-[8px] border-[1px] border-[#E5E7EB] h-[120px]">
                        <h1 className="text-[#9CA3AF] mb-2 text-[13px] leading-5">
                          How Did you hear about us
                        </h1>
                        <h2 className="font-bold">
                          {startUp.how_did_you_hear_about_us}
                        </h2>
                      </div>
                    )}
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
