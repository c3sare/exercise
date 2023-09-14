type InputProps = {
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      className="h-[48px] rounded-[9px] bg-[#F5F5F6] shadow-custom w-full p-[14px_12px]"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
