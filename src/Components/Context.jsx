import { createContext, useState } from "react"
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult]= useState("");

    const sendInput = async () => {

        setResult("");
        setInput("");
        setShowResult(true);
        setLoading(true);
        setRecentPrompt(input);
        const response = await run(input);
        setResult(response);
        setLoading(false);
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
