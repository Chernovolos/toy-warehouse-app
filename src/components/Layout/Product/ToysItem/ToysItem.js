import React from "react";
import {Button, Col, Table} from "react-bootstrap";

const ToysItem = ((props) => {
    let { list, onToyEdit, onToyCreate } = props;

    return (
        <Col>
            <Table striped bordered variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                        <th>
                            <Button onClick={() => {onToyCreate()}} variant="success" size="sm"  className="mr-3 text-uppercase">create</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.map(({id, category, description, name, price, quantity, totalCost}) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{category.name}</td>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td>{price}$</td>
                                    <td>{quantity}</td>
                                    <td>{totalCost}$</td>
                                    <td>
                                        <Button onClick={() => onToyEdit(id)} variant="info" size="sm" className="text-uppercase">edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
});

export default ToysItem;
