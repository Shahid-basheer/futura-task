import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
export default function Navbars(){
  const nav = document.querySelector(".top-bar");
  const handleScroll = (e) => {
    if(window.scrollY>240){
      nav.style.background = "black"
      return 
    }
    nav.style.background = ""
  };
  window.addEventListener('scroll', handleScroll);
    return <Navbar  data-bs-theme="dark" className='top-bar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-end text-small">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
}