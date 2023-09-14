import Step from "./Step";

const Steps = () => {
  return (
    <div className="flex flex-nowrap mb-[40px]">
      <Step active title="Generate image" step={1} />
      <Step title="Choose your product" step={2} />
      <Step title="Order" step={3} />
    </div>
  );
};

export default Steps;
