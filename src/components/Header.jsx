import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { AiFillHome } from 'react-icons/ai';
import { FaUserAstronaut, FaProjectDiagram } from 'react-icons/fa';
import { MdCode, MdOutlineContactMail } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';

import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: AiFillHome, path: '/' },
    { name: 'About', icon: FaUserAstronaut, path: '/about' },
    { name: 'Skills', icon: MdCode, path: '/skills' },
    { name: 'Projects', icon: FaProjectDiagram, path: '/projects' },
    { name: 'Contact', icon: MdOutlineContactMail, path: '/contact' },
  ];

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          className="d-lg-none"
        >
          {expanded ? <HiX /> : <HiMenu />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className="nav-item"
                onClick={closeNavbar}
              >
                <item.icon className="nav-icon" />
                <span className="nav-text">{item.name}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
