import React, {useEffect} from "react";
import {Container, Row, Col, ListGroup, Card} from "react-bootstrap";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTransactionsIdItem} from "../../../../actions/transactions";

export const DetailsTransactions = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getTransactionsIdItem(id));
    }, [dispatch, props.match.params.id]);

    const transactionsId = useSelector((state) => state.transactions.transactionsId, shallowEqual);
    console.log("transactionId", transactionsId);



    // const incomingTransactions = (transaction) => {
    //     transaction.toys.map(({id, name, description, price, totalCost, quantity}) => {
    //         return (
    //             <Col sm={4}>
    //                 <ListGroup key={id}>
    //                     <ListGroupItem>
    //                         <span>incoming</span>
    //                     </ListGroupItem>
    //                     <ListGroupItem>
    //                         <span>{name}</span>
    //                     </ListGroupItem>
    //                     <ListGroupItem>
    //                         <span>description: {description}</span>
    //                     </ListGroupItem>
    //                     <ListGroupItem>
    //                         <span>price: {price}</span>
    //                     </ListGroupItem>
    //                     <ListGroupItem>
    //                         <span>totalCost: {totalCost}</span>
    //                     </ListGroupItem>
    //                     <ListGroupItem>
    //                         <span>quantity: {quantity}</span>
    //                     </ListGroupItem>
    //                     {/*<ListGroupItem key={category.id}>*/}
    //                     {/*    <span>category: {category.name}</span>*/}
    //                     {/*</ListGroupItem>*/}
    //                 </ListGroup>
    //             </Col>
    //         )
    //     })
    // };
    // let {toys} = transactionsId;
    //
    // console.log("toys", toys)
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Type: {transactionsId.type}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>user Id: {transactionsId.userId}</ListGroup.Item>
                            <ListGroup.Item>{console.log(transactionsId.toys)}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default DetailsTransactions;

// {
//     transactionsId.map(({toys}) => {
//         return (
//             toys.map((toy) => {
//                 console.log(toy);
//                 return (
//                     <Col sm={4}>
//                         <ListGroup key={toy.id}>
//                             <ListGroupItem>
//                                 <span>{toy.name}</span>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <span>description: {toy.description}</span>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <span>price: {toy.price}</span>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <span>totalCost: {toy.totalCost}</span>
//                             </ListGroupItem>
//                             <ListGroupItem>
//                                 <span>quantity: {toy.quantity}</span>
//                             </ListGroupItem>
//                             {/*<ListGroupItem key={category.id}>*/}
//                             {/*    <span>category: {category.name}</span>*/}
//                             {/*</ListGroupItem>*/}
//                         </ListGroup>
//                     </Col>
//                 )
//             })
//         )
//     })
// }

