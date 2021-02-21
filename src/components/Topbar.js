import React from 'react';
import {Link} from 'react-router-dom';

function Topbar() {
    return (
        <div>
            <Link to="/" className="logo">
                <ul >
                    <li> YOLO-ICEC</li>
                    <li> <img src="./iceimage/icecream.png" /></li>
                    <li> <img src="./iceimage/milkshake.png" /></li>
                    <li> <img src="./iceimage/cocktail.png" /></li>
                </ul>
            </Link>
        </div>
    )
}

export default Topbar
