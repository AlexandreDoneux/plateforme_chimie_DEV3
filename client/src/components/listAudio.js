import React, { Component } from 'react';


import { unstable_styleFunctionSx, styled } from '@mui/system';

import Paper from '@mui/material/Paper';


import theme from '../index.js'






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
        <h1> test audio list</h1>
      )

    }
}

export default ListAudio;