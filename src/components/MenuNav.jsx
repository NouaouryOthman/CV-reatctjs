import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import me from '../resources/me.jpg';
import { NavLink } from 'react-router-dom';

export default function MenuNav(props) {
    return <>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <Image width="60"
                            height="60"
                            className="d-inline-block rounded-circle"
                            alt="React Bootstrap logo" src={me} />
                        <>&nbsp;</>
                        Mohammed Amine Faris
                    </NavLink>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/projet1">Mon premier projet</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/projet2">Mon deuxième projet</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;

}
