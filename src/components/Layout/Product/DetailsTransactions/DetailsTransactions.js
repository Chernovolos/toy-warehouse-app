import React, {useEffect} from "react";
import {Container, Row, Col, ListGroup, ListGroupItem, Badge, Button} from "react-bootstrap";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTransactionItem} from "../../../../actions/transactions";
import {NEW_ID} from "../../../../constants/route";

export const DetailsTransactions = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        console.log("~~~~~~~~~~~~~~~~~BEFORE DISPATCH");
        dispatch(getTransactionItem(id));
    }, []);

    const transaction = useSelector((state) => state.transactions.transaction, shallowEqual);

    const closeTransactionDetails = () => {
        props.history.push({pathname: "/transactions"})
    };

    let incoming = "success";
    let outcoming = "danger";

    return (
        <Container>
            <Row>
                <Col className="mb-4">
                    <Button
                        onClick={() => {closeTransactionDetails()}}
                        variant="danger"
                        className="text-uppercase"
                    >
                        close
                    </Button>
                </Col>
            </Row>
            <Row>

                {
                    transaction && transaction.toys.map((toy) => {
                        return (
                            <Col sm={6} key={toy.id}>
                                <ListGroup>
                                    <ListGroupItem>
                                        <h3>
                                            <Badge
                                                variant={transaction.type === "incoming" ? incoming: outcoming}
                                                className="text-uppercase">
                                                {transaction.type}
                                            </Badge>
                                        </h3>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span className="font-weight-bold"> name: {toy.name}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span className="font-weight-bold">description: {toy.description}</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span className="font-weight-bold">price: {toy.price}$</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span className="font-weight-bold">totalCost: {toy.totalCost}$</span>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <span className="font-weight-bold">quantity: {toy.quantity}</span>
                                    </ListGroupItem>
                                    <ListGroupItem key={toy.category.id}>
                                        <span className="font-weight-bold">category: {toy.category.name}</span>
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




