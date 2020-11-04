import React from "react";
import {Spinner} from "react-bootstrap";

export default ((show) => {
    return (
        show ?
            <div className="preloader-wrapper">
                <Spinner
                    as="span"
                    animation="grow"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                    className="p-5"
                />
                <div className="preloader">Loading...</div>
            </div> :
            null
    )
})