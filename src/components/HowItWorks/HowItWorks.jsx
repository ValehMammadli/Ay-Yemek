import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from "reactstrap";
import register from '../../assets/register.png'
import food from '../../assets/food.png'
import delivery from '../../assets/delivery.png'
import { Link } from "react-router-dom";
import arrow1 from "../../assets/arrow1.png"
import arrow2 from "../../assets/arrow2.png"
import "../../styles/howitworks.css"

const howitworksdata = [
    { display: "Qeydiyyatdan keçin", imgUrl: register, Number: '01', arrowUrl: arrow1 , top: '0px', left:'0%' , arrowTop:'160px', arrowLeft:'80%'},
    { display: "Paketi və yeməklərinizi seçin", imgUrl: food, Number: '02', arrowUrl: arrow2 , top:'90px' ,left:'50%', arrowTop:'200px', arrowLeft:'147%'},
    { display: "Sürətli bir şəkildə çatdırılma edilsin", imgUrl: delivery, Number: '03', top:'0px',left:'100%' },
];

export default function HowItWorks() {
    return (
        <Container>
            <div className='howitworks'>
                <div className="howitworks_title">
                    <h3>AY YEMƏK NECƏ  İŞLƏYİR?</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing
                    </p>

                </div>
                <Row>
                    {howitworksdata.map((item, index) => (
                        <Col lg="3" md="3" key={index}>
                            <div>
                            <div style={{display:'flex',position:'relative'}}>
                            <div className="howitworks__item  align-items-center gap-3 m " style={{position:'absolute', top: item.top , left: item.left}}>
                               
                                    <img src={item.imgUrl} alt="howitworks__item" />
                                    
                               
                               
                                    <p>{item.Number}</p>
                                <h4 >{item.display}</h4>
                                

                                
                            </div>
                            <div style={{position:"absolute" , top: item.arrowTop , left: item.arrowLeft}}>
                            <img src={item.arrowUrl} alt="" />
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
