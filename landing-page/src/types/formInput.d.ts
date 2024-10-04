type InputDetail = {
  label: string;
  labelFor: string;
  placeholder: string;
  type: string;
  name: string;
  errors?: FormikErrors<ContactMe>;
  touched?: FormikTouched<ContactMe>;
};

type ContactMe = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
