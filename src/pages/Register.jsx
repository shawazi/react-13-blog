import React, { useContext, useEffect } from "react";
import WazNav from "../components/WazNav";
import WazFoot from "../components/WazFoot";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
	const { setLoggedIn, loggedIn, user, setUser } = useContext(AuthContext);

	const regURL = "http://22112.fullstack.clarusway.com/account/register/";

	const createAccount = (values) => {
		const userInfo = {
			first_name: values.first_name || "",
			last_name: values.last_name || "",
			email: values.email,
			password: values.password,
			password2: values.password2,
		};

		// console.log(userInfo);

		axios // account_register_create
			.post(regURL, userInfo)
			.then((response) => {
				toast.success("Account Created!");
				// console.log(response);
				setUser(user => ({
					...user, 
					currentUser: response.data.user.email
				}))
				const { email, password } = userInfo;
				const username = userInfo.email;
				const loginInfo = { username, email, password };
				axios // account_login_create
					.post(
						"http://22112.fullstack.clarusway.com/account/login/",
						loginInfo
					)
					.then((response) => {
						console.log(response);
						setUser(user => ({
							...user, 
							restToken: response.data.key
						}))
						const tokenInfo = { username, password };
						return axios.post(  // account_token_create
							"http://22112.fullstack.clarusway.com/account/token/",
							tokenInfo
						);
					})
					.then((response) => {
						// console.log(response);
						setUser(user => ({
							...user,
							accessToken: response.data.access,
							refreshToken: response.data.refresh,
						}))
						// console.log(user);
						setLoggedIn(true);
					})
					// .then(resetForm())
					.catch((error) => {
						console.error(
							"Error creating token: ",
							error.response.data
						);
					});
			})
			.catch((error) => {
				console.error("Error creating account: ", error.response.data);
				if (error.response.data.email[0] === 'This field must be unique.') {
					toast.error("This email address is already associated with a user account.")
				}
			});
	};

	useEffect(() => {
		console.log(user)
	}, [user]);

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
						password2: "",
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
							errors.password2 = "Passwords do not match";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(true);
						createAccount(values);
						setSubmitting(false);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="d-flex flex-column w-25 mx-auto gap-2 text-light">
							<h3 className="alkatra-class mx-auto">
								Account Registration
							</h3>

							<label htmlFor="first_name">First Name</label>
							<Field type="text" name="first_name" />
							<ErrorMessage
								className="text-danger"
								name="first_name"
								component="div"
							/>

							<label htmlFor="last_name">Last Name</label>
							<Field type="text" name="last_name" />
							<ErrorMessage
								className="text-danger"
								name="last_name"
								component="div"
							/>

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

							<label htmlFor="password_confirm">
								Confirm Password
							</label>
							<Field type="password" name="password2" />
							<ErrorMessage
								className="text-danger"
								name="password2"
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
			</Container>
			<WazFoot />
		</>
	);
};

export default Register;
