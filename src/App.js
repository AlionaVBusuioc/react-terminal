import React from 'react';
import './App.css';
import Console from './components/Console';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import CustomCulorPickerMain from './components/CustomColorPickerMain';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`
const theme = {
  color: {
    primary: "green",
    secondary: "white",
    BackgoundColor: "black"
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)"
  }
}

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
     <Global/>
     {/* <Console /> */}
     <CustomCulorPickerMain />
    </ThemeProvider>
    </>
  );
}

export default App;


