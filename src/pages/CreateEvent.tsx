import { useState, useRef, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import { XCircleIcon } from "lucide-react";

function CreateEvent() {
  const [selectedFile, setSelectedFile] = useState("");
  const filePickerRef = useRef<HTMLInputElement>(null);

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files[0]);
    }
    reader.onload = (r) => {
      if (typeof r.target?.result === "string") {
        setSelectedFile(r.target?.result);
      }
    };
  };
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Events</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link to="/events" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Add New Event</h1>
            </Link>
            <button className="bg-[#116B89] px-6 text-white py-2 rounded-full">
              Push To Live
            </button>
          </div>

          <div className="px-8 pt-10">
            <div className="rounded-[8px] border-[1px] border-[#E5E7EB]">
              <Tabs defaultValue="title" className="py-5 overflow-auto ">
                <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
                  <TabsList className="flex justify-start ">
                    <TabsTrigger
                      value="title"
                      className="text-[14px] py-4 leading-5"
                    >
                      Title
                    </TabsTrigger>
                    <TabsTrigger
                      value="uploads"
                      className="text-[14px] py-4 leading-5"
                    >
                      Uploads
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="px-5">
                  <TabsContent value="title" className="pb-2 pt-2">
                    <input type="text" name="title" className="outline-none mag" />
                  </TabsContent>
                  <TabsContent value="uploads" className="pb-2 pt-3">
                    <div>
                      {selectedFile ? (
                        <div className="w-[350px] h-[350px] relative">
                          <img
                            src={selectedFile}
                            className="w-[350px] h-[350px] object-contain"
                          />
                          <XCircleIcon
                            className="absolute right-[-30px] top-0 cursor-pointer Z-[800] text-[#9CA3AF]"
                            onClick={() => setSelectedFile("")}
                          />
                        </div>
                      ) : (
                        <div className="flex justify-center items-center border-[1px] h-[300px] rounded-[8px] border-dashed border-[#116B89]">
                          <button
                            className="text-[#116B89] font-semibold"
                            onClick={() => {
                              if (filePickerRef && filePickerRef.current) {
                                filePickerRef.current.click();
                              }
                            }}
                          >
                            + Upload Document
                          </button>
                          <input
                            type="file"
                            className="hidden"
                            ref={filePickerRef}
                            onChange={addImageToPost}
                          />
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CreateEvent;
