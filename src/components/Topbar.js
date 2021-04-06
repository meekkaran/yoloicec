import React, { Component } from "react";
import {Nav} from 'react-bootstrap';
import './topbar.css'
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBView,MDBMask, MDBCol, MDBContainer, MDBRow, MDBFooter
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Topbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <>
      
    <Router>
      <MDBNavbar className="navbar" color="pink" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">YoloIcec</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active >
              <Nav.Link href="/">Home</Nav.Link>
            </MDBNavItem>
            <MDBNavItem>
              <Nav.Link href="/About">About Us</Nav.Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"> Our Flavours</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem  style={{"font-size":"25px"}} href="/Icecreams">Our IceCreams</MDBDropdownItem>
                  <MDBDropdownItem style={{"font-size":"25px"}} href="/Milkshakes">Our MilkShakes</MDBDropdownItem>
                  <MDBDropdownItem style={{"font-size":"25px"}} href="/Cocktails">Our CockTails</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
            </MDBNavItem>
            <MDBNavItem>
              <Nav.Link href="/Order">Order</Nav.Link>
            </MDBNavItem>
            <MDBNavItem>
              <Nav.Link href="/Location">Location</Nav.Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" style={{"font-size":"25px"}} />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>

</>
    );
  }
}

export default Topbar;