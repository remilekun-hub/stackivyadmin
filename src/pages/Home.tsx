import { useState, useEffect } from "react";
import DashBox from "../components/DashBox";
import Navbar from "../components/Navbar";
import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import dash4 from "../assets/dash4.png";
import dash5 from "../assets/dash5.png";
// import dash7 from "../assets/dash7.png";
import { DashboardDataType, base_url } from "../../types";
import { userSlice } from "@/Hooks/user";
import axios from "axios";
import toast from "react-hot-toast";
import RecentBlogList from "@/components/RecentBlogList";
import RecentWebinarsList from "@/components/RecentWebinarsList";
import RecentGuidesList from "@/components/RecentGuidesList";
import RecentEventsList from "@/components/RecentEventsList";

function Home() {
  const user = userSlice((state) => state.user);
  const [dashBoardData, setDashBoardData] = useState<DashboardDataType | null>(
    null
  );

  useEffect(() => {
    const controller = new AbortController();
    const getDashBoardData = async () => {
      try {
        toast.loading("Getting Dashboard Data", { id: "dashboard" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/dashboard`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        if (data.code === 200) {
          toast.success("Request Successful", { id: "dashboard" });
          setDashBoardData(data.data);
        }
        if (data.code !== 200) {
          toast.error("coludn't fetch dashboard data", { id: "dashboard" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDashBoardData();
    return () => {
      toast.dismiss("dashboard");
      controller.abort();
    };
  }, []); //eslint-disable-line

  return (
    <section>
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Dashboard</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-[30px]">
            <DashBox
              title="Total quote requested"
              amount={dashBoardData?.total_quote}
              icon={dash1}
            />

            <DashBox
              title="Total startup quote"
              amount={dashBoardData?.total_startup}
              icon={dash2}
            />

            <DashBox
              title="Last posted blog"
              date={dashBoardData?.date_last_post_blog}
              icon={dash4}
            />

            <DashBox
              title="Last posted guides"
              date={dashBoardData?.date_last_post_guide}
              icon={dash4}
            />

            <DashBox
              title="Last posted webinars"
              date={dashBoardData?.date_last_post_webinar}
              icon={dash5}
            />
          </div>

          <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]">
            <RecentBlogList data={dashBoardData?.recent_blogs} />
            <RecentWebinarsList data={dashBoardData?.recent_webinars} />
            <RecentGuidesList data={dashBoardData?.recent_guides} />
            <RecentEventsList data={dashBoardData?.recent_events} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;
