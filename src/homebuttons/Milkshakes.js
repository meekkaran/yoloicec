import React from 'react'

function Milkshakes() {
    return (
        <div>
            


                   {/* milkshakes */}
    <milkshakes>
        <div className="mainintro" style={{paddingBottom:'1em'}}>
            <h1 style={{textAlign:'center'}}>YOUR FAV ICECREAM CORNER</h1>
        </div>

        <div className="row">
         <div className="col-lg-4 col-md-6">
         <div className="featured">
                <img src="../iceimage/14.png" />
                <img src="../iceimage/3.png" />
                <img src="../iceimage/4.png" />
         </div>
         </div>

         <div className="col-lg-4 col-md-6 ">
         <div className="featured"> 
                      <img src="../iceimage/5.png" />
                      <img src="../iceimage/6.png" />
                      <img src="../iceimage/7.png" />
         </div>
         </div>

         <div className="col-lg-4 col-md-6">
         <div className="featured"> 
                  <img src="../iceimage/8.png" />
                  <img src="../iceimage/9.png" />
                  <img src="../iceimage/10.png" />
         </div>
         </div>
        </div>
    </milkshakes>
        </div>
    )
}

export default Milkshakes
