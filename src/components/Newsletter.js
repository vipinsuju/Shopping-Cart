import { Send } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from '../Responsive';


const Container = styledComponents.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = styledComponents.h1`
    font-size:70px;
    margin-bottom:20px;
`;
const Desc = styledComponents.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}
`;
const InputContainer = styledComponents.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({ width: "80%" })}
`;
const Input = styledComponents.input`
    border:none;
    flex:8;
    padding-left:20px;
`;
const Button = styledComponents.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;



const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
