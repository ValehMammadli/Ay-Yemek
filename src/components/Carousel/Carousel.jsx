import React from 'react';
  import Slider from 'react-slick';
  import photo1 from '../../assets/photo1.png';
  import photo2 from '../../assets/photo2.png';
  import photo3 from '../../assets/photo3.png';
  import photo4 from '../../assets/photo4.png';
  import photo5 from '../../assets/photo5.png';
  import { Container } from 'reactstrap';
  import '../../styles/mycarousel.css'
  
  // Define the settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  
  // Define the photos for the slider
  const photos = [photo1, photo2, photo3, photo4, photo5,photo1, photo2, photo3, photo4, photo5];
  
  const Carousel = () => (
    
    <div style={{backgroundColor:"#F7F7F7"}} className='carousel'> 
    <Container>
      <h2>SEVİLƏN YEMƏKLƏRİMİZ</h2>
      <p>Lorem Ipsum is simply dummy text of the printing </p>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} style={{width:"200px"}} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider> </Container>
    </div> 
  );
  
  export default Carousel;