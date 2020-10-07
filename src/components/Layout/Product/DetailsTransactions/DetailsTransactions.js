import React, {useEffect} from "react";
import {Container, Row, Col, ListGroup, ListGroupItem, Badge} from "react-bootstrap";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTransactionItem} from "../../../../actions/transactions";

export const DetailsTransactions = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        console.log("~~~~~~~~~~~~~~~~~BEFORE DISPATCH");
        dispatch(getTransactionItem(id));
    }, []);

    const transaction = useSelector((state) => state.transactions.transaction, shallowEqual);

    console.log("transactionId before map", transaction);

    return (
        <Container>
            <Row>
                {
                    transaction && transaction.toys.map((toy) => {
                        return (
                            <Col sm={6} key={toy.id}>
                                <ListGroup>
                                    <ListGroupItem>
                                        <span> name: {toy.name}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>description: {toy.description}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>price: {toy.price}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>totalCost: {toy.totalCost}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span>quantity: {toy.quantity}</span>
                                    </ListGroupItem>
                                    <ListGroupItem key={toy.category.id}>
                                        <span>category: {toy.category.name}</span>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};

export default DetailsTransactions;




