import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../../images/about.png";
import Image from 'react-bootstrap/Image';

import "./style.css"
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function About() {
  return (
    <>
<Header/>
    <Container className='about'> 
     <h1 className="heading">
          <span>About</span> Us
        </h1>
      <Row className='rows'>
        <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
        t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
        t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
        <Col > 
        <Image className='img' src={img} fluid />;</Col>
      </Row>
     
    </Container>
    <Footer/>
    </>
  );
}

export default About;