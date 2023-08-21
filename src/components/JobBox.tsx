type JobBoxType = {
  bg: string;
  border: string;
  activeJob: number;
  icon?: string;
};
function JobBox({ bg, border, activeJob }: JobBoxType) {
  return (
    <div
      style={{ backgroundColor: `${bg}`, borderColor: `${border}` }}
      className="rounded-[16px] p-7 flex flex-col gap-4 border-[2px] h-[147px]"
    >
      <p>Total Posted job</p>
      <p className="text-[24px] leading-6 font-bold">{activeJob}</p>
    </div>
  );
}

export default JobBox;
