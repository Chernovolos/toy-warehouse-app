import React from 'react';
import {Col, ListGroup} from "react-bootstrap";

const ProductListItem = ((props) => {
    return(
        <Col sm={5}>
            <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
            </ListGroup>
        </Col>
    )
});

export default ProductListItem;
