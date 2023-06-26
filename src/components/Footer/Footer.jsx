import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import HomeArrow from '../../assets/homearrow.png'
import logo from '../../assets/logo.png'
import face from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import twit from '../../assets/twit.png'
import "../../styles/footer.css"
const footerdata = [
  {
    display: "Ana Səhifə",
    path: "/home",
  },
  {
    display: "Paketlər",
    path: "/foods",
  },
  {
    display: "Haqqımızda",
    path: "/about",
  },
  {
    display: "Əlaqə",
    path: "/contact",
  }
  ,
  {
    display: "FAQs"
  }
]

const Footer = () => {
  return (
    <Container>
      <div className='footer_items'>
        {/* <div className='footer_arrow'>
          <button style={{border:'none', backgroundColor:'transparent'}}><img src={HomeArrow} alt="" /></button>
        </div> */}
        <div className='footer_description'>
         <div className='footer_logo'> <img src={logo} alt="" /></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className='footer_nav'>
            {footerdata.map((item, index) => (
              <Link to={item.path} >{item.display}</Link>
            ))}
          </div>
          <div className='socialMedia'>
            <a href="#">
              <img src={face} alt="" />
            </a>
            <a href="#">
              <img src={twit} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer