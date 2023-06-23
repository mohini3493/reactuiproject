/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, Fragment } from "react";
import '../assets/css/style.scss';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faMagnifyingGlass, faClose } from "@fortawesome/free-solid-svg-icons";
import { Badge, Image, NavDropdown, Button, Nav, Container, Form, FormGroup } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const AdminNav = () => {

  return (
    <nav className="admin-navigation">
      <Container>
        <Nav variant="pills" activeKey="1" >
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="hide-mob">
            <Nav.Link eventKey="2">
              Inbox
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="hide-mob">
            <Nav.Link eventKey="3">
              <Link to="/my-progress">Progress</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="hide-mob">
            <Nav.Link eventKey="4">
              <Link to="/referral">Referrals</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="•••" id="nav-dropdown" className="remove-caret">
            <NavDropdown.Item eventKey="4.1" className="hide-des">Inbox</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" className="hide-des"><Link to="/my-progress">Progress</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" className="hide-des"><Link to="/referral">Referrals</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.7">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <span>28 April 2022</span>
      </Container>
    </nav>
  );
}

export default function Header(props) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <Fragment>
      <header className="Header container-fluid sticky-top">
          <Link to="/home"><img src={require("../assets/images/hlogo.png")} className="Logo" alt="logo" /></Link>
          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames="NavAnimation"
            unmountOnExit
          >
            <nav className="Nav">
            <div onClick={toggleNav} className="Burger">
              <FontAwesomeIcon icon={faClose} />
            </div>
            <NavDropdown title="EN">
              <NavDropdown.Item><Link to="#">ES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="#">DE</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="#">FR</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Categories" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/category">Arts & Entertainment</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Home & Lifestyle</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category">Food</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Business</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Music</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Writing</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Design & Style</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Sports & Gaming</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">Community & Government</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category">Wellness</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/category">Science & Tech</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/category">30-Day Sessions</Link></NavDropdown.Item>
              <NavDropdown.Item href="/category" className="last-item"><Button href="#" className="dropdown-btn">Discover</Button></NavDropdown.Item>
            </NavDropdown>
              <Form className="search-form">
              <FormGroup>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input 
                    type="text"
                    name="search"
                    placeholder="Search"
                />
              </FormGroup>
            </Form>
              {!props.admin &&
                <Fragment>
                 
                  <Link to="/membership">Membership</Link>
                  <Link to="/login">Login</Link>
                </Fragment>
              }
              {props.admin &&
                <Fragment>
                  <Link to="/" className="nav-item icon has-badge">
                    <FontAwesomeIcon icon={faBell} />
                    <Badge bg="branded">19</Badge>
                  </Link>
                  <Link to="/settings" className="nav-item icon"><FontAwesomeIcon icon={faGear} /></Link>
                  <Link to="/" className="nav-item">
                    <Image src={require(`../assets/images/profile-picture.png`)}  />
                  </Link>
                </Fragment>
              }
            </nav>
          </CSSTransition>
          <div className="mobile-box">
            <div className="mobile-serach"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <button onClick={toggleNav} className="Burger">
              <img src={require('../assets/images/ios-menu.png')} />
            </button>
          </div>
      </header>
      {props.admin &&
        <AdminNav/>
      }
    </Fragment>
  );
}
