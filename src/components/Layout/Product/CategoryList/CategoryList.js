import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getCategoryList} from "../../../../actions/categories";

export const CategoryList = (props) => {
    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.categoryReducer.categoryList, shallowEqual);

    useEffect(() => {
        dispatch(getCategoryList())
    }, [dispatch]);

    return (
        <Form.Group controlId="categories">
            <Form.Control as="select">
                <option>Categories</option>
                {
                    categoryList.map(({id, name, category}) => {
                        return (
                            <option key={id}>{category} {name}</option>
                        )
                    })
                }
            </Form.Control>
        </Form.Group>
    )
};