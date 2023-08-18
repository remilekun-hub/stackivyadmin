import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import folder from "../assets/folder.png";
import xIcon from "../assets/close-circle.png";

function NewBlog() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [catModal, setCatModal] = useState(false);
  return (
    <section className="max-h-screen">
      {catModal && (
        <div className="w-screen h-screen fixed top-0 z-[700000] left-0 bg-black/70 flex justify-center items-center">
          <div className="bg-white p-7 rounded-[24px] w-[312px] flex-col flex gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-medium">Add Category</h1>
              <button
                onClick={() => setCatModal(false)}
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
              />
            </div>
            <button className="inline mr-auto px-8 py-[6px] text-white font-medium rounded-full bg-[#116B89]">
              Save
            </button>
          </div>
        </div>
      )}
      <Navbar>
        <div className="flex items-center gap-[6px]">
          <h1 className="font-medium text-[24px]">Content -</h1>
          <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
            Blogs
          </span>
        </div>
      </Navbar>
      <main className="p-4 lg:p-6 xl:p-9 bg-[#F3F4F6]">
        <div className="rounded-[16px]  h-screen flex flex-col xl:flex-row gap-5 xl:gap-8">
          <div className="xl:basis-[77%] bg-white rounded-[16px]">1</div>
          <div className="xl:basis-[350px] bg-white rounded-[16px] border-[1px] border-[#F3F4F6] px-4 lg:px-5 pt-5">
            <div className="flex gap-7 mb-6">
              <button className="rounded-full bg-[#116B89] px-8 py-3 text-white">
                Publish
              </button>
              <button>Save to draft</button>
            </div>

            <div>
              <h1 className="mb-3">Summary</h1>
              <textarea
                placeholder="Enter your blog Summary"
                className="w-full h-[110px]  rounded-[5px] resize-none px-3 py-2 border-[2px] border-[#F3F4F6] outline-none"
              />
            </div>

            <div className="flex justify-between">
              <h1 className="mb-3">Date</h1>
            </div>

            <div className="mb-5">
              <h1 className="mb-2">Meta Title</h1>
              <input
                type="text"
                className="w-full outline-none rounded-[5px] border-[2px] p-3 px-4  border-[#F3F4F6]"
                placeholder="Enter your meta title"
              />
            </div>
            <div className="mb-5">
              <h1 className="mb-2">Meta Description</h1>
              <textarea
                placeholder="Enter your description"
                className="w-full h-[110px]  rounded-[5px] resize-none px-3 py-2 border-[2px] border-[#F3F4F6] outline-none"
              />
            </div>

            <div className="mb-5">
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
                </div>
                <input type="file" ref={fileRef} className="hidden" />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex justify-between">
                <h1 className="mb-2 leading-[11.6px]">Category</h1>
                <button
                  className="text-[#116B89] text-[15px] leading-[12px]"
                  onClick={() => setCatModal(true)}
                >
                  + Add New Category
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="savings"
                    className="cursor-pointer accent-[#116B89]"
                  />
                  <p> Savings</p>
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value="investment"
                    className="cursor-pointer accent-[#116B89]"
                  />
                  <p>Investment</p>
                </label>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="mb-2">Tags</h1>
              <div>tags here</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default NewBlog;
