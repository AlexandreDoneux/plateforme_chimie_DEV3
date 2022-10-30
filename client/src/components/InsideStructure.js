import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { unstable_styleFunctionSx, styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//import { styled } from '@mui/material/styles';


import theme from '../index.js'
import ListOrdi from './listOrdi.js';
import ListSmartphone from './listSmartphone.js';
import ListTablette from './listTablette.js';
import ListAudio from './listAudio.js';

import Phone1 from './phone1.js';
import Phone2 from './phone2.js';



/*
const theme = createTheme({
    palette: {
      primary: {
        main: '#E4F2AE',
      },
      secondary: {
        main: '#1E943C',
        button: '#10812D'
      },
      box: {
        main: "#BED005",
        secondary: "#D4E522"
      }
    },
});
*/


//Les balises HTML de base ne peuvent pas être modifiée avec sx={{.....}}. On doit créer un nouveau 
// type de balise à partir de celles-ci pouvant utiliser sx. 
const Div = styled('div')(unstable_styleFunctionSx);
const H1 = styled('h1')(unstable_styleFunctionSx);
const P = styled('p')(unstable_styleFunctionSx);


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));


class Acceuil extends Component{
    render(){
      return(
        <Div sx={{bg:"#FFFFFF"}}>
          <Div sx={{pt:30, pb:40, height:400}}>
            <P sx={{textAlign: 'center', fontSize:70}}>Welcome to E.T.Choice</P>
          </Div>
          <Div >
            <P sx={{textAlign:'left', fontSize:40, pl:4, bg:"theme.primary.main"}}>Comment se débrouillent les marques ?</P>
            
            <Grid container spacing={12} sx={{px:12, py:8}}>
              <Grid item xs={4} sx={{bg:'#40B78F'}}>
                <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Fairphone</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>

              </Grid>
              <Grid item xs={4}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Apple</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
              <Grid item xs={4}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Samsung</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
              <Grid item xs={4}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>LG</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
              <Grid item xs={4}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Huawei</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
              <Grid item xs={4}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Wiko</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
            </Grid>

          </Div>
        </Div>
      )
    }
}




class InsideStructure extends Component{
    render(){
      return(
        <Router>
          <Routes>
            <Route path="/" element={<Acceuil/>}> </Route>
            <Route path="/listOrdi" element={<ListOrdi/>}> </Route>
            <Route path="/listSmartphone" element={<ListSmartphone/>}> </Route>
            <Route path="/listTablette" element={<ListTablette/>}> </Route>
            <Route path="/listAudio" element={<ListAudio/>}> </Route>

            <Route path="/phone/1" element={<Phone1/>}> </Route>
            <Route path="/phone/2" element={<Phone2/>}> </Route>
            
          </Routes>
        </Router>
      )
    }
    
  }
 // <Route path="/cours/:cours/quiz/:quiz" element={<Quiz/>}></Route>

export default InsideStructure;