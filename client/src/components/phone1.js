import React, { Component } from 'react';

import { unstable_styleFunctionSx, styled } from '@mui/system';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import ControlledAccordions from './Acordeon';


const Div = styled('div')(unstable_styleFunctionSx);
const H3 = styled('h3')(unstable_styleFunctionSx);
const H1 = styled('h1')(unstable_styleFunctionSx);
const H2 = styled('h2')(unstable_styleFunctionSx);
const Img = styled('img')(unstable_styleFunctionSx);


const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
  }));


class Phone1 extends Component{
    render(){
        return(
            <>
            <Div >
                <H1 sx={{p:3}}>Téléphone 1</H1>

                <Div sx={{display:"flex"}}>
                    <Img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="20%" height="50%" sx={{px:8, py:3}}></Img>
                    <Div sx={{p:3}}>
                        <ControlledAccordions/>

                    </Div>
                </Div>
            </Div>

            <hr></hr>
            <Div sx={{px:4}} >
                <H2 sx={{px:2}} style={{ color: 'black', backgroundColor: '#40B78F' }}>Alternatives</H2>

                <Grid container spacing={12} sx={{px:12, py:8}}>
              <Grid item xs={4} sx={{bg:'#40B78F'}}>
                <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Fairphone : XXXX </h2>
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
                      <h2>Apple : YYYYY</h2>
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
                      <h2>Samsung : ZZZZ</h2>
                      <Div sx={{pl:2}}>
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="4" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="2" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      
                        <Typography component="legend">Réparabilité</Typography>
                        <Rating name="read-only" value="3" readOnly />
                      </Div>
                    </Div>
                    
                  </Div>
                </Item>
              </Grid>



              <Grid item xs={6}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Acheter reconditionné</h2>
                      <Button variant="contained" sx={{my:4}} >Plus d'informations</Button>

                    </Div>
                    
                  </Div>
                </Item>
              </Grid>


              <Grid item xs={6}> 
              <Item>
                  <Div sx={{ display: 'flex', p:2 }}>
                    <img src="https://png.vector.me/files/images/1/6/160758/phone_icon_clip_art.jpg" width="50%" height="50%" ></img>
                    <Div>
                      <h2>Faites réparer votre téléphone</h2>
                      <Button variant="contained">Plus d'informations</Button>

                    </Div>
                    
                  </Div>
                </Item>
              </Grid>
              
              
              
            </Grid>

                


            </Div>
            
                
            
            </>
            

        )
    }
    
}

export default Phone1;