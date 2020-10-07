import React from 'react';
import { withFormik } from 'formik';
import {Col, Container, Row, Form, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import { loginUser} from "../../../actions/login";
import Preloader from "../Preloader/Preloader";

class Login extends React.Component {

   // state = {
   //     email: "",
   //     password: "",
   //
   // };

    // onInputChange = ({target}) => {
    //     this.setState({
    //         [target.name]: target.value,
    //     });
    // };

    // onFormSubmit = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     this.props.authorization(values);
    //     this.props.history.push("/toys");
    //     // this.props.profile(this.state)
    //     // this.setState({
    //     //     email: "",
    //     //     password: "",
    //     // })
    // };

    state = {
        isLoading: false,
    };

    render() {
        let { preloader, values, handleChange, handleBlur, errors, touched, handleSubmit } = this.props;

        return (
            <Container>
                {
                    preloader ?
                        <Row className="justify-content-center mt-5">
                            <Preloader show={preloader}/>
                        </Row>:
                        <Row className="justify-content-center mt-5">
                            <Col sm={5}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="email">
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            placeholder="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && <div className="feedback">{errors.email}</div>}
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Control
                                            type="text"
                                            name="password"
                                            placeholder="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Form.Group>
                                    {errors.password && touched.password && <div className="feedback">{errors.password}</div>}

                                    <Form.Group>
                                        <Button
                                            onClick={() => this.props.authorization(values)}
                                            type="submit"
                                            variant="outline-success text-uppercase"
                                        >
                                           "Login"
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    }
            </Container>
        )
    }
}





const LoginWithForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),

    // Custom sync validation
    validate: values => {
        const errors = {};
        console.log(values);

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if(!values.passsword) {
            errors.passsword = "Required";
        }
        return errors;
    },

    handleSubmit: (values, {props}) => {
        console.log("submit",values);
        props.onSubmit(values);
        props.authorization(values);
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




