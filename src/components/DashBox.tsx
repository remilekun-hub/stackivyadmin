import { format, parseISO } from "date-fns";

type Prop = {
  icon: string;
  title: string;
  amount?: number;
  date?: string;
};

function DashBox({ title, amount, date, icon }: Prop) {
  const parsedDate = date && format(parseISO(date), "do LLL, yyyy");
  return (
    <div className="rounded-[16px] border-[1px] border-[#E5E7EB] flex flex-col justify-between bg-white h-[210px] p-9">
      <img src={icon} className="w-[54.24px] h-[54.24px]" />

      <div className="mt-6">
        <p className="text-16px leading-[19.2px] font-normal text-[#9CA3AF]">
          {title}
        </p>
        {amount && <p className="font-medium text-[24px] mt-2">{amount}</p>}
        {date && <p className="font-medium text-[24px] mt-2">{parsedDate}</p>}
      </div>
    </div>
  );
}

export default DashBox;
