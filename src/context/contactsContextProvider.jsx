import { createContext } from "react";

export const ContactsContext = createContext();

export const ContactsContextProvider = ({ children }) => {
    return <ContactsContext.Provider value={{ }}>
        {children}</ContactsContext.Provider>
};
