import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
/* color: white; */
/* color: ${props => props.color}; */
color: ${props => props.color || props.theme.color.primary};
`

// const Title = ({children, color}) => {
//   return (
//     <StyledTitle color={color}>
//        {children} 
//     </StyledTitle>
//   )
// }
const Title = (props) => {
    return (
      <StyledTitle {...props}/>
    )
  }

export default Title;