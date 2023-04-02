import React from "react";
import WazNav from "../components/WazNav";
import WazFoot from "../components/WazFoot";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";

const Register = () => {
	return (
		<>
			<WazNav />
			<Container className="mt-5 anon-class">
				<Formik
					initialValues={{
						first_name: "",
						last_name: "",
						email: "",
						password: "",
						password2: ""
					}}
					validate={(values) => {
						const errors = {};
						if (!values.email) {
							errors.email = "Required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
								values.email
							)
						) {
							errors.email = "Invalid email address";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="d-flex flex-column w-25 mx-auto m-5 gap-3 text-light">
							<h3 className="alkatra-class mx-auto">Registration Page</h3>

                            <label htmlFor="first_name">First Name</label>
							<Field type="text" name="first_name" />
							<ErrorMessage name="first_name" component="div" />

                            <label htmlFor="last_name">Last Name</label>
							<Field type="text" name="last_name" />
							<ErrorMessage name="last_name" component="div" />

                            <label htmlFor="email">Email</label>
							<Field type="email" name="email" />
							<ErrorMessage name="email" component="div" />

							<label htmlFor="password">Password</label>
							<Field type="password" name="password" />
							<ErrorMessage name="password" component="div" />

							<label htmlFor="password_confirm">Confirm Password</label>
							<Field type="password" name="password2" />
							<ErrorMessage name="password_confirm" component="div" />
							
							<button className="rounded bg-dark text-light w-25 mx-auto" type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</Container>
			<WazFoot />
		</>
	);
};

export default Register;
