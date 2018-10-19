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

const items = [
    {src: '/img/backgroundMinistryLogo.svg',
    altText: 'DA Wawrzyny',
    caption: ''}
];



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
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Navbar color="light" light expand="md">
                                <NavbarBrand href="/">
                                Wawrzyny
                                {/* <img src={items.src} alt={items.altText} /> */}
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
                                                <div>
                                                    <FontAwesomeIcon icon="cog" />
                                                </div>
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
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
            // <div className="header">
            //     <div className="logo">
            //         <a href="#">
            //             <img  src="/img/backgroundMinistryLogo.svg"  alt="Wawrzyny"/>
            //         </a>
            //     </div>
            //     <div className="go-right">
            //         <div className="title">
            //             <h1>Wawrzyn</h1>
            //         </div>
            //         <div className="settings-list">
            //             <a href='#' title= "setting">
            //                 <img className="" src=""  alt="Ustawienia"/>
            //             </a>                        
            //         </div>
            //     </div>                
            // </div>
        )
    }
}