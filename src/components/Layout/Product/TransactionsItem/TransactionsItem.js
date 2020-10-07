import React from "react";
import {Button} from "react-bootstrap";

export const TransactionItem = (props) => {
    let {transaction, detailsTransactions} = props;

    return (
        <>
            <tr>
                <td>{transaction.id}</td>
                <td>{transaction.userId}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date.slice(0, 10)}</td>
                <td>
                    <Button
                        onClick={() => {detailsTransactions(transaction.id)}}
                        variant="info"
                        size="sm"
                        className="text-uppercase"
                    >
                        details
                    </Button>
                </td>
            </tr>

        </>
    );
};

export default TransactionItem;