import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const States = ({ children }) => {
  const [details, setDetails] = useState();

  return (
    <Context.Provider
      value={{
        details,

        setDetails,
      }}>
      {children}
    </Context.Provider>
  );
};


export const useStates = () => useContext(Context);