import * as Yup from "yup";

export const initialValues = () => {
  return {
    title: "",
    miniature: "",
    file: null,
    description: "",
    url: "",
    price: null,
    score: null,
  };
};

export const validationSchema = () => {
  return Yup.object({
    title: Yup.string().required(true),
    miniature: Yup.string().required(true),
    description: Yup.string().required(true),
    url: Yup.string().required(true),
    price: Yup.number().required(true),
    score: Yup.number().min(1, true).max(5, true).required(true),
  });
};
