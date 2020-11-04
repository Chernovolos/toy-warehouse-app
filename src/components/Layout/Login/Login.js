import React from 'react';
import { withFormik } from 'formik';
import {Col, Container, Row, Form, Button, Spinner} from 'react-bootstrap';
import {connect} from "react-redux";
import { loginUser} from "../../../actions/login";

class Login extends React.Component {

    state = {
        isLoading: false,
    };

    render() {
        let { values, handleChange, handleBlur, errors, touched, handleSubmit } = this.props;

        return (
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col sm={5}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                {errors.email && touched.email && <div className="feedback text-danger">{errors.email}</div>}
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                {errors.password && touched.password && <div className="feedback text-danger">{errors.password}</div>}
                                <Form.Control
                                    type="text"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Form.Group>

                            <Form.Group>
                                {
                                    this.props.preloader ?
                                        <Button variant="success text-uppercase" disabled>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </Button>:
                                        <Button
                                            disabled={Object.keys(errors).length || !touched}
                                            onClick={() => this.props.authorization(values)}
                                            type="submit"
                                            variant="success text-uppercase"
                                        >
                                            Login
                                        </Button>
                                }
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const LoginWithForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        email: "",
        password: "",
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = "Required";
        }
        console.log(errors);
        return errors;
    },

    handleSubmit: (values, {props}) => {
        // console.log("submit",values);
        props.onSubmit(values);
        // props.authorization(values);
        props.history.push("/toys");
    },
    displayName: "LoginForm",
})(Login);

export default connect(
    state => ({
        preloader: state.login.preloader,
    }),
    dispatch => ({
        authorization: (item) => (dispatch(loginUser(item))),
    })
)(LoginWithForm);




