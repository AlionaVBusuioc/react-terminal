import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const rotateAnimation = keyframes`
//0% -> inceeput de animatie, 100% -> finele acesteia
0% {
transform: rotateZ(0deg);
}
100% {
  transform: rotateZ(360deg);
}
`

// const StyledButton = styled.button`
const StyledButton = styled.button.attrs(props => ({
  outlined: true, //scriem aici in asa fel cu proprietatea attrs, daca nu dorim in App sa specificam -> outlined in tagul Button
}))`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus{
    outline: none;
}
&:hover {
 animation: ${rotateAnimation} 1s infinite linear;
}
align-self: ${props => props.align || "stretch"};

${props => props.primary && css`
 color: ${props => props.color || "white"};
 background: ${props => props.background || "white"};
`}

${props => props.outlined && css`
 color: ${props => props.color || "white"};
 border: 1px solid ${props => props.color || "white"};
 background: transparent;
`}
`
const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button = (props) => {
  return (
      <LargeButton {...props}/>
  )
}

export default Button;