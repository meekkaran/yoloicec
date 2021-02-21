import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './topbar.css'
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
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
      <div className="top">
        <div className="top1">
        <ul>
            <li className="yolo"> YOLO-ICEC</li>
            <li> <img src="./iceimage/icecream.png" /></li>
            <li> <img src="./iceimage/milkshake.png" /></li>
            <li> <img src="./iceimage/cocktail.png" /></li>    
            <li className="top2"><img src="./iceimage/facebook.png" /></li>
            <li className="top2"><img src="./iceimage/twitter.png" /></li>
            <li className="top2"><img src="./iceimage/instagram.png" /></li>
        </ul>
        </div>
      </div>
    <Router>
      <MDBNavbar className="navbar" color="pink" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active >
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"> Our Menu</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem  style={{"font-size":"25px"}} href="#!">Our IceCreams</MDBDropdownItem>
                  <MDBDropdownItem style={{"font-size":"25px"}} href="#!">Our MilkShakes</MDBDropdownItem>
                  <MDBDropdownItem style={{"font-size":"25px"}} href="#!">Our CockTails</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Order</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Location</MDBNavLink>
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