import React, { useContext } from "react";
import WazNav from "../components/WazNav";
import WazFoot from "../components/WazFoot";
import { AuthContext } from "../contexts/AuthContext";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { Container } from "react-bootstrap";

const Login = () => {
  const { login } = useContext(AuthContext) 

	return (
		<>
			<WazNav />
			<Container className="mt-5 anon-class mb-5">
				<Formik
          className="mx-auto"
					initialValues={{
            username: "",
						email: "",
						password: "",
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
						setSubmitting(true);
            values.username = values.email;
            console.log(values)
						login(values);
						setSubmitting(false);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="d-flex flex-column w-25 mx-auto gap-2 text-light">
							<h3 className="alkatra-class mx-auto">
								Login
							</h3>

							<label htmlFor="email">Email</label>
							<Field type="email" name="email" />
							<ErrorMessage
								className="text-danger"
								name="email"
								component="div"
							/>

							<label htmlFor="password">Password</label>
							<Field type="password" name="password" />
							<ErrorMessage
								className="text-danger"
								name="password"
								component="div"
							/>

							<button
								className="rounded bg-dark text-light w-auto px-2 mx-auto mb-5 mt-3"
								type="submit"
								disabled={isSubmitting}
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</Container>{" "}
			<WazFoot />
		</>
	);
};

export default Login;
