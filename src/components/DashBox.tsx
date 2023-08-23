import head1 from "../assets/jobicon1.png";

// type Prop = {
//   amount: number;
//   icon: string;
//   bgColor: string;
//   borderColor: string;
//   iconColor: string;
// };
function DashBox() {
  return (
    <div className="rounded-[16px] border-[1px] border-[#FFE99B] h-[257px] p-9">
      <div className="flex flex-col gap-6">
        <img src={head1} className="w-[54.24px] h-[54.24px]" />
        <p className="text-16px leading-[19.2px] font-normal">
          Total quote requested
        </p>
      </div>
      <p className="font-medium text-[50px]">50</p>
    </div>
  );
}

export default DashBox;
