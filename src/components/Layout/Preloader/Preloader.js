import React from "react";
import {Spinner} from "react-bootstrap";

export default ((show) => {
    return (
        show ?
            <div>
                <Spinner animation="border" variant="primary" size="sm" />
            </div>:
            null
    )
})