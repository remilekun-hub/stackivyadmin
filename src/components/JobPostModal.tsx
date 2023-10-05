import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import mark from "../assets/mark.png";
type prop = {
  setJobPostModal: Dispatch<SetStateAction<boolean>>;
};
function JobPostModal({ setJobPostModal }: prop) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
      <div className="rounded-[8px] bg-white w-[450px] h-[233px] flex justify-center items-center">
        <div>
          <img src={mark} className="w-[52.5px] h-[52.5px] mx-auto" />
          <p className="text-[15px] text-black font-bold text-center mt-4 my-1">
            Job Posted Successfully
          </p>
          <p className="text-[#9CA3AF] text-[13px] text-center mb-2">
            You have successfully posted a job to the website
          </p>
          <p
            className="text-[#116B89] text-center text-[12px] cursor-pointer"
            onClick={() => {
              setJobPostModal(false);
              navigate("/career/manage-job-posts");
            }}
          >
            View Job
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobPostModal;
