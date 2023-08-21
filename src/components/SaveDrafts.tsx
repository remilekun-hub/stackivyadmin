import close from "../assets/ic_round-cancel.png";
import { Dispatch, SetStateAction } from "react";
type prop = {
  setIsSaveDrafts: Dispatch<SetStateAction<boolean>>;
};
function SaveDrafts({ setIsSaveDrafts }: prop) {
  return (
    <div className="w-full overflow-hidden  h-[62px] z-[2000] absolute bottom-0">
      <div className="bg-[#1E2C31] w-full px-10  text-white items-center h-full text-center flex justify-between">
        <p>Job saved in drafts</p>
        <div
          onClick={() => setIsSaveDrafts(false)}
          className="bg-red flex justify-center items-center cursor-pointer"
        >
          <img src={close} className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default SaveDrafts;
