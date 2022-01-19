import { createContext, useState } from "react";



export const AppContext=createContext() // type

export const AppContextProvider=({children,store})=>{

    const {dispatch,getState} =store
    console.log(getState());

    const [dummy, setDummy] = useState([])
    const forceUpdate = () => setDummy((prev) => prev + 1);
    store.subscribe(forceUpdate);

    return <AppContext.Provider value={{dispatch,getState}}>
        {children}
    </AppContext.Provider>
}