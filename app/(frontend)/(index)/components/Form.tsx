import Button from "./formui/Button";
import Input from "./formui/Input";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";

const Form = () => {
  return (
    <form className="relative">
      <Input placeholder="What do you want to create?" />
      <Button className="absolute right-0 top-0 h-full w-[53px]">
        <FiEdit />
      </Button>
    </form>
  );
};

export default Form;
