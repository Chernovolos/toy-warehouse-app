import React, {useCallback, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {shallowEqual, useSelector} from "react-redux";

const FormCategory = (props) => {
  const {addCategory, onClose, editCategory} = props;
    const category = useSelector(state => state.categoryReducer.category, shallowEqual);

    const [name, setUpdateCategoryName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        editCategory(category.id, {...category, name})
    };
    const onInputChange = useCallback(
        ({target}) => {
            setUpdateCategoryName(target.value)
        }, []
    );
    return (
        <Form onSubmit={addCategory}>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="newCategory"
                    placeholder="create category"
                    onChange={onInputChange}
                    value={name}
                />
            </Form.Group>
            <Form.Group>
                <Button
                    onClick={onClose}
                    variant="outline-secondary"
                    className="mr-3 text-uppercase"
                >
                    Close
                </Button>
                <Button
                    type="submit"
                    variant="outline-primary"
                    className="text-uppercase"
                >
                    Save
                </Button>
            </Form.Group>
        </Form>
    )
};