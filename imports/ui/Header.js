import React, { Component } from 'react';
import {
    Container, Col, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
    NavbarBrand, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MINISTRY_MEETINGS_OPTION = 'Spotkania Ministerstw';
const MY_PROFILE_OPTION = 'Mój profil';
const LOG_IN_OPTION = 'Zaloguj';
const REGISTER_OPTION = 'Zarejestruj się';
const LOG_OUT_OPTION = 'Wyloguj';


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
            <Row>
                <Col>
                    <Navbar color="light" light expand="md">
                        <Container>
                            <NavbarBrand href="/">
                                <img className="logo" src="/img/LogoWawrzyny.png" alt="Wawrzyny" />
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem className='d-md-none'>
                                        <NavLink href="#">{MINISTRY_MEETINGS_OPTION}</NavLink>
                                    </NavItem>
                                    <NavItem className='d-md-none'>
                                        <NavLink href="#">{MY_PROFILE_OPTION}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">{LOG_IN_OPTION}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">{REGISTER_OPTION}</NavLink>
                                    </NavItem>
                                    <NavItem className='d-md-none'>
                                        <NavLink href="#">{LOG_OUT_OPTION}</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar className='d-none d-md-block'>
                                        <DropdownToggle nav >
                                            <FontAwesomeIcon icon="cog" />
                                        </DropdownToggle>
                                        <DropdownMenu right className="responsive-menu">
                                            <DropdownItem>{MINISTRY_MEETINGS_OPTION}</DropdownItem>
                                            <DropdownItem>{MY_PROFILE_OPTION}</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>{LOG_OUT_OPTION}</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        )
    }
}