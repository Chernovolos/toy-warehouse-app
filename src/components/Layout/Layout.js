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

class Layout extends React.Component {

    componentDidMount() {
        this.props.initializeLayoutPage();
    }

    render() {
        let { isAuthorized } = this.props;
        return (
            <Router>
                {
                    isAuthorized ?
                        <>
                            <Header logOut={this.props.logOut}/>
                                <Switch>
                                    <Route path="/toys/:id" component={FormProduct}/>
                                    <Route path="/transactions/:id" component={DetailsTransactions}/>
                                    <Route path="/transactions" component={TransactionsList}/>
                                    <Route exect path="/toys" component={ToysList}/>
                                    <Redirect to="/toys"/>
                                </Switch>
                        </>:
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Redirect to="/login"/>
                        </Switch>
                }
            </Router>
        );
    }
}

export default connect(
    state => ({
        isAuthorized: state.login.isAuthorized,
    }),
    dispatch => ({
        initializeLayoutPage: () => dispatch(initializeLayoutPage()),
        logOut: () => dispatch(logOut())
    })
)(Layout);