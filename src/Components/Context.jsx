import { createContext, useEffect, useState } from "react"
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult]= useState("");

    const delayText = (index, newWord) => {
        setTimeout(() => {
            setResult(prev => prev + newWord);
        }, 70 * index)
    }


    const sendInput = async (inputText, resultText) => {

        setResult("");
        setInput("");
        setShowResult(true);
        if(!inputText && !resultText){
            setLoading(true);
            setRecentPrompt(input);
            const response = await run(input);

            const responseArrayForBoldText = response.split('**');
            let newResponse = '';
            for(let i = 0; i < responseArrayForBoldText.length; i++){
                if(i % 2 !== 0 || i === 1){
                    newResponse += `<b>${responseArrayForBoldText[i]}</b>`
                }
                else
                {
                    newResponse += responseArrayForBoldText[i];
                }
            }

            const responseArrayForNewLine = newResponse.split('*');
            let newResponseTwo = '';
            for(let i = 0; i < responseArrayForNewLine.length; i++){
                if(i > 1){
                    newResponseTwo += '<br>' + responseArrayForNewLine[i] + '<br>';
                }
                else
                {
                    newResponseTwo += responseArrayForNewLine[i] + '<br>';
                }
            }

            let finalArray = newResponseTwo.split(' ');
            for(let i = 0; i < finalArray.length; i++){
                delayText(i, finalArray[i]+" ");
            }
            setLoading(false);

            let newPrevPrompts = [...prevPrompts, {prompt: input, thisResult: newResponseTwo}]
            console.log(input)
            console.log(result);
            setPrevPrompts(newPrevPrompts);
        }
        else
        {
            setRecentPrompt(inputText);
            setResult(resultText);
        }
    }

    // sendInput('Hi');

    const states = {
        input, setInput, 
        recentPrompt, setRecentPrompt,
        prevPrompts, setPrevPrompts,
        showResult, setShowResult,
        loading, setLoading,
        result, setResult, sendInput
    }

    return (
        <Context.Provider value={states}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
