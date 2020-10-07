import React from 'react';
import ProductListItem  from '../ProductListItem/ProductListItem';
import { connect } from "react-redux";
import {Row} from "react-bootstrap";
// import {getToysList} from "../../../../actions/actionsProducts";

export class ProductsList extends React.Component {
    // componentDidMount() {
    //     this.props.initialize()
    // }

    render() {
        return (
            <Row>
                <ProductListItem list={this.props.listToys}/>
            </Row>
        );
    }
}

export default connect(
   state => ({
       listToys: state.products.listToys
   }),
)(ProductsList);