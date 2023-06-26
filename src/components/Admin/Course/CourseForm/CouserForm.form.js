import * as Yup from "yup";

export const initialValues = (course) => {
  return {
    title: course?.title || "",
    miniature: course?.miniature || "",
    file: null,
    description: course?.description || "",
    url: course?.url || "",
    price: course?.price || null,
    score: course?.score || null,
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
