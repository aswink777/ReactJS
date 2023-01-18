import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Nbar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="black" variant="black" style={{height:'100px'}}>
    <Container>
        <h1>
      <Navbar.Brand style={{fontSize:'40px', color:'white'}} href="/" >SHOW TIME MOVIES</Navbar.Brand>
      </h1>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
          {/* <NavDropdown title="" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Book Tickets</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Order Status
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
        <Nav.Link href="/Pop" style={{color:'white'}}>Popular Movies</Nav.Link>
          <Nav.Link href="/Lat" style={{color:'white'}}>Latest Movies</Nav.Link>
          <Nav.Link href="/Com" style={{color:'white'}}>Comedy Movies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
);
}

export default Nbar