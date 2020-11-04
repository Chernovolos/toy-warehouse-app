import React from "react";
import {Button} from "react-bootstrap";

const CategoryItem = (props) => {
    const {category, deleteCategory, getCategory} = props;

    return (
        <>
            <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td className="text-center">
                    <Button
                        onClick={() => {deleteCategory(category.id)}}
                        variant="danger"
                        size="sm"
                        className="text-uppercase"
                    >
                        delete
                    </Button>
                </td>
                <td className="text-center">
                    <Button
                        onClick={() => {getCategory(category.id)}}
                        variant="info"
                        size="sm"
                        className="text-uppercase"
                    >
                        edit
                    </Button>
                </td>
            </tr>
        </>
    )
};

export default CategoryItem;