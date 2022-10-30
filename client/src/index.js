import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';


import InsideStructure from './components/InsideStructure';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';


import {ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_styleFunctionSx, styled } from '@mui/system';



//Les balises HTML de base ne peuvent pas être modifiée avec sx={{.....}}. On doit créer un nouveau 
// type de balise à partir de celles-ci pouvant utiliser sx. 
const Div = styled('div')(unstable_styleFunctionSx);
const Img = styled('img')(unstable_styleFunctionSx);


// On définit un theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#40B78F',
    },
    secondary: {
      main: '#FFFFFF',
      button: '#40B78F'
    },
    box: {
      main: "#10812D",
      secondary: "#E4F2AE"
    }
  },
});





const element = (
  
  <ThemeProvider theme={theme} >
    <Box width="auto" height="auto"  >
      <AppBar position="static" backgroundColor="primary.main"> 
        <Box width="auto" height="auto"  sx={{ display: 'flex' }}>
          
          <Img width="200px"  sx={{ml:4, p:2}} src="logoETChoice.png" onClick={() => window.location = "/"}></Img>
          
        
          <Div sx={{ml:"auto", mr:3, display: 'flex'}}>
          
          <Div sx={{ml:3, my:"auto"}}> 
            <Button variant="contained" sx={{ml:1, mr:2, bgcolor:"secondary.button", fontSize:20, border:2}} onClick={() => window.location = "/listOrdi"}>Ordinateurs</Button>
            <Button variant="contained" sx={{ml:1, mr:2, bgcolor:"secondary.button", fontSize:20, border:2}} onClick={() => window.location = "/listSmartphone"}>Smartphones</Button>
            <Button variant="contained" sx={{ml:1, mr:2, bgcolor:"secondary.button", fontSize:20, border:2}} onClick={() => window.location = "/listTablette"}>Tablettes</Button>
            <Button variant="contained" sx={{ml:1, mr:2, bgcolor:"secondary.button", fontSize:20, border:2}} onClick={() => window.location = "/listAudio"}>Audio</Button>
            <Button variant="contained" sx={{ml:7, bgcolor:"secondary.button", fontSize:20, border:2}} onClick={() => window.location = "/cours"}>Recherche</Button>
          </Div>

          </Div>
          
        </Box>
      </AppBar>
     
      <Box width="auto" height="auto"  sx={{ display: 'flex', bg:"secondary.main" }}>
        
      
        
      </Box>
      <Div id="main" sx={{bgcolor:"#secondary.main", height:1}}>
        
        
        
      </Div>
      
      
    </Box>
  </ThemeProvider>
  
  

);

ReactDOM.render(
  element,
  document.getElementById('root')
);

ReactDOM.render(
  <InsideStructure/>,
  document.getElementById('main')
);



/*
<AppBar position="absolute" sx={{mt:"2", p:2, top: 'auto', bottom: 0, bgcolor:"secondary.main"}}> 
        <Div sx={{textAlign:"center"}}>
          Nous contacter: Responsable admin@admin.be
          <br/><br/>
          @copyright
        </Div>
      </AppBar>
      */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default theme;