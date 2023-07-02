import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string().email(true).required(true),
  });
};
