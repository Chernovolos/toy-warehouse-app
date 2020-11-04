import React, {useCallback, useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {shallowEqual,  useSelector} from "react-redux";

const ModalCategory = (props) => {
    const {addCategory, show, onClose, editCategory, isEditCategory} = props;
    const category = useSelector(state => state.categoryReducer.category, shallowEqual);
    const [name, setUpdateCategoryName] = useState("");
    const [newCategory, setNewCategory] = useState("");


    const handleSubmitEditCategory = (event) => {
        event.preventDefault();
        event.stopPropagation();

        editCategory(category.id, {...category, name});
        setUpdateCategoryName("");
        setNewCategory("");
    };

    const handleSubmitNewCategory = (event) => {
        event.preventDefault();
        event.stopPropagation();

        addCategory(newCategory);
        setUpdateCategoryName("");
        setNewCategory("");
    };

    const onInputChange = useCallback(
        ({target}) => {
            setUpdateCategoryName(target.value);
            setNewCategory(target.value);
        }, []
    );

    const renderModalNewCategory = () => {

        return (
            <Modal show={show} centered size="md" onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>New category</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmitNewCategory}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="newCategory"
                                placeholder="create category"
                                onChange={onInputChange}
                                value={newCategory}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button
                                onClick={onClose}
                                variant="secondary"
                                className="mr-3 text-uppercase"
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                disabled={!newCategory.length}
                                variant="primary"
                                className="text-uppercase"
                            >
                                Save
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    };

    const renderModalEditCategory = () => {

        return (
            <Modal show={isEditCategory} centered size="md" onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>Edit category</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmitEditCategory}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="category"
                                placeholder="edit category"
                                onChange={onInputChange}
                                value={name}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button
                                onClick={onClose}
                                variant="secondary"
                                className="mr-3 text-uppercase"
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                disabled={!name.length}
                                variant="primary"
                                className="text-uppercase"
                            >
                                Save
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    };

    return (
        <>
            {
                isEditCategory ?
                    renderModalEditCategory():
                    null
            }
            {
                show ?
                    renderModalNewCategory():
                    null
            }
        </>
    )
};

export default ModalCategory;