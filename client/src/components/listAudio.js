import React, { Component } from 'react';


import { unstable_styleFunctionSx, styled } from '@mui/system';

import Paper from '@mui/material/Paper';


import theme from '../index.js'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import BasicTabs from './MUItab.js';




//Les balises HTML de base ne peuvent pas être modifiée avec sx={{.....}}. On doit créer un nouveau 
// type de balise à partir de celles-ci pouvant utiliser sx. 
const Div = styled('div')(unstable_styleFunctionSx);
const H1 = styled('h1')(unstable_styleFunctionSx);
const P = styled('p')(unstable_styleFunctionSx);


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));


class ListAudio extends Component{
    render(){
      return(
        <Div>

            <H1 sx={{px:3}}>Liste des téléphones</H1>

            <Div sx={{mx:5, px:2}} style={{ color: 'black', backgroundColor: '#95edd0' }}>
                <h2>Paramétrez votre recherche</h2>
                <Div sx={{display:"flex"}}>
                    <FormControl fullWidth sx={{mx:4}}>
                        <InputLabel id="demo-simple-select-label">Marque</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Marque"
                            
                        >
                            <MenuItem value={10}>Fairphone</MenuItem>
                            <MenuItem value={20}>Apple</MenuItem>
                            <MenuItem value={30}>Samsung</MenuItem>
                            <MenuItem value={30}>LG</MenuItem>
                            <MenuItem value={30}>Huawei</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{mx:4}}>
                        <InputLabel id="demo-simple-select-label">Paramètre 1</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Paramètre 1"
                            
                        >
                            <MenuItem value={10}>aaa</MenuItem>
                            <MenuItem value={20}>bbb</MenuItem>
                            <MenuItem value={30}>ccc</MenuItem>
                            <MenuItem value={30}>ddd</MenuItem>
                            <MenuItem value={30}>eee</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{mx:4}}>
                        <InputLabel id="demo-simple-select-label">Paramètre 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                            label="Paramètre 2"
                            
                        >
                            <MenuItem value={10}>aaa</MenuItem>
                            <MenuItem value={20}>bbb</MenuItem>
                            <MenuItem value={30}>ccc</MenuItem>
                            <MenuItem value={30}>ddd</MenuItem>
                            <MenuItem value={30}>eee</MenuItem>
                        </Select>
                    </FormControl>

                </Div>
                <Div sx={{display:"flex"}}>
                    <TextField id="outlined-basic" label="paramètre 3" variant="outlined" sx={{ml:4, my:2}}/>
                    <TextField id="outlined-basic" label="paramètre 4" variant="outlined" sx={{ml :4, my:2}}/>
                    <TextField id="outlined-basic" label="paramètre 5" variant="outlined" sx={{ml: 4, my:2}}/>
                    
                </Div>
                <Div sx={{display:"flex"}}>
                <TextField id="outlined-basic" label="paramètre 6" variant="outlined" sx={{ml:4, my:2}}/>
                    <TextField id="outlined-basic" label="paramètre 7" variant="outlined" sx={{ml :4, my:2}}/>
                </Div>
            </Div>
            

            
            


            <Div sx={{p:12}}>
                <h2> Comment trier ?</h2>
                <BasicTabs></BasicTabs>

                
            </Div>
        </Div>
      )

    }
}

export default ListAudio;