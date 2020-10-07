import React from "react";
import {connect} from "react-redux";
import {getTransactionsList} from "../../../../actions/transactions";
import {Col, Container, Row, Table} from "react-bootstrap";
import {TransactionItem} from "../TransactionsItem/TransactionsItem";

class TransactionsList extends React.Component {

    componentDidMount() {
        this.props.getTransactionsList();
    }

    detailsTransactions = (id) => {
        console.log("id", id);
        this.props.history.push({ pathname: `/transactions/${id}`});
    };

    render() {
        let {transactionsList} = this.props;

        return (
            <Container>
                <Row className="justify-content-between">
                    <Col sm={7}>
                        <h1>Transaction</h1>
                        <Table striped bordered variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Id</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        transactionsList.map((transaction) => {
                                            return <TransactionItem
                                                        key={transaction.id}
                                                        transaction={transaction}
                                                        detailsTransactions={this.detailsTransactions}
                                                    />
                                        })
                                    }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(
    state => ({
        transactionsList: state.transactions.transactionsList
    }),
    dispatch => ({
        getTransactionsList: () => dispatch(getTransactionsList())
    })
)(TransactionsList);