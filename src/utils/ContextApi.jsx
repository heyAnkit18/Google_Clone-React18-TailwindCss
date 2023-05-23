import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [imageSearch, setImaageSearch] = useState(false);
  return (
    <Context.Provider
      value={{
        imageSearch,
        setImaageSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
