import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  return errors;
};

const MyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <Field type='text' id='firstName' name='firstName' />
            <ErrorMessage name='firstName' component='div' />
          </div>
          <div>
            <label htmlFor='lastName'>Last Name</label>
            <Field type='text' id='lastName' name='lastName' />
            <ErrorMessage name='lastName' component='div' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <Field type='email' id='email' name='email' />
            <ErrorMessage name='email' component='div' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
