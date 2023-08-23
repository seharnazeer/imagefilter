import { useContext,useReducer,createContext } from "react";
const mycontext=createContext();
export const StateProvider=({InitialState,reducer,children})=>(

    <mycontext.Provider value={useReducer(reducer,InitialState)}>
    {
        children
    }
    </mycontext.Provider> 
);
export const useStateprovider=()=>useContext(mycontext);