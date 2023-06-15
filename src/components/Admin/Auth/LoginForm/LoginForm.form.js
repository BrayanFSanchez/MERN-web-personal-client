import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email no es válido")
      .required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });
};
