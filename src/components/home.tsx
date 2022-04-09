// @ts-nocheck
import { Link } from 'react-router-dom';
import { Navbar, Container, Carousel, Nav} from 'react-bootstrap';


import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
import image5 from '../assets/images/img5.jpg';
import image6 from '../assets/images/img6.jpg';
import image7 from '../assets/images/img7.jpg';
import image8 from '../assets/images/img8.jpg';
import image9 from '../assets/images/img9.jpg';
import mylogo from  '../assets/images/movie-logo.png';


import '../App.css';






export default function Home() {


    return (
        <div className="page">
            <Navbar className="Nav"collapse OnSelect expand="lg" bg="dark" variant="dark" >
  <Container >
  <img 
                       
                       src={mylogo} width="100px" height="80px"
                       alt="First slide"
                   />
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end"  id="responsive-navbar-nav">
    <Nav >
    
              
        <br></br>     
            
        <Navbar.Text>
    <Link to={'/signin'} className="btn btn-danger">Sign In</Link></Navbar.Text>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">

                        <Nav>
                           
                            


                        </Nav>
                        
                    </Navbar.Collapse>
                    </Nav>
                    </Navbar.Collapse></Container>
                   </Navbar>
                    
                

            <div className='text-center'>
            
                <h3><Link to={'/movielist'} className="btn btn-danger">Movies!</Link></h3>
                
            </div>
            <Carousel className="container"variant="dark"  >
                <Carousel.Item className="container">
                    <img
                       
                        src={image1}
                        alt="First slide"
                    />
                    <img
                        
                        src={image2}
                        alt="Second slide"
                    />
                     <img
                        
                        src={image3}
                        alt="Third slide"
                    />

                   
 
                    
                </Carousel.Item>
                <Carousel.Item className="container">

                <img
                        
                        src={image4}  width="380"
                        alt="Third slide"
                    />
                <img
                       
                       src={image5} width="340"
                       alt="First slide"
                   />
                   <img
                       
                       src={image6} width="360"
                       alt="Second slide"
                   />
                    

                   



                    
                </Carousel.Item>

                <Carousel.Item className="container">
                <img
                       
                       src={image8} width = "350"
                       alt="Third slide"
                   />
                   <img
                       
                       src={image7}width = "350" height ="520"
                       alt="First slide"
                   />

<img
                       
                       src={image9}width = "350" height ="520"
                       alt="First slide"
                   />


                </Carousel.Item>
                
               
            </Carousel>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

            

        </div>

        
    )
}
