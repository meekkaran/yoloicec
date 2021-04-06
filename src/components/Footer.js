import React from 'react'
import {
 MDBCol, MDBContainer, MDBRow, MDBFooter
} from "mdbreact";
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';

function Footer() {
    return (
        <div>
            <Router>
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
              <a style={{fontSize: "22px"}} href="#!">Milkshakes</a>
            </p>
            <p>
              <a  style={{fontSize: "22px"}}href="#!">IceCreams</a>
            </p>
            <p>
              <a style={{fontSize: "22px"}} href="#!">CockTails</a>
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
    </Router>

;

        </div>
    )
}

export default Footer
