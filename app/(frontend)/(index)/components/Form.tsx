"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import PenIcon from "../../icons/PenIcon";
import Button from "./formui/Button";
import Input from "./formui/Input";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form className="relative mb-[20px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <Input
          register={register}
          id="text"
          placeholder="What do you want to create?"
          required
          pattern={{
            value:
              /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            message: "Nie prawidłowo uzupełnione pole!",
          }}
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 h-full w-[53px]"
        >
          <PenIcon />
        </Button>
      </div>
      {errors.text?.message && (
        <span className="text-red-500">{errors.text?.message}</span>
      )}
    </form>
  );
};

export default Form;
