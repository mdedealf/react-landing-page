import { FC } from "react";
import { FORM_INPUT } from "../../../constants/formInputs";
import { Form, Formik, FormikHelpers } from "formik";
import TextInput from "./TextInput/TextInput";
// import axios from "axios";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/useSelector";
import { submitForm } from "../../../features/contactMe/submitFormSlice";

const ContactForm: FC = () => {
  const dispatch = useAppDispatch();
  const { error, status } = useAppSelector((state) => state.contactMe);

  const initialValues: ContactMe = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // form submit on click handle
  const handleContactMe = async (
    values: ContactMe,
    formikHelpers: FormikHelpers<ContactMe>
  ) => {
    console.log("button contact me clicked");

    try {
      // dispatch redux action formSubmit
      const submittedResult = await dispatch(submitForm(values));

      if (submitForm.fulfilled.match(submittedResult)) {
        formikHelpers.resetForm();
      } else {
        throw new Error("Failed sending the message");
      }
    } catch (error) {
      console.log(`Failed to send your message, please check again. ${error}`);
    }
  };

  // Form input validation
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .required("Message is required")
      .max(200, "You can only input up to 200 characters"),
  });

  return (
    <div className="flex flex-col items-start gap-32px">
      <h1 className="text-60px font-500px leading-72px text-dark-black w-[630px]">
        Let’s build something cool together
      </h1>
      <div className="flex flex-col w-full gap-[30px]">
        {status === "loading" && (
          <div className="w-full font-bold text-[16px] bg-light-gray p-20px rounded-md">
            Loading...
          </div>
        )}
        {status === "failed" && (
          <div className="w-full font-bold text-[16px] bg-light-gray p-20px rounded-md text-red-600">
            {error}
          </div>
        )}
        {status === "succeeded" && (
          <div className="w-full font-bold text-[16px] bg-light-gray p-20px rounded-md">
            Your message was sent!
          </div>
        )}

        <Formik
          onSubmit={handleContactMe}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-32px">
              {FORM_INPUT.map((input) => (
                <TextInput
                  key={input.name}
                  {...input}
                  errors={errors[input.name as keyof typeof errors]}
                  touched={touched[input.name as keyof typeof touched]}
                />
              ))}
              <button
                className="bg-dark-black text-off-white py-[24px] px-[48px] text-18px font-500px leading-[21px] rounded-[170px] hover:bg-dark-gray transition-all w-[200px]"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
