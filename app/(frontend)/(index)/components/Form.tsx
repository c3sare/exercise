import PenIcon from "../../icons/PenIcon";
import Button from "./formui/Button";
import Input from "./formui/Input";

const Form = () => {
  return (
    <form className="relative mb-[22px]">
      <Input placeholder="What do you want to create?" />
      <Button className="absolute right-0 top-0 h-full w-[53px]">
        <PenIcon />
      </Button>
    </form>
  );
};

export default Form;
