import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import me from '../resources/me.jpg';


export default function MenuNav(props) {
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#" onClick={props.changePage('accueil')}>
                <Image width="60"
                        height="60"
                        className="d-inline-block rounded-circle"
                        alt="React Bootstrap logo" src={me} />
                        <>&nbsp;</>
                    Mohammed Amine Faris
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={props.changePage('accueil')}>Mon CV</Nav.Link>
                        <Nav.Link href="#" onClick={props.changePage('projet1')}>Mon premier projet</Nav.Link>
                        <Nav.Link href="#" onClick={props.changePage('projet2')}>Mon deuxième projet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>

}
