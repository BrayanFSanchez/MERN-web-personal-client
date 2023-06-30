import * as Yup from "yup";

export const initialValues = (menu) => {
  return {
    title: menu?.title || "",
    path: menu?.path || "",
    protocol: menu?.protocol || "https://",
    active: menu?.active || true,
    order: menu?.order || null,
  };
};

export const validationSchema = () => {
  return Yup.object({
    title: Yup.string().required(true),
    path: Yup.string().required(true),
    order: Yup.number().required(true),
  });
};
