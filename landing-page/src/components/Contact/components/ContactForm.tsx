import { FC } from "react";
import TextInput from "./TextInput";
import { FORM_INPUT } from "../../../constants/formInputs";

const ContactForm: FC = () => {
  return (
    <div className="flex flex-col gap-32px">
      <h1 className="text-60px font-500px leading-72px text-dark-black">
        Let’s build something cool together
      </h1>
      <>
        {FORM_INPUT.map((input, index) => (
          <TextInput key={index} {...input} />
        ))}
      </>
    </div>
  );
};

export default ContactForm;
