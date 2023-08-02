import React from 'react'
import { Link } from "react-router-dom";
import BurgerImage from "../burgerimages/burger.jpg";
import "../styles/Home.css";



export const Home = () => {
    return (
        <div
            className='mainPage'
            style={{ backgroundImage: `url(${BurgerImage})` }}
        >
            <div className='order'>
                <Link to="/menu" >
                    <button>SİPARİŞ VER</button>
                </Link>
            </div>
        </div>
    )
}
