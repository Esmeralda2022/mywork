import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/Error';




function App() {

  return (
   <>
    <BrowserRouter>
      <div className='navdiv'>
         <Container fluid className='firstCont'>
             <Navbar expand = "lg"  shadow='5'  >
                <Navbar.Brand href="/" className='text-white  link1 ' >eF</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav " className='navbar_3  bg-light' />
                      <Navbar.Collapse id = "basic-navbar-nav">
                           <Offcanvas.Body>
                               <Nav className="mr-auto" >
                                   <Nav.Link as={Link} to = '/' className='text-white link1' bg ='secondary'>Home</Nav.Link>
                                   <Nav.Link as={Link} to = '/about' className='text-white  link1' bg ='secondary' >About</Nav.Link>
                                   <Nav.Link as={Link} to = '/contact' className='text-white  link1' bg ='secondary' >Contact</Nav.Link>
                               </Nav>
                           </Offcanvas.Body>
                      </Navbar.Collapse>
                </Navbar>
           </Container>
       </div>
           
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path = '/about' element = {<About/>}/>
        <Route  path='/contact' element = {<Contact/>}/>
        <Route  path = '*' element = {<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

