import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import { Link } from "react-router-dom";
import WebinarCreator from "@/components/WebinarCreator";

function CreateWebinars() {
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Webinars</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link to="/webinars" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Add New Webinar</h1>
            </Link>
            <button className="bg-[#116B89] px-6 text-white py-2 rounded-full">
              Push To Live
            </button>
          </div>
          <div className="px-10 py-8">
            <WebinarCreator />
          </div>
        </div>
      </main>
    </section>
  );
}

export default CreateWebinars;
