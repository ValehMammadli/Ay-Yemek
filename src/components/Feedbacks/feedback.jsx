import React from 'react'
import { Link } from "react-router-dom";
import { Container } from 'reactstrap'
import { Row, Col } from "reactstrap";
import hr from '../../assets/hr.png'
import feedback1 from '../../assets/feedback1.png'
import userlogo from '../../assets/userlogo.png'
import '../../styles/feedback.css'

const feedbackData = [
    { display: "Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor nisi, purus. .F", imgUrl: feedback1, logo: userlogo, user: 'Fidan Valiyeva', job: 'Designer', },
    { display: "Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget nec. Donec pellentesque turpis sit dolor nisi, purus. Eget laoreet eget nec. Eget laoreet eget nec. Donec pellentesque turpis sit dolor nisi, purus. .", imgUrl: feedback1, logo: userlogo, user: 'Fidan Valiyeva', job: 'Designer' },

];

export default function feedback() {
    return (
       
        <Container>
            <div className='feedback' style={{marginTop:"20px"}} >
                <div className="feedback_title">
                    <h4>ONLAR DAİM BİZİ SEÇİR</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing
                    </p>
                    <img src={hr} alt="" />
                </div>
                <Row>
        {feedbackData.map((item, index) => (
          <Col lg="6" md="6" key={index}>
          <div className='feedback__item d-flex'style={{flexDirection:"column",justifyContent:'center'}}  >
<p>{item.display}</p>
<div className='d-flex feedback_section'  >
    <div className="feedback__img ">
        <img src={item.imgUrl} alt="" />
        <img src={item.logo} alt="" />
    </div>
    <div className='feedback__info d-flex' style={{flexDirection:"column"}}>
        <h6>{item.user}</h6>
        <p>{item.job}</p>
    </div>
</div>

          </div>
           
            
          </Col>
        ))}
      </Row>

            </div>
        </Container>
        
    )
}
