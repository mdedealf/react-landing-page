import { FC } from "react";
import TextInput from "./TextInput/TextInput";
import { FORM_INPUT } from "../../../constants/formInputs";
import { Form, Formik, FormikHelpers } from "formik";
import { ContactMe } from "../../../types/contactMe";
import axios from "axios";

const ContactForm: FC = () => {
  const initialValues: ContactMe = {
    id: 1,
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleContactMe = async (
    values: ContactMe,
    formikHelpers: FormikHelpers<ContactMe>
  ) => {
    console.log("button contact me clicked");

    const { status } = await axios.post(
      "http://localhost:3000/contact-me",
      values
    );

    if (status !== 201) throw new Error("Failed sending the message");

    formikHelpers.resetForm();
    alert("Your message was sent!");
    return;
  };

  return (
    <div className="flex flex-col items-start gap-32px">
      <h1 className="text-60px font-500px leading-72px text-dark-black w-[630px]">
        Let’s build something cool together
      </h1>
      <div className="flex flex-col w-full">
        <Formik onSubmit={handleContactMe} initialValues={initialValues}>
          <Form className="flex flex-col gap-32px">
            {FORM_INPUT.map((input, index) => (
              <TextInput key={index} {...input} />
            ))}
            <button
              className="bg-dark-black text-off-white py-[24px] px-[48px] text-18px font-500px leading-[21px] rounded-[170px] hover:bg-dark-gray transition-all w-[200px]"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
