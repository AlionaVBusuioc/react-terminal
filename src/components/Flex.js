import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || "row"};
/* flex-direction: center; */
align-items: ${props => props.align || "stretch"};
justify-content: ${props => props.justify || "stretch"};
/* margin: ${({margin}) => margin || "0"}; */
`

// const StyledFlex = styled.div`
// display: flex;
// justify-content: center;
// `

const Flex = (props) => {
  return (
   <StyledFlex {...props} />
  )
}

export default Flex;