import React from 'react'
import Burgerlogo from "../burgerimages/burgerlogo.PNG";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='main'>
                <img src={Burgerlogo} alt='' />
                <div className='mainLink'>
                    <Link to="/">
                        Anasayfa
                    </Link>
                    <Link to="/menu">
                        Menü
                    </Link>
                    <Link to="/about">
                        Hakkımızda
                    </Link>
                    <Link to="/contact">
                        İletişim
                    </Link>
                </div>
            </div>
        </div>
    )
}

// hangi path gitmesini belirlemek için to kullanılır
// değişken olursa {parantez} kullanılır sabitlerde ise ""  kullanılır