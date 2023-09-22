import { useEffect, useMemo, useRef, useState, FormEvent } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { SingleGuideType, base_url } from "../../types";
import toast from "react-hot-toast";
import { userSlice } from "@/Hooks/user";
import { parseISO, format } from "date-fns";
import xIcon from "../assets/close-circle.png";
import { XIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import folder from "../assets/folder.png";

Quill.register("modules/imageResize", ImageResize);

function EditGuide() {
  const params = useSearchParams();
  const guideId = params[0].get("id");
  const user = userSlice((state) => state.user);
  const [catModal, setCatModal] = useState(false);
  const [value, setValue] = useState("");
  const quillObj = useRef<ReactQuill | null>(null);
  const [tagModal, setTagModal] = useState(false);
  const [tagName, setTagName] = useState("");
  const [catName, setCatName] = useState("");
  const navigate = useNavigate();
  const handleTagSaveBtn = () => {
    setGuideData({
      ...guideData,
      tags: [...guideData.tags, tagName],
    });
    setTagName("");
    setTagModal(false);
  };
  const handleCatSaveBtn = () => {
    setGuideData({
      ...guideData,
      categories: [...guideData.categories, catName],
    });
    setCatName("");
    setCatModal(false);
  };
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file: File | null = input.files && input.files[0];
      const form_data = new FormData();

      if (file) {
        const uploadImage = async (file: File) => {
          form_data.append("file", file);
          form_data.append("upload_preset", "shortlet");
          try {
            const {
              data: { url },
            } = await axios.post(
              "https://api.cloudinary.com/v1_1/draqmxlg6/image/upload",
              form_data
            );

            const range = quillObj.current?.getEditorSelection();
            if (typeof range?.index === "number") {
              quillObj.current
                ?.getEditor()
                .insertEmbed(range?.index, "image", url);
            }
          } catch (error) {
            console.log(error);
          }
        };
        await uploadImage(file);
      }
    };
  };

  const modules = useMemo(
    () => ({
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
      toolbar: {
        container: [
          [{ font: ["monospace", "serif", "sans"] }],
          [{ size: ["small", "normal", "large", "huge", false] }],
          [{ header: [1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            {
              color: [
                "red",
                "yellow",
                "black",
                "green",
                "blue",
                "gold",
                "purple",
              ],
            },
          ],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },

            { align: "left" },
            { align: "center" },
            { align: "justify" },
            { align: "right" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  const [guideData, setGuideData] = useState<SingleGuideType>({
    title: "",
    description: "",
    summary: "",
    categories: [],
    tags: [],
    date_created: "",
    date_last_updated: "",
    visibility: "public",
    saved: "",
    image: {
      file_url: "",
      file_name: "",
    },
  });
  useEffect(() => {
    const controller = new AbortController();
    const getGuide = async () => {
      try {
        toast.loading("getting guide ..", { id: "guide" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/guide/${guideId}`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (!data) {
          toast.error("something went wrong", { id: "guide" });
        }
        if (data.code === 200) {
          toast.success("Request Successful", { id: "guide" });
          console.log({ data });
          setGuideData(data.guides);
          setValue(data.guides.guide_contents.post);
        }
        if (data.code !== 200) {
          toast.error(`coludn't get guide id: ${guideId}`, {
            id: "editguide",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getGuide();
    return () => {
      toast.dismiss("guide");
    };
  }, []); //eslint-disable-line
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      toast.loading("updating guide", { id: "updateguide" });
      const form_Data = new FormData();
      if (file) {
        form_Data.append("image", file);
      }
      form_Data.append("title", guideData.title);
      form_Data.append("summary", guideData.summary);
      form_Data.append("description", guideData.description);
      form_Data.append("visibility", guideData.visibility);
      form_Data.append("saved", "false");
      form_Data.append("categories", JSON.stringify(guideData.categories));
      form_Data.append("blog_contents", JSON.stringify({ post: value }));
      form_Data.append("tags", JSON.stringify(guideData.tags));

      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/marketing/guide/${guideId}`,
        form_Data,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (!data) {
        toast.error("something went wrong", { id: "updateguide" });
      }
      if (data.code === 200) {
        toast.success("Guide updated", { id: "updateguide" });
        setTimeout(() => {
          navigate("/guides");
        }, 3000);
      }
      if (data.code != 200) {
        toast.error("couldn't update guide post at this time", {
          id: "updateguide",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => toast.dismiss("updateguide");
  }, []); //eslint-disable-line

  return (
    <section className="">
      {catModal && (
        <div className="w-screen h-screen fixed top-0 z-[999999999] left-0 bg-black/70 flex justify-center items-center">
          <div className="bg-white p-7 rounded-[24px] w-[312px] flex-col flex gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Add Category</h1>
              <button
                onClick={() => {
                  setCatName("");
                  setCatModal(false);
                }}
                className=" flex items-center justify-center mt-2"
              >
                <img src={xIcon} className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3">
              <h2 className="mb-2">Category</h2>
              <input
                type="text"
                placeholder="Enter Name of Category"
                className="outline-none rounded-[4px] p-3 border-[2px] w-full border-[#F3F4F6]"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
              />
            </div>
            <button
              className="inline mr-auto px-8 py-[6px] text-white font-medium rounded-full bg-[#116B89]"
              onClick={handleCatSaveBtn}
            >
              Save
            </button>
          </div>
        </div>
      )}
      {tagModal ? (
        <div className="w-screen h-screen fixed  z-[999999999999] inset-0 bg-black/70 flex justify-center items-center">
          <div className="bg-white p-7 rounded-[24px] w-[312px] flex-col flex gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Add Tag</h1>
              <button
                onClick={() => {
                  setTagName("");
                  setTagModal(false);
                }}
                className=" flex items-center justify-center mt-2"
              >
                <img src={xIcon} className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3">
              <h2 className="mb-2">Tag</h2>
              <input
                type="text"
                placeholder="Enter Name of Tag"
                className="outline-none rounded-[4px] p-3 border-[2px] w-full border-[#F3F4F6]"
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
              />
            </div>
            <button
              className="inline mr-auto px-8 py-[6px] text-white font-medium rounded-full bg-[#116B89]"
              onClick={handleTagSaveBtn}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
      <Navbar>
        <div className="flex items-center gap-[6px]">
          <h1 className="font-bold text-[24px]">Content -</h1>
          <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
            Edit Post
          </span>
        </div>
      </Navbar>
      <main className="p-4 lg:p-6  bg-[#F3F4F6]">
        <form
          className="rounded-[16px]  h-screen flex flex-col xl:flex-row gap-5 xl:gap-7 max-w-[1500px] mx-auto"
          onSubmit={handleUpdate}
        >
          <ScrollArea className="xl:basis-[77%] bg-white rounded-[16px] h-screen overflow-auto flex justify-center">
            <ReactQuill
              ref={quillObj}
              theme="snow"
              value={value}
              modules={modules}
              onChange={setValue}
              formats={formats}
            />
          </ScrollArea>

          <ScrollArea className=" xl:basis-[350px] h-full bg-white rounded-[16px] border-[1px] border-[#F3F4F6] px-4 lg:px-5 pt-5">
            <div className="flex gap-7 mb-6">
              <button className="rounded-full bg-[#116B89] px-8 py-3 text-white">
                Update Blog Post
              </button>
            </div>

            <div className="flex justify-between mt-5 mb-4">
              <p className="text-[#9CA3AF]">Save to Draft</p>
              <div className="mr-2">
                <Select
                  defaultValue={guideData.saved}
                  onValueChange={(value) =>
                    setGuideData({ ...guideData, saved: value })
                  }
                >
                  <SelectTrigger className="w-full items-center mb-6 outline-none focus-within:outline-none">
                    <SelectValue placeholder="Save to draft" />
                  </SelectTrigger>
                  <SelectContent className="mr-[50px]">
                    <SelectGroup>
                      <SelectLabel>Draft</SelectLabel>
                      <SelectItem value="true">Yes</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <h1 className="mb-5">Summary</h1>
              <h1 className="mb-3">Blog Summary</h1>
              <textarea
                placeholder="Enter your blog Summary"
                className="w-full h-[110px]  rounded-[5px] resize-none px-3 py-2 border-[2px] border-[#F3F4F6] outline-none"
                value={guideData.summary}
                onChange={(e) =>
                  setGuideData({ ...guideData, summary: e.target.value })
                }
              />
            </div>
            <div className="flex justify-between mt-5 mb-4">
              <p className="text-[#9CA3AF]">Visibility</p>
              <div className="mr-2">
                <Select
                  defaultValue={guideData.visibility}
                  onValueChange={(value) =>
                    setGuideData({ ...guideData, visibility: value })
                  }
                >
                  <SelectTrigger className="w-full items-center mb-6 outline-none focus-within:outline-none">
                    <SelectValue placeholder="visibility" />
                  </SelectTrigger>
                  <SelectContent className="mr-[50px]">
                    <SelectGroup>
                      <SelectLabel>Visibility</SelectLabel>
                      <SelectItem value="Public">Public</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* <div className="flex justify-between items-center mt-6">
              <h1 className="mb-3 text-[#9CA3AF]">Date</h1>
              <div className="flex flex-col">
                <span>
                  {" "}
                  {blogData.date_created
                    ? format(parseISO(blogData.date_created), "d/MM/yyyy")
                    : ""}
                </span>
                <span className="text-[#9CA3AF] text-[12px]">
                  {" "}
                  {blogData.date_created
                    ? format(parseISO(blogData.date_created), "hh:mm a")
                    : ""}
                </span>
              </div>
            </div> */}
            <div className="flex justify-between items-center mt-6">
              <h1 className="mb-3 text-[#9CA3AF]">Date Last Updated</h1>
              <div className="flex flex-col">
                <span>
                  {" "}
                  {guideData.date_last_updated
                    ? format(parseISO(guideData.date_last_updated), "d/MM/yyyy")
                    : ""}
                </span>
                <span className="text-[#9CA3AF] text-[12px]">
                  {" "}
                  {guideData.date_last_updated
                    ? format(parseISO(guideData.date_last_updated), "hh:mm a")
                    : ""}
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h1 className="mb-2">Meta Title</h1>
              <input
                type="text"
                className="w-full outline-none rounded-[5px] border-[2px] p-3 px-4  border-[#F3F4F6]"
                placeholder="Enter your meta title"
                value={guideData.title}
                onChange={(e) =>
                  setGuideData({ ...guideData, title: e.target.value })
                }
              />
            </div>

            <div className="mb-5">
              <h1 className="mb-2">Meta Description</h1>
              <textarea
                placeholder="Enter your description"
                className="w-full h-[110px]  rounded-[5px] resize-none px-3 py-2 border-[2px] border-[#F3F4F6] outline-none"
                value={guideData.description}
                onChange={(e) =>
                  setGuideData({ ...guideData, description: e.target.value })
                }
              />
            </div>

            <div className="mb-7">
              <h1 className="mb-2">Featured Image</h1>
              <div className="w-full h-[130px]  rounded-[5px] px-3 py-2 border-[1px] border-dashed border-[#116B89] outline-none flex flex-col items-center justify-center">
                <img src={folder} className="w-5 h-5" />
                <div>
                  <p className="text-[#D1D5DB]">
                    Drag and drop image or{" "}
                    <span
                      className="text-[#116B89] cursor-pointer font-normal"
                      onClick={() => {
                        if (fileRef && fileRef.current) {
                          fileRef.current.click();
                        }
                      }}
                    >
                      {" "}
                      Browse
                    </span>
                  </p>
                  <p className="text-center">
                    {file ? file.name : guideData.image.file_name}
                  </p>
                </div>
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between mb-3">
                <h1 className="mb-2 leading-[11.6px]">Category</h1>
                <div
                  className="text-[#116B89] text-[15px] leading-[12px] cursor-pointer"
                  onClick={() => setCatModal(true)}
                >
                  + Add New Category
                </div>
              </div>

              {guideData.categories.length > 0 && (
                <div className="flex flex-wrap gap-3 rounded-[4px] border-[1px] border-[#F3F4F6] px-3 py-2">
                  {guideData.categories.map((c, i) => (
                    <div
                      className="bg-[#116B89] flex gap-3 px-2 py-1 text-white rounded-[2px] cursor-pointer"
                      key={i}
                    >
                      <span>{c}</span>
                      <XIcon
                        className="cursor-pointer"
                        onClick={() => {
                          const filteredCat = guideData.categories.filter(
                            (cat) => cat !== c
                          );

                          setGuideData({
                            ...guideData,
                            categories: filteredCat,
                          });
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <h1 className="mb-2">Tags</h1>
                <div
                  className="text-[#116B89] text-[15px] leading-[12px] cursor-pointer"
                  onClick={() => setTagModal(true)}
                >
                  + Add New Tag
                </div>
              </div>
              {guideData.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 rounded-[4px] border-[1px] border-[#F3F4F6] px-3 py-2">
                  {guideData.tags.map((t, i) => (
                    <div
                      className="bg-[#116B89] flex gap-3 px-2 py-1 text-white rounded-[2px] cursor-pointer"
                      key={i}
                    >
                      <span>{t}</span>
                      <XIcon
                        className="cursor-pointer"
                        onClick={() => {
                          const filteredTag = guideData.tags.filter(
                            (tag) => tag !== t
                          );

                          setGuideData({ ...guideData, tags: filteredTag });
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ScrollArea>
        </form>
      </main>
    </section>
  );
}

export default EditGuide;
