import  {  useState,useEffect } from 'react'
import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import {
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
    DropdownItem,
} from 'reactstrap';

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggle = () => {
        if (windowWidth <= 992) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 992) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const basket=useSelector(state=>state.basket.items)

    return (
            <Navbar {...args} fixed="top" style={{ backgroundColor: scrollPosition > 10 ? 'rgb(252,252,252)' : 'transparent' }}>
                <NavbarBrand>Product . </NavbarBrand>
                <Nav className='middle'>
                    <Link style={{textDecoration:"none"}} to={"/"}>NEW</Link>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            MEN
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Elements</DropdownItem>
                            <DropdownItem>T-Shirt</DropdownItem>
                            <DropdownItem>Underware</DropdownItem>
                            <DropdownItem>Clothing</DropdownItem>
                            <DropdownItem>Accesories</DropdownItem>
                            <DropdownItem>Briefs</DropdownItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Menu Two
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>T-Shirt</DropdownItem>
                                    <DropdownItem>Underware</DropdownItem>
                                    <DropdownItem>Clothing</DropdownItem>
                                    <DropdownItem>Accesories</DropdownItem>
                                    <DropdownItem>Briefs</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <DropdownItem>Menu Three</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavLink href='/women'>WOMEN</NavLink>
                    <NavLink href='/accesories'>ACCESORIES</NavLink>
                    <NavLink href='jewelry'>JEWELERY</NavLink>
                    <NavLink href='about'>ABOUT</NavLink>
                    <NavLink href='contact'>CONTACT</NavLink>
                </Nav>
                <Nav className='last'>
                    <h5><FaSearch /></h5>
                    <div>
                        <h5 onClick={() => setIsSidebarOpen(!isSidebarOpen)}><FaShoppingCart /></h5>
                        <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
                            {basket && basket.map(item=>(
                                <div key={item.Id}>
                                     <img src={item.ProductImage} alt=""  style={{width:"50px"}}/>
                                        <p>{item.Name}</p>
                                </div>
                            ))}
                                <div className='butonlar'>
                                    <button onClick={() => setIsSidebarOpen(false)}>X</button>
                                    <button ><Link to="/Checkout" style={{color:"black" , textDecoration:"none"}}>Checkout</Link></button>

                                </div>
                        </div>
                    </div>
                   <button style={{border:"transparent" , backgroundColor:"transparent"}}><Link  style={{color:"black" }} to={"/Admin"}><IoPersonSharp /></Link> </button> 
                </Nav>
                {windowWidth <= 992 && <NavbarToggler onClick={toggle} />}
                <Collapse isOpen={isOpen && windowWidth <= 992} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">New</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Elements</DropdownItem>
                                <DropdownItem>T-Shirt</DropdownItem>
                                <DropdownItem>Underware</DropdownItem>
                                <DropdownItem>Clothing</DropdownItem>
                                <DropdownItem>Accesories</DropdownItem>
                                <DropdownItem>Shoes</DropdownItem>
                                <DropdownItem>Briefs</DropdownItem>
                                <DropdownItem>Menu Two</DropdownItem>
                                <DropdownItem>Menu Three</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/women">Women</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/accesories">Accesories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/jewelry">Jewelery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

    );
}

export default Example;
