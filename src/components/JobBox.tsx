type JobBoxType = {
  bg: string;
  border: string;
  activeJob: number;
  icon?: string;
};
function JobBox({ bg, border, activeJob, icon }: JobBoxType) {
  return (
    <div
      style={{ backgroundColor: `${bg}`, borderColor: `${border}` }}
      className="rounded-[16px] p-7 flex flex-col gap-4 border-[2px] h-full"
    >
      <img src={icon} className="w-8 h-8" />
      <p>Total Posted job</p>
      <p className="text-[24px] leading-6 font-bold">{activeJob}</p>
    </div>
  );
}

export default JobBox;
