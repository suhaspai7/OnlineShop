import React ,{createContext, useState} from 'react';

export const UserNameContext = createContext();

export const UserNameProvider = (props) => {
    const [userName,setUserName]=useState("Hello Guest!")
    const [cart,setCart] = useState(0);

    return(
        <UserNameContext.Provider value={'hello'}>
            {props.children}
        </UserNameContext.Provider>

    );

}