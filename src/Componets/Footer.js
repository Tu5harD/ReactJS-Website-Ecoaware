import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <>
    <footer className="footer-distributed">

<div className="footer-left">

    <h3>{props.firstHeading}<span>{props.lastHeading}</span></h3>

<ul className="footer-links">
    <li className='footer-linktext' ><Link className='footer-links-text' to="/">Home |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/soil"> Air |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/air"> Water |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/water"> Soil |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/noise"> Noise |</Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/light"> Light |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/radioactive"> Radioactive |   </Link></li>
    <li className='footer-linktext' ><Link className='footer-links-text' to="/plastic"> Plastic    </Link></li>
</ul>

  
</div>

<div className="footer-center">
    <ul className='footer-linktext-link'>
    <li>
    <i class="fa-solid fa-location-dot"></i>
        <p className='footer-linktext-link'>{props.lastLocation}</p>
    </li>

    <li>
    <i class="fa-solid fa-phone"></i>
        <p className='footer-linktext-link'>{props.contact}</p>
    </li>

    <li>
    <i class="fa-regular fa-envelope"></i>
        <p><a href="mailto:support@company.com"><p className='footer-linktext-link'>{props.email}</p> </a></p>
    </li>
    </ul>
</div>

<div className="footer-right">

    <p className="footer-company-about footer-company-name">
        <span>About Developer</span> &copy; 2023 TUSH DEV is a web designers, graphic designers, web developer.
    </p>

    <div className="footer-icons">

        <Link to="https://www.instagram.com/tush_0945/?utm_source=qr"><i class="fa-brands fa-instagram"></i></Link>
        <Link to="#"><i class="fa-brands fa-facebook"></i></Link>
        <Link to="https://wa.me/qr/DVL5COWDF7ZDI1"><i class="fa-brands fa-whatsapp"></i></Link>
        <Link to="https://github.com/Tu5harD"><i class="fa-brands fa-github"></i></Link>

    </div>

</div>

</footer>


    </>
  )
}

export default Footer
