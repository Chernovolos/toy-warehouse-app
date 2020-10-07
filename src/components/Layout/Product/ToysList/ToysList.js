import React from "react";
import ToysItem  from "../ToysItem/ToysItem";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { getToysList } from "../../../../actions/toys";
import { CategoryList } from "../CategoryList/CategoryList";
import {NEW_ID} from "../../../../constants/route";

class ToysList extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    onToyEdit = (id) => {
        console.log(id, this.props.history);
        this.props.history.push(`/toys/${id}`);
    };

    onToyCreate = () => {
         this.props.history.push({pathname: `/toys/${NEW_ID}`})
    };

    render() {
        return (
            <>
                {
                    this.props.error ?
                        <Container>
                            <h2>{this.props.error.response.statusText}</h2>
                        </Container> :
                        <Container>
                            <Row className="justify-content-between">
                                <ToysItem
                                    list={this.props.listToys}
                                    onToyEdit={this.onToyEdit}
                                    onToyCreate={this.onToyCreate}
                                />
                                <Col sm="3">
                                    <CategoryList/>
                                </Col>
                            </Row>
                        </Container>
                }
            </>
        );
    }
}

export default connect(
   state => ({
       listToys: state.toys.listToys,
       error: state.toys.error,
   }),
    dispatch => ({
        initialize: () => dispatch(getToysList()),
    })
)(ToysList);