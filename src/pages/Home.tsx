import DashBox from "../components/DashBox";
import Navbar from "../components/Navbar";
import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import dash4 from "../assets/dash4.png";
import dash5 from "../assets/dash5.png";
import { base_url } from "../../types";
import { userSlice } from "@/Hooks/user";
import RecentBlogList from "@/components/RecentBlogList";
import RecentWebinarsList from "@/components/RecentWebinarsList";
import RecentGuidesList from "@/components/RecentGuidesList";
import RecentEventsList from "@/components/RecentEventsList";
import { useFetcher } from "@/util/usefetch";
import Spinner from "@/components/Spinner";
import CustomError from "@/components/CustomError";

function Home() {
  const user = userSlice((state) => state.user);

  const { data, error, isLoading } = useFetcher(
    `${base_url}/api/v1/stackivy/admin/dashboard`,
    user?.token
  );
  return (
    <section>
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Dashboard</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        {isLoading && <Spinner />}
        {error && <CustomError />}
        {data && (
          <div className="max-w-[1500px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-[30px]">
              <DashBox
                title="Total quote requested"
                amount={data.data.total_quote}
                icon={dash1}
              />
              <DashBox
                title="Total startup quote"
                amount={data.data.total_startup}
                icon={dash2}
              />
              <DashBox
                title="Last posted blog"
                date={data.data.date_last_post_blog}
                icon={dash4}
              />
              <DashBox
                title="Last posted guides"
                date={data.data.date_last_post_guide}
                icon={dash4}
              />
              <DashBox
                title="Last posted webinars"
                date={data.data.date_last_post_webinar}
                icon={dash5}
              />
            </div>

            <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]">
              <RecentBlogList data={data.data.recent_blogs} />
              <RecentWebinarsList data={data.data.recent_webinars} />
              <RecentGuidesList data={data.data.recent_guides} />
              <RecentEventsList data={data.data.recent_events} />
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

export default Home;
