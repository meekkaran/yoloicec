import React from 'react'

function Order() {
    return (
        <div>

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
            
        </div>
    )
}

export default Order
