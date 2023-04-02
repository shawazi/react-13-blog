import React from "react";
import WazNav from "../components/WazNav";
import WazFoot from "../components/WazFoot";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";

const Register = () => {
	return (
		<>
			<WazNav />
			<Container className="mt-5 anon-class mb-5">
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
						} else if (values.password !== values.password2) {
							errors.password2 = "Passwords do not match"
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
						<Form className="d-flex flex-column w-25 mx-auto gap-2 text-light">
							<h3 className="alkatra-class mx-auto">Registration Page</h3>

                            <label htmlFor="first_name">First Name</label>
							<Field type="text" name="first_name" />
							<ErrorMessage className="text-danger" name="first_name" component="div" />

                            <label htmlFor="last_name">Last Name</label>
							<Field type="text" name="last_name" />
							<ErrorMessage className="text-danger" name="last_name" component="div" />

                            <label htmlFor="email">Email</label>
							<Field type="email" name="email" />
							<ErrorMessage className="text-danger" name="email" component="div" />

							<label htmlFor="password">Password</label>
							<Field type="password" name="password" />
							<ErrorMessage className="text-danger" name="password" component="div" />

							<label htmlFor="password_confirm">Confirm Password</label>
							<Field type="password" name="password2" />
							<ErrorMessage className="text-danger" name="password2" component="div" />
							
							<button className="rounded bg-dark text-light w-auto px-2 mx-auto mb-5 mt-3" type="submit" disabled={isSubmitting}>
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
