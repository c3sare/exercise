import Step from "./Step";

const Steps = () => {
  return (
    <div className="flex flex-nowrap my-6">
      <Step active title="Generate image" step={1} />
      <Step title="Choose your product" step={2} />
      <Step title="Order" step={3} />
    </div>
  );
};

export default Steps;
