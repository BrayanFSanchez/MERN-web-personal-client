import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Newsletter.form";
import { Newsletter as NewsletterController } from "../../../../api";
import "./Newsletter.scss";

const newsletterController = new NewsletterController();

export const Newsletter = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      setSuccess(false);

      try {
        await newsletterController.registerEmail(formValue.email);
        formik.resetForm();
        setSuccess(true);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="footer-newsletter">
      <h4>Apuntate y aprendé</h4>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          placeholder="Correo electronico"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Me suscribo!
        </Form.Button>

        {success && <p className="success">Email registrado correctamente</p>}
      </Form>
    </div>
  );
};
