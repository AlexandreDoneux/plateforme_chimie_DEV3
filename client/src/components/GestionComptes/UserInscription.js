import React, { Component } from 'react';
import axios from 'axios';

import {ThemeProvider, createTheme } from '@mui/material/styles';
import { unstable_styleFunctionSx, styled } from '@mui/system';

class UserInscription extends Component{
    state = {
      email : '',
      motDePasse :'',
      nom :'',
      prenom : '',
      groupe :'',
      classe:''
    }

    submitHandler = form =>{
      form.preventDefault();
      const params = new URLSearchParams();
      params.append("email", this.state.email);
      params.append("motDePasse", this.state.motDePasse);
      params.append("nom", this.state.nom);
      params.append("prenom", this.state.prenom);
      params.append("groupe", this.state.groupe);
      params.append("classe", this.state.classe);
      
      
      axios.post("http://localhost:5000/utilisateurs/inscription", params)
        .then(res => console.log(res)).catch(err => console.log(err)) ;
    }
  
    changeHandler = (e) =>{
      this.setState({[e.target.name] : e.target.value});
    } 

    render(){
      return(
        <form onSubmit={this.submitHandler}>

          <label for={"email"}>Email :</label>
          <input type={"text"} id={"email"} name={"email"} onChange={this.changeHandler}></input>
          <label for={"motDePasse"}>Mot de passe :</label>
          <input type={"text"} id={"motDePasse"} name={"motDePasse"} onChange={this.changeHandler}></input>
          <label for={"nom"}>Nom :</label>
          <input type={"text"} id={"nom"} name={"nom"} onChange={this.changeHandler}></input>
          <label for={"prenom"}>Prénom :</label>
          <input type={"text"} id={"prenom"} name={"prenom"} onChange={this.changeHandler}></input>
          <label for={"groupe"}>Groupe :</label>
          <input type={"text"} id={"groupe"} name={"groupe"} onChange={this.changeHandler}></input>
          <label for={"classe"}>Classe :</label>
          <input type={"text"} id={"classe"} name={"classe"} onChange={this.changeHandler}></input>
          <input type={"submit"} value={"Submit"}></input>

        </form>
      )
    }
    
  }


export default UserInscription;