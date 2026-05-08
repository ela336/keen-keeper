import React, { Children, createContext, useContext } from 'react';
import { useState } from 'react';

export const fcontext= createContext();


const Friendcontext = ({children}) => {
    const [activity,setActivity] = useState([]);
    
    return   <fcontext.Provider value={{activity, setActivity}}>
        {children}
    </fcontext.Provider>   
    
};

export default Friendcontext;