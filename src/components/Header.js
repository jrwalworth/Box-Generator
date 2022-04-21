import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <Navbar className="m-2 d-flex justify-content-between" variant="dark" bg="dark" expand="lg">
            <Navbar.Brand className="ms-3" href="#home">Box-Generator</Navbar.Brand>
            <div className="me-2">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </div>
        </Navbar>
    );
}

export default Header;
