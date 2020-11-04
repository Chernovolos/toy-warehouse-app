import React from "react";
import {Badge, Button} from "react-bootstrap";

export const TransactionItem = (props) => {
    let {transaction, detailsTransactions} = props;
    let incoming = "success";
    let outcoming = "danger";
    return (
        <>
            <tr>
                <td>{transaction.id}</td>
                <td>{transaction.userId}</td>
                <td>
                    <h5>
                        <Badge
                            variant={transaction.type === "incoming" ? incoming: outcoming}
                            className="text-uppercase">
                            {transaction.type}
                        </Badge>
                    </h5>
                </td>
                <td>
                    {transaction.date.slice(0, 10)}
                </td>
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