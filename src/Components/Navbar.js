import styled from 'styled-components';
import logo from './Images/logo.svg';

const Navbar = () => {


  return (
    <div>
        <Nav>
            <Navbrand className='navi'><img src={logo} alt="disney/logo" /></Navbrand>
        </Nav>
    </div>
  )
}

const Nav = styled.nav`
background-color: #040714; 
display: flex;`;
const Navbrand = styled.div`
width:101px;
height: auto;
object-position: center;

img{
    width:100%;
    height:auto;
    object-fit:fill;
}`;

export default Navbar
