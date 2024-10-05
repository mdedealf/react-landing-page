type InputDetail = {
  label: string;
  labelFor: string;
  placeholder: string;
  type: string;
  name: string;
  errors?: FormikErrors<ContactUs>;
  touched?: FormikTouched<ContactUs>;
};

type ContactUs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
