import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputTextProps = BaseInputProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

import { useFormContext } from "react-hook-form";

const InputText = ({ label, className, name, ...props }: InputTextProps) => {
  const {
    register,
    formState: {errors}
  } = useFormContext();

  return (
    <label className="block">
      <p className="uppercase font-bold mb-2">{label}</p>
      <input
        {...register(name)}
        type="text"
        className={`${className} appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
        {...props}
      />
      {errors[name] && <p className="text-red text-xs italic">{errors[name].message}</p>}
    </label>
  );
};

export default InputText;
