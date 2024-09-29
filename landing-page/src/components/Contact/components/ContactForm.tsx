import { FC } from "react";
import TextInput from "./TextInput/TextInput";
import { FORM_INPUT } from "../../../constants/formInputs";

const ContactForm: FC = () => {
  return (
    <div className="flex flex-col items-start gap-32px">
      <h1 className="text-60px font-500px leading-72px text-dark-black">
        Let’s build something cool together
      </h1>
      <>
        {FORM_INPUT.map((input, index) => (
          <TextInput key={index} {...input} />
        ))}
      </>
      <button className="bg-dark-black text-off-white py-[24px] px-[48px] text-18px font-500px leading-[21px] rounded-[170px] hover:bg-dark-gray transition-all">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
