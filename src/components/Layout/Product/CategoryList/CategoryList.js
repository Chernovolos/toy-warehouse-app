
import React, {useCallback, useEffect, useState} from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    createNewCategory, getCategoryItem,
    getCategoryList,
    removeCategory,
    updateCategory
} from "../../../../actions/categories";
import CategoryItem from "../CategoryItem/CategoryItem";
import ModalCategory from "../../ModalCategory/ModalCategory";

export const CategoryList = (props) => {
    const dispatch = useDispatch();

    const token = useSelector(state => state.login.token, shallowEqual);

    useEffect(() => {
        if(token) {
            dispatch(getCategoryList());
        }

    }, [dispatch, token]);

    const categoryList = useSelector(state => state.categoryReducer.categoryList, shallowEqual);

    const [isAddCategory, setIsAddCategory] = useState(false);
    const [isEditCategory, setIsEditCategory] = useState(false);


    const addCategory = useCallback(
        (newCategory) => {
            dispatch(createNewCategory(newCategory));
        },
        [dispatch]
    );

    const deleteCategory = useCallback(
        (id) => {
            dispatch(removeCategory(id));
        },
        [dispatch]
    );

    const editCategory = useCallback(
        (id, category) => {
            dispatch(updateCategory(id, {...category, category}));
        },
        [dispatch]
    );

    const getCategory = useCallback(
        (id) => {
            setIsEditCategory(true);
            dispatch(getCategoryItem(id));
        },
        [dispatch]
    );

    const isAdd = () => {
        setIsAddCategory(true);
    };

    const onClose = () => {
        setIsAddCategory(false);
        setIsEditCategory(false);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Categories</h4>
                    <Table striped bordered variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th/>
                                <th className="text-center">
                                    <Button
                                        onClick={() => {isAdd()}}
                                        variant="success"
                                        size="sm"
                                        className="text-uppercase"
                                    >
                                        create
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            categoryList.map((category) => {
                                return (
                                    <CategoryItem
                                        key={category.id}
                                        category={category}
                                        getCategory={getCategory}
                                        deleteCategory={deleteCategory}
                                    />
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Col>
                <ModalCategory
                    show={isAddCategory}
                    isEditCategory={isEditCategory}
                    onClose={onClose}
                    editCategory={editCategory}
                    addCategory={addCategory}
                />
            </Row>
        </Container>
    )
};

// {
//     isAdd ?
//         <Col sm={6}>
//             <Form onSubmit={addCategory}>
//                 <Form.Group>
//                     <Form.Control
//                         type="text"
//                         name="newCategory"
//                         placeholder="create category"
//                         onChange={onInputChange}
//                         value={newCategory}
//                     />
//                 </Form.Group>
//                 <Button
//                     type="submit"
//                     variant="outline-success text-uppercase"
//                     className="mr-2"
//                 >
//                     add
//                 </Button>
//                 <Button
//                     onClick={() => {close()}}
//                     type="button"
//                     variant="outline-danger text-uppercase"
//                     className="mr-2"
//                 >
//                     close
//                 </Button>
//             </Form>
//         </Col> :
//         <Col sm={12}>
//             <Button
//                 onClick={() => {createCategory()}}
//                 type="submit"
//                 variant="outline-success text-uppercase"
//                 className="mr-2"
//             >
//                 create
//             </Button>
//             <Button
//                 onClick={() => {checkIsDelete()}}
//                 type="submit"
//                 variant="outline-danger text-uppercase"
//                 className="mr-2"
//             >
//                 delete
//             </Button>
//         </Col>
// }
// {
//     isDelete?
//         <Col sm={6}>
//             <Button
//                 onClick={() => {close()}}
//                 variant="outline-danger text-uppercase"
//                 className="mr-2"
//             >
//                 close
//             </Button>
//             <ListGroup className="mt-4">
//                 {
//                     categoryList.map((category) => {
//                         return (
//                             <ListGroup.Item
//                                 action onClick={() => {deleteCategory(category.id)}}
//                                 key={category.id}
//                             >
//                                 {category.name}
//                             </ListGroup.Item>
//                         )
//                     })
//                 }
//             </ListGroup>
//         </Col> :
//         <Col sm={4}>
//             <Form.Group controlId="categories" className="mt-3">
//                 <Form.Control as="select" onChange={onInputChange}>
//                     <option>Categories</option>
//                     {
//                         categoryList.map((category) => {
//                             return (
//                                 <CategoryItem
//                                     key={category.id}
//                                     category={category}
//                                 />
//                             )
//                         })
//                     }
//                 </Form.Control>
//             </Form.Group>
//         </Col>
// }

