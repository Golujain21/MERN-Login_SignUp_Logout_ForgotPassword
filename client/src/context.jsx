import React, { useContext,  useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext()

// const API = "https://fakestoreapi.com/products";

const intialState = {
    name:"",
    image:"",
};

const AppProvider = ({children}) =>{
    const [state , dispatch] = useReducer(reducer, intialState)
    const updateHomePage = () => {
        return dispatch({
             type:"HOME_UPDATE",
             payload:{
                name:"Parallels Partner",
                title:"Lavorare da casa come in azienda, con la massima sicurezza - Webinar Awingu"
             }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
             type:"ABOUT_UPDATE",
             payload:{
                name:"Awingu Partner",
                title:"Parallels Desktop for Mac Business Edition is built on the world’s best desktop virtualization solution, but also incorporates centralized administration capabilities to keep IT in control of virtual machines."
             }
        })
    }
    return <AppContext.Provider value={{ ...state , updateHomePage , updateAboutPage }}>{children}</AppContext.Provider>
} 

const useGlobleContext =() =>{
  return useContext(AppContext);
}

export {AppContext, AppProvider ,useGlobleContext};