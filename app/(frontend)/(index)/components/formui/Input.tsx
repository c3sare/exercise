import {
  FieldValues,
  Path,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  placeholder: string;
  register: UseFormRegister<T>;
  id: Path<T>;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
};

export default function Input<T extends FieldValues>({
  placeholder,
  register,
  id,
  required,
  pattern,
}: InputProps<T>) {
  return (
    <input
      className="h-[48px] rounded-[9px] bg-[#F5F5F6] shadow-[1px_2px_5px_8px] shadow-[#C0C1C9] w-full p-[14px_12px]"
      type="text"
      placeholder={placeholder}
      {...register(id, {
        required: required ? "To pole jest wymagane" : undefined,
        pattern,
      })}
    />
  );
}
