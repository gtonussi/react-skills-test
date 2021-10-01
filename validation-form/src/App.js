import * as React from "react";
import axios from 'axios';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { IMaskMixin } from "react-imask";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string("Enter your phone")
    .min(10, "Phone should be 10 digits")
    .required("Phone is required"),
});

const withMask = (Component) =>
  IMaskMixin(({ ...props }) => <Component {...props} />);

const MaskedTextField = withMask(TextField);

export default function App() {
  const onSubmit = (data, {setErrors})=> { 
    axios.post('https://toughland.com:9095/api/validate', data)
    .then()
    .catch((error) => {
      if (error.response.status === 400) {
        setErrors({
          [error.response.data.field]: error.response.data.message
        })
      }
    });
  }

  return (
    <div style={{ padding: 32 }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={onSubmit}
      >
        {(formProps) => (
          <Form>
            <div>
              <FormControl style={{ padding: "16px 0" }}>
                <Field name="name" variant="outlined">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      error={meta.error ? true : false}
                      label="Name"
                      helperText={meta.error}
                    />
                  )}
                </Field>
                <FormHelperText>Full name please.</FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl style={{ padding: "16px 0" }}>
                <Field name="email" variant="outlined">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      error={meta.error ? true : false}
                      label="Email"
                      helperText={meta.error}
                    />
                  )}
                </Field>
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl style={{ padding: "16px 0" }}>
                <Field name="phone" variant="outlined">
                  {({ field, meta }) => (
                    <MaskedTextField
                      {...field}
                      error={meta.error ? true : false}
                      label="Phone"
                      helperText={meta.error}
                      mask="(#00) 000-0000"
                      definitions={{
                        "#": /[1-9]/,
                      }}
                    />
                  )}
                </Field>
                <FormHelperText>Phone Number.</FormHelperText>
              </FormControl>
            </div>
            <div style={{ paddingTop: 32 }}>
              <Button
                variant="contained"
                type="submit"
                disabled={!formProps.isValid}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
