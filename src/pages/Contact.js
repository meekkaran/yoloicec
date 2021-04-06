import React from 'react'
import "./contact.css";

function Contact() {
    return (
        <div>
        <div className="app">
            <form className="forms">
                <h2>Contact us...</h2>

                <label>Name</label>
                <input placholder="name"/>

                <label>email</label>
                <input placholder="Email"/>

                <label>Message</label>
                <textarea placeholder="Message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>

        </div>
    )
}

export default Contact
