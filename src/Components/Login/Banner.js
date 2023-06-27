import React from 'react'
import styled from 'styled-components'
import logo1 from '../Images/cta-logo-one.svg';
import logo2 from '../Images/cta-logo-two.png';
// import back from '../Images/background-landing.jpeg';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div>
      <section className='background'>
            <Container>
                <Content>
                  <img src={logo1} alt="logo/img" />
                  <Link to="../Home" className="explore-link">Explore</Link>
                  <h4>Get premier access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</h4>
                  <img src={logo2} alt="logo/img" />
                  
                </Content>   
            </Container>
        </section>
    </div>
  )
}
// const Background = styled.section`
// background: url("http://disney-clone-d1e.web.app/images/login-background.jpg");
// height: 95vh;

// `;
const Container = styled.div`
width : 85%;
margin: 0 auto;
`;

const Content = styled.div`
width: 100%;
margin: 0 auto;
max-width: 650px;
display : flex;
align-items: center;
flex-direction:column;
justify-content: center;
img{
  width: 100%;
  height: auto;
  display : block;
  object-fit:contain;
  maximum-width: 600px;
  margin-bottom: 1vh;
}
> .explore-link{
  text-decoration:none;
  outline: none;
  border: none;
  padding: 11.5px 15px;
  align-items: center;
  text-align: center;
  letter-spacing:1.5px;
  text-transform: upppercase;
  background: #0063e5;
  color: #f9f9f9;
  font-size: 18px;
  border-radius: 0.145rem;
  transition: all 0.7s easein-out;
  @media only screen and(min-width: 550px) and (max-width: 1200px){
    padding : 10px 0;
    font-size: 15px;
  }
  @media only screen and(min-width: 280px) and (max-width: 550px){
    padding : 10px 0;
    font-size: 14px;
  }
  &:hover{
    background: #0085ff;
  }
}

h4{
  color: #fff;
  margin-bottom: 1vh;
}
> .links{
  outline:none;
  border:none;
  font-size: 19px;
  background: transparent;
  color: #f9f9f9;
  margin-top:1vh;
}

@media only screen and(min-width: 768px) and (max-width: 1200px){
  max-width: 550px;
}
@media only screen and(min-width: 550px) and (max-width: 767px){
  max-width: 450px;
  margin-top:13vh;
}
@media only screen and(min-width: 375px) and (max-width: 550px){
  max-width: 350px;
  margin-top:13vh;
}
@media only screen and(min-width: 280px) and (max-width: 375px){
  max-width: auto;
  margin-top:13vh;
}


`;

export default Banner
