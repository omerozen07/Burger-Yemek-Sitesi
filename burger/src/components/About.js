import React from 'react';
import BurgerAbout from "../burgerimages/burger.jpg"
import "../styles/About.css"

export const About = () => {
    return (
        <div className='about'>
            <div className='aboutTop'
                style={{ backgroundImage: `url(${BurgerAbout})` }}
            ></div>

            <div className='aboutBottom'>
                <h1>Hakkımızda</h1>
                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis deserunt natus cumque doloremque voluptatem nisi modi id quisquam iure. Cum nemo officiis aliquid nesciunt non facilis possimus tenetur! Voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis deserunt natus cumque doloremque voluptatem nisi modi id quisquam iure. Cum nemo officiis aliquid nesciunt non facilis possimus tenetur! Voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis deserunt natus cumque doloremque voluptatem nisi modi id quisquam iure. Cum nemo officiis aliquid nesciunt non facilis possimus tenetur! Voluptatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis deserunt natus cumque doloremque voluptatem nisi modi id quisquam iure. Cum nemo officiis aliquid nesciunt non facilis possimus tenetur! Voluptatibus!
                </p>
            </div>
            
        </div>
    )
}

