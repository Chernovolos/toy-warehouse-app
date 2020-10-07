import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

class Header extends React.Component {


    render() {
        let {logOut} = this.props;
        return (
            <div className="mb-3">
                <Container>
                    <header>
                        <Navbar collapseOnSelect expand="lg"   bg="light" variant="light">
                            <Navbar.Brand className="text-uppercase ">
                                <Link to="/toys">
                                    logo
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="nav-toggle responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav.Item className="text-uppercase ml-5">
                                    <Link to="#">
                                        about
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="text-uppercase ml-5">
                                    <Link to="/transactions">
                                        transactions
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="text-uppercase ml-5">
                                    <Link
                                        to="/login"
                                        onClick={() => logOut()}
                                    >
                                        log out
                                    </Link>
                                </Nav.Item>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                </Container>
            </div>
        );
    }
}

export default withRouter(Header);