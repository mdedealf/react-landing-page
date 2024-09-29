import { FC } from "react";

const TextInput: FC<InputDetail> = ({
  label,
  labelFor,
  placeholder,
  type,
  name,
}) => {
  return (
    <div className="flex flex-col gap-12px">
      <label
        className="text-18px font-400px leading-28px text-dark-black"
        htmlFor={labelFor}
      >
        {label}
      </label>
      <input
        className="text-27px font-400px leading-37px placeholder:text-light-gray focus:outline-none focus:ring-0"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <div className="border-b border-dark-gray w-full"></div>
    </div>
  );
};

export default TextInput;
