import clsx from "clsx";

type StepProps = {
  title: string;
  active?: boolean;
  step: number;
};

const Step: React.FC<StepProps> = ({ title, active, step }) => {
  const activeBgColor = active ? "bg-[#CE2B28]" : "bg-[#E5E5E7]";
  const activeTextColor = active ? "text-white" : "text-[#9C9C9C]";

  return (
    <div className="w-full">
      <div
        className={clsx("h-[4px] w-full rounded-lg relative", activeBgColor)}
      >
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px] h-[23px] flex justify-center items-center rounded-[9px]",
            activeBgColor,
            activeTextColor
          )}
        >
          {step}
        </div>
      </div>
      <div
        className={clsx(
          "w-full text-center pt-[6px]",
          active ? "text-[#CE2B28]" : "text-[#E5E5E7]",
          active && "font-semibold"
        )}
      >
        {title}
      </div>
    </div>
  );
};

export default Step;
