import React from 'react'
import {Carousel} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import './Home.css'
import {
MDBView,MDBMask
} from "mdbreact";


function Home() {
    return (
        <div>
            <div className="top">
        <div className="top1">
        <ul>
            <li className="yolo"> YOLO-ICEC</li>
            <li> <img src="./iceimage/icecream.png"  className="firstimage"/></li>
            <li> <img src="./iceimage/milkshake.png" className="firstimage" /></li>
            <li> <img src="./iceimage/cocktail.png" className="firstimage"/></li>    
        </ul>
        </div>
    </div>




    <Carousel>
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing1.jpeg">
            <MDBMask overlay="pink-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>YOLO_ICEC</h2>
            </Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing2.jpeg">
            <MDBMask overlay="pink-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}}>YOLO_ICEC </h2>
            </Animated>
            </MDBMask>
          </MDBView></Carousel.Item>

          <Carousel.Item interval={3000}>
          <MDBView src="../Images/landing3.jpeg">
            <MDBMask overlay="pink-light" className="flex-center flex-column text-white text-center">
            <Animated animationIn="fadeInDownBig">
              <h2 className="head1" style={{fontSize:'70px'}} >YOLO_ICEC</h2>
            </Animated>
            </MDBMask>
          </MDBView></Carousel.Item>
          
          </Carousel>

    {/* main content */}
    <main>
        <div className="mainintro" style={{paddingBottom:'1em'}}>
         <h1 style={{textAlign:'center'}}>YOLO MIKLSHAKES AND ICECREAMS</h1>
         <p style={{textAlign:'center'}}>For the thickest Milkshakes , Amazing icecream & Fresh virgin cocktails</p>
         </div>
         <div className="row">
         <div className="col-lg-4 col-md-6">
         <div className="available"> 
         <a href="/Icecreams"><button className="btn2">Ice Creams</button></a>
         <img src="../iceimage/icecream.png"/>
         <p>We offer tasty ice creams that come in various flavours.
           they are yummy and sweetened frozen ou would not regret.
           This is your one stop ice cream shop..
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="available">
         <a href="/Milkshakes"><button className="btn2">MilkShakes</button></a>   
         <img src="../iceimage/milkshake.png"/>
         <p> We offer healthiest milkshakes well prepared for you.
           they come in various flavours from  milk flavoured to fruit flavoured.
           Our Killer Milkshakes That Will Rock Your World
         </p>
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="available"> 
         <a href="/Cocktails"><button className="btn2">CockTails</button></a>
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
            <h1 style={{textAlign:'left'}}>THIS WEEKS SPECIAL</h1>
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
            <Carousel>
                <Carousel.Item>
                    <video src="../video/yolo1.mp4" autoPlay loop muted/>
                </Carousel.Item>
                <Carousel.Item>
                    <video src="../video/yolo2.mp4" autoPlay loop muted/>
                </Carousel.Item>
            </Carousel> 
         <p> We offer healthiest milkshakes well prepared for you.
           they come in various flavours from  milk flavoured to fruit flavoured.
           Our Killer Milkshakes That Will Rock Your World
           Yummy IceCreams <br/>
           look At That!! :)
         </p>
         </div>
         </div>
        </div>
  


        </div>
    )
}

export default Home
