import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFilm, faHome, faNewspaper, faPlay, faReceipt, faTicket, faTv } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Brand href="#home">
      <img
        src="https://react-bootstrap.github.io/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Главная</Nav.Link>
        <Nav.Link href="/play"><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Онлайн-кинотеатр</Nav.Link>
        <Nav.Link href="/news"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> Новости</Nav.Link>
        <Nav.Link href="/receipt"><FontAwesomeIcon icon={faReceipt}></FontAwesomeIcon> Промокоды</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Фильмы, сериалы"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Поиск</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Routes>
    <Route path="/" element={<Main/>}/>
</Routes>



<Footer/>

    </div>
  );
}

export default App;
