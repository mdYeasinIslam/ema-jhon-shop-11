import React, { createContext } from 'react';

export const AuthContext = createContext('')
const UserContext = ({children}) => {

    const userInfo ={name:'hasan'}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;