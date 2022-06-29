import React from "react";
import styled from 'styled-components';
import heroImg from '../../images/home-hero.jpg';
import { Container } from 'react-grid-system';

const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, .7) -500px, transparent), url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin-bottom: 3rem;
`
const HeroInfoContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Card = styled.div`
  background-color: rgba(255, 255, 255, .7);
  width: 400px;
  padding: 1.5rem;
`
const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`
const SubTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
`
const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SubText = styled.p`
  font-weight: bold;
`
const Price = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
`

const HeroComponent = () => {

  return(
    <Hero>
      <Container>
        <HeroInfoContainer>
          <Card>
            <Title>
              DUPPLEX
            </Title>
            <SubTitle>
              780 MAIN ST
            </SubTitle>      
            <SubText>
              20% OFF
            </SubText>
            <CardFooter>
              <Price>
                $560,000
              </Price>
              <SubText>
                VIEW DETAILS
              </SubText>  
            </CardFooter>      
          </Card>
        </HeroInfoContainer>
      </Container>
    </Hero>
  )
}

export default HeroComponent;