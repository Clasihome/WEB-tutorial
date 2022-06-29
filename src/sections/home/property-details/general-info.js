import React from "react";
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import sofaImg from '../../../images/property-datail-img.jpg';
import char1 from '../../../images/calendar.svg';
import char2 from '../../../images/bed.svg';
import char3 from '../../../images/bath.svg';
import char4 from '../../../images/parking.svg';

const MainContainer = styled.div`
  margin-bottom: 3rem;
`
const TitleCont = styled.div`
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
`
const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
`
const Separator = styled.div`
  position: relative;
  width: 100%;
  //background-color: ${props => props.theme.primary};
  background-image: ${props => `linear-gradient(to right, transparent, ${props.theme.primary}, transparent)`};
  height: 4px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  div{
    position: absolute;
    top: -6px;
    border-width: 3px;
    border-color: ${props => props.theme.primary};
    border-style: solid;
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`

const Description = styled.p`
  color: ${props => props.theme.gray};
  width: 50%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 4rem;
`
const SofaImg = styled.img`
  width: 100%;
  height: 400px;
  //object-fit: cover;
`
const CharacteristicsCont = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 4rem auto;
`
const CharItem = styled.li`
  text-align: center;
`
const CharImage = styled.img`

`
const CharName = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${props => props.theme.gray};
  margin: .5rem 0;
`

const CharPrice = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.3rem;
`

const GeneralInfo = () => {

  return(
    <MainContainer>
      <Container>
        <TitleCont>
          <Title>
            Property details
          </Title>
          <Separator>
            <div />
          </Separator>
        </TitleCont>
        <Description>
          Id irure enim eu aute labore nostrud aute nisi exercitation velit.
          Elit tempor enim ipsum exercitation.
        </Description>
        <SofaImg src={sofaImg} />
        <CharacteristicsCont>
          <CharItem>
            <CharImage src={char1} />
            <CharName>
              Build year
            </CharName>
            <CharPrice>
              2021
            </CharPrice>
          </CharItem>
          <CharItem>
            <CharImage src={char2} />
            <CharName>
              Bedrooms
            </CharName>
            <CharPrice>
              4
            </CharPrice>
          </CharItem>
          <CharItem>
            <CharImage src={char3} />
            <CharName>
              Bathrooms
            </CharName>
            <CharPrice>
              4
            </CharPrice>
          </CharItem>
          <CharItem>
            <CharImage src={char4} />
            <CharName>
              Parking
            </CharName>
            <CharPrice>
              2
            </CharPrice>
          </CharItem>                              
        </CharacteristicsCont>
      </Container>
    </MainContainer>
  )
}

export default GeneralInfo;
