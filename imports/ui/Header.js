import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





// Header component - represents a header menu
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="main-header">
                <Row>
                    <Col>
                        <div>
                            <Navbar color="light" light expand="md">
                                <Container>
                                    <NavbarBrand href="/">
                                        <img className="logo" src="/img/LogoWawrzyny.png" alt="Wawrzyny" />
                                    </NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar>
                                            <NavItem>
                                                <NavLink href="/components/">Zaloguj</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="#">Zarejestuj się</NavLink>
                                            </NavItem>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav >
                                                    <FontAwesomeIcon icon="cog" />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>
                                                        Spotkania Ministerstw
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Mój Profil
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Wyloguj
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Nav>
                                    </Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}