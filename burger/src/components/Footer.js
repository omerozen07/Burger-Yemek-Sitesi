import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css"

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
            <p>Tüm hakları saklıdır | Burger yiyelim</p>
            <h6 style={{color:"white"}}>Design <i style={{cursor:"pointer"}}>Ömer ÖZEN</i></h6>
        </div>
    )
}
