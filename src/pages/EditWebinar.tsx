import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { XIcon, XCircleIcon } from "lucide-react";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import { base_url } from "../../types";
import toast from "react-hot-toast";

function EditWebinar() {
  const user = userSlice((state) => state.user);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState("");
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const params = useSearchParams();
  const [speakerName, setSpeakerName] = useState("");
  const urlSpeaker: string[] = params[0].get("speakers")?.split(",") || [];
  const urlImage = params[0].get("image") || "";

  useEffect(() => {
    setSelectedFile(urlImage);
  }, []); //eslint-disable-line

  const [webinar, setWebinar] = useState({
    Id: params[0].get("id") || "",
    title: params[0].get("title") || "",
    summary: params[0].get("summary") || "",
    webinar_info: {
      date: params[0].get("date") || "",
      time: params[0].get("time") || "",
      location: params[0].get("location") || "",
      speakers: [...urlSpeaker],
    },
  });
  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
    reader.onload = (r) => {
      if (typeof r.target?.result === "string") {
        setSelectedFile(r.target?.result);
      }
    };
  };

  const handleUpdateWebinar = async () => {
    try {
      toast.loading("updating webinar...", { id: "updateWebinar" });
      const form_data = new FormData();
      form_data.append("title", webinar.title);
      form_data.append("summary", webinar.summary);

      form_data.append("webinar_info", JSON.stringify(webinar.webinar_info));
      if (file) {
        form_data.append("image", file);
      }

      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/marketing/webinar/${webinar.Id}`,
        form_data,
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );

      if (!data) {
        toast.error("something went wrong", { id: "updateWebinar" });
      }

      if (data.code === 200) {
        toast.success("webinar updated successfully", { id: "updateWebinar" });
        navigate("/webinars");
        setFile(null);
        setSelectedFile("");
      }
      if (data.code != 200) {
        toast.error("couldn't update webinar...", { id: "updateWebinar" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      toast.dismiss("updateWebinar");
    };
  }, []); //eslint-disable-line

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
              <h1 className="text-[18px] font-medium">Edit Webinar</h1>
            </Link>
            <button
              className="bg-[#116B89] px-6 text-white py-2 rounded-full"
              onClick={handleUpdateWebinar}
            >
              Update Webinar
            </button>
          </div>

          {/* <SingleWebinar /> */}

          <div className="px-10 py-8">
            <div className="rounded-[8px]  border-[1px] border-[#F3F4F6] mb-10">
              <Tabs defaultValue="title" className="py-5 overflow-auto ">
                <div className=" items-center border-b-[1px] border-[#F3F4F6]">
                  <TabsList className="flex gap-2 justify-start ">
                    <TabsTrigger
                      value="title"
                      className="text-[14px] py-4 leading-5"
                    >
                      Title
                    </TabsTrigger>
                    <TabsTrigger
                      value="summary"
                      className="text-[13px] py-4 leading-5"
                    >
                      Summary
                    </TabsTrigger>

                    <TabsTrigger
                      value="info"
                      className="text-[13px] py-4 leading-5"
                    >
                      Webinar Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="Image"
                      className="text-[13px] py-4 leading-5"
                    >
                      Image
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="pt-6 px-5">
                  <TabsContent value="title" className="pb-2">
                    <input
                      type="text"
                      name="title"
                      className="outline-none mag py-2 w-full"
                      placeholder="Enter Title"
                      value={webinar.title}
                      onChange={(e) =>
                        setWebinar({ ...webinar, title: e.target.value })
                      }
                    />
                  </TabsContent>
                  <TabsContent value="summary" className="pb-2">
                    <textarea
                      placeholder="Enter Summary"
                      name="summary"
                      className="w-full outline-none h-[200px]"
                      value={webinar.summary}
                      onChange={(e) =>
                        setWebinar({ ...webinar, summary: e.target.value })
                      }
                    />
                  </TabsContent>
                  <TabsContent value="info" className="pb-2">
                    <div className="grid md:grid-cols-3 gap-10">
                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="date"
                          name="date"
                          value={webinar.webinar_info.date}
                          className="outline-none p-3 cursor-pointer w-full"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinar({
                              ...webinar,
                              webinar_info: {
                                ...webinar.webinar_info,
                                date: e.target.value,
                              },
                            });
                          }}
                        />
                      </div>

                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="time"
                          name="time"
                          className="outline-none p-3 cursor-pointer w-full"
                          placeholder="Enter Time"
                          value={webinar.webinar_info.time}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinar({
                              ...webinar,
                              webinar_info: {
                                ...webinar.webinar_info,
                                time: e.target.value,
                              },
                            });
                          }}
                        />
                      </div>
                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="url"
                          name="location"
                          className="outline-none p-3 w-full"
                          placeholder="Enter Location Link"
                          value={webinar.webinar_info.location}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinar({
                              ...webinar,
                              webinar_info: {
                                ...webinar.webinar_info,
                                location: e.target.value,
                              },
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="rounded-[4px] w-full border-[1px] border-[#F0F0F0] h-[80px] p-3 mt-6 flex items-center">
                      {webinar.webinar_info.speakers.map((s) => (
                        <div
                          key={s}
                          className="mr-3 flex items-center p-3 bg-gray-100"
                        >
                          <h1>{s}</h1>{" "}
                          <span
                            className="ml-2 cursor-pointer"
                            onClick={() => {
                              const deleteSpeaker =
                                webinar.webinar_info.speakers.filter(
                                  (ss) => ss !== s
                                );
                              setWebinar({
                                ...webinar,
                                webinar_info: {
                                  ...webinar.webinar_info,
                                  speakers: deleteSpeaker,
                                },
                              });
                            }}
                          >
                            <XIcon />
                          </span>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="Enter Name of Speaker"
                      className="outline-none mt-6 min-w-[350px] border-[1px] border-[#f0f0f0] p-4"
                      value={speakerName}
                      onChange={(e) => setSpeakerName(e.target.value)}
                    />
                    <button
                      className="bg-[#116B89] px-6 py-3 rounded-full text-white ml-4"
                      onClick={() => {
                        if (!speakerName) return;

                        setWebinar({
                          ...webinar,
                          webinar_info: {
                            ...webinar.webinar_info,
                            speakers: [
                              ...webinar.webinar_info.speakers,
                              speakerName,
                            ],
                          },
                        });
                        setSpeakerName("");
                      }}
                    >
                      Add Speaker
                    </button>
                  </TabsContent>
                  <TabsContent value="Image">
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

export default EditWebinar;
