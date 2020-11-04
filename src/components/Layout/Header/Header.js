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
                    <header className="mb-4">
                        <Navbar collapseOnSelect expand="lg"   bg="light" variant="light">
                            <Navbar.Brand className="text-uppercase ">
                                <Link
                                    to="/toys"
                                    className="text-decoration-none font-weight-normal"
                                >
                                    <span className="text-info">T</span>
                                    <span className="text-secondary">W</span>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="nav-toggle responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav.Item className="text-uppercase ml-5">
                                    <Link
                                        to="#"
                                        className="text-info text-decoration-none font-weight-normal"
                                    >
                                        about
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="text-uppercase ml-5">
                                    <Link
                                        to="/categories"
                                        className="text-info text-decoration-none font-weight-normal"
                                    >
                                        categories
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="text-uppercase ml-5">
                                    <Link
                                        to="/transactions"
                                        className="text-info text-decoration-none font-weight-normal"
                                    >
                                        transactions
                                    </Link>
                                </Nav.Item>
                                <Nav.Item  className="text-uppercase ml-5">
                                    <Link
                                        to="/login"
                                        onClick={() => logOut()}
                                        className="text-info text-decoration-none font-weight-normal"
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