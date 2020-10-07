import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {withFormik} from "formik";
import {createNewIncomingTransactions, getToy, getUpdateToy} from "../../../../actions/toys";
import {NEW_ID} from "../../../../constants/route";

class FormProduct extends React.Component {

    componentDidMount() {
        let toyId = this.props.match.params.id;
        console.log(toyId);
        this.props.getToy(toyId);
    }

    onUpdateUserCancel = () => {
        this.props.history.push({pathname: "/toys"})
    };

    render() {
        const { match, values, handleChange, handleBlur, categoryList, errors, touched } = this.props;
        let isNew = match.params.id === NEW_ID;
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name :</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && <div className="feedback">{errors.name}</div>}
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Description :</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {errors.description && touched.description && <div className="feedback">{errors.description}</div>}
                        </Form.Group>

                        <Form.Group controlId="formPrice">
                            <Form.Label>Price :</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            {errors.price && touched.price && <div className="feedback">{errors.price}</div>}
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Category :</Form.Label>
                            <Form.Control as="select"
                                name="category"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                {
                                    categoryList.map(({id, name}) => {
                                        return (
                                            <option key={id}>{name}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formQuantity">
                            <Button
                                onClick={() => {this.onUpdateUserCancel()}}
                                variant="danger text-uppercase"
                                className="mr-3"
                                >
                                cancel
                            </Button>
                            {
                                isNew ?
                                    <Button
                                        onClick={() => {this.props.incomingTransactions(values)}}
                                        type="submit"
                                        variant="success text-uppercase"
                                        className="mr-3"
                                    >
                                        create
                                    </Button>:
                                    <Button
                                        onClick={() => {this.props.getUpdateToy(this.props.match.params.id, values)}}
                                        type="submit"
                                        variant="success text-uppercase"
                                        className="mr-3"
                                    >
                                        update
                                    </Button>

                            }
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const EditWithForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        let isNew = props.match.params.id === NEW_ID;
        let values = {
            name: "",
            description: "",
            price: "",
            category: "",
        };
        if (!isNew && props.toy) {
            console.log("edit mode INITIALIZING FORM WITH USER");
            values = {...props.toy};
        } else {
            console.log("create mode INITIALIZING FORM WITHOUT USER");
        }
        console.log(values);
        return values;
    },

    // Custom sync validation
    validate: values => {
        const errors = {};
        console.log(values);

        if (!values.name) {
            errors.name = "Заполните это поле";
        }
        if(!values.description) {
            errors.description = "Заполните это поле";
        }
        if(!values.price) {
            errors.price = "Заполните это поле";
        }
        if(!values.category) {
            errors.category = "Заполните это поле";
        }
        return errors;
    },

    handleSubmit: (values, {props}) => {
        console.log(values);
        props.onSubmit(values);
    },

    displayName: "FormProduct",
})(FormProduct);

export default connect(
    state => ({
        toy: state.toys.toy,
        categoryList: state.categoryReducer.categoryList,
    }),
    dispatch => ({
        getToy: (id) => dispatch(getToy(id)),
        getUpdateToy: (id, toy) => dispatch(getUpdateToy(id, toy)),
        incomingTransactions: (toy, transaction) => dispatch(createNewIncomingTransactions(toy, transaction))
    })
)(EditWithForm);