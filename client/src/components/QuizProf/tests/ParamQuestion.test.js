import {render, screen, fireEvent, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ParamQuestion from '../ParamQuestion'
import { Experimental_CssVarsProvider } from '@mui/material'
import { wait } from '@testing-library/user-event/dist/utils'


// différentes fonctions bidon, 
async function updateQuestionData(questionId, questionDataToChange, newData){
    return null
}

async function updateReponseData(questionId, reponseId, reponseDataToChange, newData){
    return null
}

async function addQuestionInDataArray(){
    return null
}

async function addReponseInDataArray(questionId, isCorrect){
    return null
}

async function remQuestionInDataArray(){
    return null
}

async function questionType(questionId, isQCM){
    return null
}

async function remReponseInDataArray(questionId){
    return null
}

async function remAllReponsesInDataArray(questionId){
    return null
}

function generateUniqueID(type){
    // type représente le type : "Q" -> Question, "R"-> Réponse
    let num = Math.floor(Math.random() * Date.now());
    return(type+num)
}

test('suite running', async() => {
    await expect(1+2).toBe(3);
})


test("Correct rendering of ParamQuestion", async () => {
    render(<ParamQuestion 
        updateQuestionData={updateQuestionData}
        updateReponseData={updateReponseData}
        addQuestionInDataArray={addQuestionInDataArray} 
        remQuestionInDataArray={remQuestionInDataArray}
        addReponseInDataArray={addReponseInDataArray} 
        generateUniqueID={generateUniqueID}
        questionType={questionType}
        remReponseInDataArray = {remReponseInDataArray}
        remAllReponsesInDataArray ={remAllReponsesInDataArray}
        />)

        const button  = await screen.getByTestId('ouverteOrQCM').querySelector('input');

})



test("ParamQuestion rendering ParamOuverte without clicking the change", async () => {
    render(<ParamQuestion 
        updateQuestionData={updateQuestionData}
        updateReponseData={updateReponseData}
        addQuestionInDataArray={addQuestionInDataArray} 
        remQuestionInDataArray={remQuestionInDataArray}
        addReponseInDataArray={addReponseInDataArray} 
        generateUniqueID={generateUniqueID}
        questionType={questionType}
        remReponseInDataArray = {remReponseInDataArray}
        remAllReponsesInDataArray ={remAllReponsesInDataArray}
        />)

        const check  = await screen.getByTestId('ouverteOrQCM').querySelector('input');
        const paramReponse = await screen.getByTestId('ParamReponse');
        const paramOuverte  = await within(paramReponse).getByTestId('ParamOuverte').querySelector('input');

        await expect(paramOuverte).toBeInTheDocument();
})



test("ParamQuestion rendering ParamQCM after clicking the change", async () => {
    render(<ParamQuestion 
        updateQuestionData={updateQuestionData}
        updateReponseData={updateReponseData}
        addQuestionInDataArray={addQuestionInDataArray} 
        remQuestionInDataArray={remQuestionInDataArray}
        addReponseInDataArray={addReponseInDataArray} 
        generateUniqueID={generateUniqueID}
        questionType={questionType}
        remReponseInDataArray = {remReponseInDataArray}
        remAllReponsesInDataArray ={remAllReponsesInDataArray}
        />)

        const check  = await screen.getByTestId('ouverteOrQCM').querySelector('input');
        const paramReponse = await screen.getByTestId('ParamReponse');
        //const paramQCM  = await within(paramReponse).getByTestId('ParamQCM').querySelector('input'); -> pas ici, on dois chercher après avoir cliqué et render
        
        await userEvent.click(check);

        const paramQCM  = await within(paramReponse).getByTestId('ParamQCM').querySelector('input');
        
        await expect(paramQCM).toBeInTheDocument();
})


test("ParamQuestion rendering ParamOuverte back after clicking twice the change", async () => {
    render(<ParamQuestion 
        updateQuestionData={updateQuestionData}
        updateReponseData={updateReponseData}
        addQuestionInDataArray={addQuestionInDataArray} 
        remQuestionInDataArray={remQuestionInDataArray}
        addReponseInDataArray={addReponseInDataArray} 
        generateUniqueID={generateUniqueID}
        questionType={questionType}
        remReponseInDataArray = {remReponseInDataArray}
        remAllReponsesInDataArray ={remAllReponsesInDataArray}
        />)

        const check  = await screen.getByTestId('ouverteOrQCM').querySelector('input');
        const paramReponse = await screen.getByTestId('ParamReponse');
        // const paramOuverte  = await within(paramReponse).getByTestId('ParamOuverte').querySelector('input'); -> pas ici, on dois chercher après avoir cliqué et render
        

        await userEvent.click(check); // dblClick ? -> peut-être moyen
        await userEvent.click(check);

        const paramOuverte  = await within(paramReponse).getByTestId('ParamOuverte').querySelector('input');

        await expect(paramOuverte).toBeInTheDocument();
})


