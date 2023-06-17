import * as Yup from "yup";

export const initialValues = () => {
  return {
    avatar: "",
    fileAvatar: null,
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    firstname: Yup.string().required(true),
    lastname: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    role: Yup.string().required(true),
    password: Yup.string().required(true),
  });
};
