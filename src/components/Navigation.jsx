import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
   return (
      <Navbar expand='lg' className='bg-body-dark'>
         <Container>
            <Navbar.Brand className='text-warning fs-3' href='#home'>
               My Movie Review App
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
}

export default Navigation;
