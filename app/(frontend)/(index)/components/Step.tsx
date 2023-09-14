import clsx from "clsx";

type StepProps = {
  title: string;
  active?: boolean;
  step: number;
};

const Step: React.FC<StepProps> = ({ title, active, step }) => {
  const activeBgColor = active ? "bg-[#CE2B28]" : "bg-[#E5E5E7]";
  const activeTextColor = active ? "text-white" : "text-[#9C9C9C]";
  const afterActiveBgColor = active
    ? "after:bg-[#CE2B28]"
    : "after:bg-[#E5E5E7]";

  return (
    <div className="w-full">
      <div
        className={clsx(
          "h-[4px] w-full rounded-lg relative after:absolute after:top-0 after:left-[calc(100%_-_3px)] after:h-full after:rounded-full after:w-2 last:after:hidden",
          activeBgColor,
          afterActiveBgColor
        )}
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
