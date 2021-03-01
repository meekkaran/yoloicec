import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';
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
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">About Us</MDBNavLink>
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
              <MDBNavLink to="#!">Contact Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Order</MDBNavLink>
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

    <div className="top">
        <div className="top1">
          <img src="./iceimage/firstimage.png" className="firstimage" />
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

    {/* main content */}
    <main>
        <div className="mainintro" style={{paddingBottom:'1em'}}>
         <h1 style={{textAlign:'center'}}>YOLO MIKLSHAKES AND ICECREAMS</h1>
         <p style={{textAlign:'center'}}>For the thickest Milkshakes , Amazing icecream & Fresh virgin cocktails</p>
         </div>
         <div className="row">
         <div className="col-lg-4 col-md-6">
         <div className="available"> 
         <button className="btn2">Ice Creams</button>
         <img src="../iceimage/icecream.png"/>
         <p>We offer tasty ice creams that come in various flavours.
           they are yummy and sweetened frozen ou would not regret.
           This is your one stop ice cream shop..
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="available"> 
         <button className="btn2">MilkShakes</button>
         <img src="../iceimage/milkshake.png"/>
         <p> We offer healthiest milkshakes well prepared for you.
           they come in various flavours from  milk flavoured to fruit flavoured.
           Our Killer Milkshakes That Will Rock Your World
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="available"> 
         <button className="btn2">CockTails</button>
         <img src="../iceimage/cocktail.png"/>
         <p>We offer fresh virgin cocktails they are the best refreshing cocktails
           that come in various flavours and they are well  blended.
         </p>
         </div>
         </div>
        </div>
    </main>


{/* featured categories */}
    <featured>
        <div className="mainintro" style={{paddingBottom:'1em'}}>
            <h1 style={{textAlign:'center'}}>THIS WEEKS SPECIAL</h1>
        </div>

        <div className="row">
         <div className="col-lg-4 col-md-6">
         <div className="featured">
                <Carousel>
                <Carousel.Item interval={2000}>
                <img src="../iceimage/14.png" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img src="../iceimage/3.png" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img src="../iceimage/4.png" />
                </Carousel.Item>
                </Carousel> 
         </div>
         </div>

         <div className="col-lg-4 col-md-6 ">
         <div className="featured"> 
                      <Carousel>
                      <Carousel.Item interval={2000}>
                      <img src="../iceimage/5.png" />
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                      <img src="../iceimage/6.png" />
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                      <img src="../iceimage/7.png" />
                      </Carousel.Item>
                      </Carousel>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="featured"> 
                  <Carousel>
                  <Carousel.Item interval={2000}>
                  <img src="../iceimage/8.png" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                  <img src="../iceimage/9.png" />
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                  <img src="../iceimage/10.png" />
                  </Carousel.Item>
                  </Carousel>
         </div>
         </div>
        </div>
    </featured>




    
    {/* videos */}
    <div className="videos" style={{paddingBottom:'1em'}}>
         <h2 style={{textAlign:'center'}}>YOLO MIKLSHAKES AND ICECREAMS</h2>
         <p style={{textAlign:'center'}}>Our simple recipes and flavours</p>
         </div>

         <div className="row">
         <div className="col-lg-6 col-md-6">
         <div className="videoimage"> 
         <Carousel>

          <Carousel.Item interval={3000}>
          <MDBView src="../iceimage/a.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>YOLO ICEC </h2>
              </Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Thickest Milkshakes
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Amazing Icecream
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Fresh virgin cocktails
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../iceimage/b.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>YOLO-ICEC </h2>
              </Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Thickest Milkshakes
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Amazing Icecream
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Fresh virgin cocktails
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../iceimage/c.jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}} >YOLO ICEC </h2>
              </Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Thickest Milkshakes
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Amazing Icecream
              </h5></Animated>
              <Animated animationIn="bounceInLeft">
              <h5 style={{overflowY:'hidden'}}>Fresh virgin cocktails
              </h5></Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          </Carousel>
         </div>
         </div>

         <div className="col-lg-6 col-md-6">
         <div className="videoimage"> 
         <img src="../video/yolo1.mp4"/>
         <p> We offer healthiest milkshakes well prepared for you.
           they come in various flavours from  milk flavoured to fruit flavoured.
           Our Killer Milkshakes That Will Rock Your World
         </p>
         </div>
         </div>
        </div>
  

  {/* order */}

  <order>
        <div className="mainintro" style={{paddingBottom:'1em'}}>
         <h1 style={{textAlign:'center'}}>YOLO MIKLSHAKES AND ICECREAMS</h1>
         <p style={{textAlign:'center'}}>For the thickest Milkshakes , Amazing icecream & Fresh virgin cocktails</p>
         </div>
         <div className="row">
         <div className="col-lg-8 col-md-6">
         <div className="secondlast"> 
         <button className="btn1">ORDER ONLINE</button>
         <p>you can order online from our shop and it will delivered to you immediately.
           Delivery around cbd is free and within minutes.
         </p>
         <img src="../iceimage/order.png"/>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="secondlast"> 
         <button className="btn1">INSTORE MENU</button>
         <p> our menu has various options that you can select from.
         </p>
         <img src="../iceimage/menu.png"/>
         </div>
         </div>
        </div>
    </order>



{/* footer */}

    <MDBFooter color="pink" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#ff91af" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 style={{fontSize: "28px"}} className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i style={{fontSize: "28px"}}  className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i style={{fontSize: "28px"}}  className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i style={{fontSize: "28px"}}  className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i style={{fontSize: "28px"}}  className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i style={{fontSize: "28px"}}  className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol style={{margin: "20px"}}  md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="footerheading">Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p style={{fontSize: "22px"}}>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol style={{margin: "20px"}}  md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="footerheading">Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a style={{fontSize: "22px"}} href="#!">MDBootstrap</a>
            </p>
            <p>
              <a  style={{fontSize: "22px"}}href="#!">MDWordPress</a>
            </p>
            <p>
              <a style={{fontSize: "22px"}} href="#!">BrandFlow</a>
            </p>
            <p>
              <a  style={{fontSize: "22px"}}href="#!">Bootstrap Angular</a>
            </p>
          </MDBCol>
          <MDBCol style={{margin: "20px"}}  md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="footerheading">How to Order</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a style={{fontSize: "22px"}} href="#!">Order Online</a>
            </p>
            <p>
              <a style={{fontSize: "22px"}} href="#!">Find Our Store</a>
            </p>
            <p>
              <a style={{fontSize: "22px"}} href="#!">Call 0713201600</a>
            </p>
          </MDBCol>
          <MDBCol style={{margin: "20px"}}  md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="footerheading">Contact Us</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i style={{fontSize: "22px"}} className="fa fa-home mr-3" /> Moi Avenue, NAIROBI 10012, KENYA
            </p>
            <p>
              <i style={{fontSize: "22px"}} className="fa fa-envelope mr-3" /> customercare@yolo_icec.com
            </p>
            <p>
              <i style={{fontSize: "22px"}} className="fa fa-phone mr-3" /> + 254 713 201 600
            </p>
            <p>
              <i style={{fontSize: "22px"}} className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.YOLOIcec.com"> YOLOIcec.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
;



</>
    );
  }
}

export default Topbar;