import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import {ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_styleFunctionSx, styled } from '@mui/system';
//import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ParamOuverte from "./ParamOuverte.js";
import ParamQCM from "./ParamQCM.js";


// import theme from '../index.js'
// Faire un import au lieu de recréer le theme fait que rien ne s'affiche -> ?

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

//Les balises HTML de base ne peuvent pas être modifiée avec sx={{.....}}. On doit créer un nouveau 
// type de balise à partir de celles-ci pouvant utiliser sx. 
const Div = styled('div')(unstable_styleFunctionSx);



// Composant React pour la structure de param. de question
class ParamQuestion extends Component{
    constructor(props){
        super(props);
        this.state={isQCM:false }; // problème avec fonction
        this.addReponseInState=this.addReponseInState.bind(this);
        this.addReponse=this.addReponse.bind(this);
    }
    

    choixParam(isQCM){
        if (isQCM === true){
            this.setState({isQCM:false});
            ReactDOM.render(
                <ParamOuverte 
                questionId={this.state.questionId}
                updateQuestionData={this.props.updateQuestionData} 
                updateReponseData={this.props.updateReponseData}
                generateReponseId={this.props.generateQuestionId}
                addReponseInDataArray={this.props.addReponseInDataArray} 
                remAllReponsesInDataArray ={this.props.remAllReponsesInDataArray}
                addReponseInState = {this.addReponseInState}
                addReponse={this.addReponse}
                />,
                document.getElementById('param_reponse')
            );
            this.props.questionType(this.state.questionId, false);
        }
        else if (isQCM === false){
            this.setState({isQCM:true});
            ReactDOM.render(
                <ParamQCM 
                questionId={this.state.questionId}
                updateQuestionData={this.props.updateQuestionData} 
                updateReponseData={this.props.updateReponseData}
                generateReponseId={this.props.generateQuestionId}
                addReponseInDataArray={this.props.addReponseInDataArray} 
                remReponseInDataArray={this.props.remReponseInDataArray}
                remAllReponsesInDataArray ={this.props.remAllReponsesInDataArray}
                addReponseInState = {this.addReponseInState}
                addReponse={this.addReponse}
                />,
                document.getElementById('param_reponse')
            );
            this.props.questionType(this.state.questionId, true);
        }
    }

    async componentDidMount(){
        let questionId = await this.props.addQuestionInDataArray(); // La fonction renvoie l'id de question qu'elle à générée et ajoutée dans l'objet dans myQuestionsArray
        await this.setState({"questionId" : questionId});
        //alert(this.state.questionId);

        // Quand on render une nouvelle question -> ok, nouvel questionId, quand on en render plusieurs -> ont tous le même questionId
    
        ReactDOM.render(
            <ParamOuverte 
            questionId={this.state.questionId}
            updateQuestionData={this.props.updateQuestionData} 
            updateReponseData={this.props.updateReponseData}
            generateReponseId={this.props.generateQuestionId}
            addReponseInDataArray={this.props.addReponseInDataArray} 
            remAllReponsesInDataArray ={this.props.remAllReponsesInDataArray}
            addReponseInState = {this.addReponseInState}
            addReponse={this.addReponse}
            />,
            document.getElementById('param_reponse')
          );
    
    }

    async componentWillUnmount(){
        await this.props.remQuestionInDataArray(this.state.questionId);
    }
    
    async componentWillUnmount(){
        await this.props.remQuestionInDataArray(this.state.questionId);
    }

    addReponseInState(valueToAdd){
        this.setState({[valueToAdd]:valueToAdd});
        console.log(this.state);
    }

    addReponse(isCorrect){
        let keys = Object.keys(this.state);
        // Pour chaque element dans this.state qui est un id de réponse on appelle addReponseInDataArray2()
        // On supprime l'élément id du this.state

        //componentDidMount des réponses:
        // 1) on génère un id
        // 2) on l'ajoute dans le this.state de ParamQuestion (avec addReponseInState() )
        // 3) On utilise addReponse() pour ajouter les objets des réponses dans l'array des réponses d'un objet question (this.state de CreationQuiz)
        //      Doit se faire de temps en temps -> à la fin de chaque componentDidMount des réponses ?
    }



    render(){
        return(
            <div>
                <ThemeProvider theme={theme}>
                <Box sx={{ml:3, mr:4, my:2, py:2, bgcolor:"box.main", fontSize:20}}>
                    <Div sx={{ml:3, mr:4, my:2, display:"flex"}}>
                        <TextField
                        required
                        id="outlined-required"
                        label="titre de la question"
                        defaultValue=""
                        sx={{ml:3, mr:4}}
                        onBlur={ (event)=>{
                            this.props.updateQuestionData(
                                this.state.questionId, "titreQuestion", event.target.value
                            )   
                        }}
                        />

                        <TextField
                        required
                        id="outlined-required"
                        label="Enoncé de la question"
                        defaultValue=""
                        sx={{ml:3, mr:4}}
                        onBlur={ (event)=>{
                            this.props.updateQuestionData(
                                this.state.questionId, "enonce", event.target.value
                            )   
                        }}
                        />

                        <FormGroup sx={{ml:3, mr:4, my:"auto"}}>
                            <FormControlLabel 
                            control={<Checkbox onClick={() => {
                                this.choixParam(this.state.isQCM)}
                            }/>} 
                            label="QCM" 
                            />
                        </FormGroup>
                    </Div>

                    <Div id="param_reponse">
                        
                    </Div>
                    
                    

                </Box>
                </ThemeProvider>
                
            </div>
            
        )
    }
}



export default ParamQuestion;