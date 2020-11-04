import React from "react";
import Login from "./Login/Login";
import ToysList from "./Product/ToysList/ToysList";
import FormProduct from "./Product/FormProduct/FormProduct";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {initializeLayoutPage, logOut} from "../../actions/login";
import Header from "./Header/Header";
import TransactionsList from "./Product/TransactionsList/TransactionsList";
import DetailsTransactions from "./Product/DetailsTransactions/DetailsTransactions";
import {CategoryList} from "./Product/CategoryList/CategoryList";
import {Col, Container, Row} from "react-bootstrap";
import Preloader from "./Preloader/Preloader";

class Layout extends React.Component {

    componentDidMount() {
        this.props.initializeLayoutPage();
    }

    render() {
        let { isAuthorized, preloader } = this.props;
        return (
            <>
            {
                preloader ?
                    <Container>
                        <Row className="justify-content-center">
                            <Col sm={8} className="mt-5">
                                <Preloader show={preloader}/>
                            </Col>
                        </Row>
                    </Container> :
                    <Router>
                        {
                            isAuthorized ?
                                <>
                                    <Header logOut={this.props.logOut}/>
                                    <Switch>
                                        <Route path="/toys/:id" component={FormProduct}/>
                                        <Route path="/transactions/:id" component={DetailsTransactions}/>
                                        <Route path="/transactions" component={TransactionsList}/>
                                        <Route path="/categories" component={CategoryList}/>
                                        <Route exect path="/toys" component={ToysList}/>
                                        <Redirect to="/toys"/>
                                    </Switch>
                                </> :
                                <Switch>
                                    <Route path="/login" component={Login}/>
                                    <Redirect to="/login"/>
                                </Switch>
                        }
                    </Router>
            }
            </>
        );
    }
}

export default connect(
    state => ({
        isAuthorized: state.login.isAuthorized,
        preloader: state.login.preloader,
    }),
    dispatch => ({
        initializeLayoutPage: () => dispatch(initializeLayoutPage()),
        logOut: () => dispatch(logOut())
    })
)(Layout);