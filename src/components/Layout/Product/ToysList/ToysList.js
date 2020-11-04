import React from "react";
import ToysItem  from "../ToysItem/ToysItem";
import { connect } from "react-redux";
import {Row, Container, Col, Card} from "react-bootstrap";
import { getToysList } from "../../../../actions/toys";
import {NEW_ID} from "../../../../constants/route";
import Preloader from "../../Preloader/Preloader";

class ToysList extends React.Component {
    componentDidMount() {
        if(this.props.token){
            this.props.initialize();
        }
    }

    onToyEdit = (id) => {
        console.log(id, this.props.history);
        this.props.history.push(`/toys/${id}`);
    };

    onToyCreate = () => {
         this.props.history.push({pathname: `/toys/${NEW_ID}`})
    };

    render() {
        const {preloader, error} = this.props;
        return (
            <>
                {
                    preloader ?
                        <Container>
                            <Row className="justify-content-center">
                                <Col sm={8}>
                                    <Preloader show={preloader}/>
                                </Col>
                            </Row>
                        </Container> :
                        <Container>
                            <Row>
                                {error ?
                                    <Card>
                                        <Card.Body>{error.response.statusText}</Card.Body>
                                    </Card> :
                                    null
                                }
                                <ToysItem
                                    list={this.props.listToys}
                                    onToyEdit={this.onToyEdit}
                                    onToyCreate={this.onToyCreate}
                                />
                            </Row>
                        </Container>
                }
            </>
        );
    }
}

export default connect(
   state => ({
       listToys: state.toysReducer.listToys,
       error: state.toysReducer.error,
       token: state.login.token,
       preloader: state.toysReducer.preloader,
   }),
    dispatch => ({
        initialize: () => dispatch(getToysList()),
    })
)(ToysList);