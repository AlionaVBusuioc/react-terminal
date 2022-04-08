import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';
import Title from './Title';
import {ColorFill} from "@styled-icons/ionicons-solid/ColorFill";
import PropTypes from 'prop-types'
import { ChromePicker } from "react-color";
import reactCSS from "reactcss";

const AppWrapper = styled.div`
width: 40%;
min-height: 30vh;
padding: 2rem;
background: ${props => props.color || props.theme.color.BackgoundColor};
margin-left: 5vh;
`
const StyledConsole = styled.textarea`
width: 100%;
height: 30vh;
background: ${props => props.color || props.theme.color.BackgoundColor};
font-size: 24px;
border: none;
resize: none; 
color: ${props => props.color || props.theme.color.secondary};
&:focus {
  outline: none;
};
`
const TerminalWrapper = styled.div`
display: flex;
width: 40%;
min-height: 5vh;
background: #C0C0C0;
margin-top: 5vh;
margin-left: 5vh;
`
const StyledBackground = styled(ColorFill)`
color: ${props => props.color || props.theme.color.primary};
width: 3vw;
height: 3vh;
margin-left: auto;
`
const StyledColorPicker = styled.div`
margin-left: 30.5vw;
`
const Console = ({color, ...props}) => {
  const [lines, setLines] = useState(["C/users/aliona>"]);

const onKeyPress = e => {
  if(e.charCode == 13) {
    setLines([...lines, "C/users/aliona>"])
  }
}

const styles = reactCSS({
  default: {
    background: {
      background: `rgba(${props.colorize.color.rgb.r}, 
          ${props.colorize.color.rgb.g}, 
          ${props.colorize.color.rgb.b}, 
          ${props.colorize.color.rgb.a})`,
    },
    color: {
      color: `rgba(${props.colorize.color.rgb.r}, 
        ${props.colorize.color.rgb.g}, 
        ${props.colorize.color.rgb.b}, 
        ${props.colorize.color.rgb.a})`,
    },
    swatch: {
      padding: "10px",
      background: "white",
      borderRadius: "2px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.2)",
      cursor: "pointer",
      display: "inline-block",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
    popover: {
      position: "absolute",
      zIndex: "4",
    },
  },
});

  return (
  <>
  <TerminalWrapper>
    <Title>Terminal</Title>
    <StyledBackground style={styles.color} onClick={props.onClick}/>
    </TerminalWrapper>
    <StyledColorPicker>
    {props.open && (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={props.onClose} />
            <ChromePicker
              color={props.colorize.color.rgb}
              onChange={props.onChange}
            />
          </div>
        )}
       </StyledColorPicker> 
    <AppWrapper style={styles.background}>
      <Flex justify="center">
      </Flex>
      <Flex direction="column">
      <Flex>
     <Flex direction={"column"} margin={"10px 0"}>
       {lines.map(line => 
        <Line color={color}>{line}</Line>
        )}
     </Flex>
      <StyledConsole onKeyPress={onKeyPress} style={styles.background}/>
      </Flex>
      </Flex>
    </AppWrapper>
   </>
  )
}

Console.propTypes= {
  open: PropTypes.bool.isRequired,
  colorize: PropTypes.object,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}


export default Console;

