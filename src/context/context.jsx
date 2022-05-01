import React, { useState } from "react";
export const ActionContext = React.createContext();

const ActionContextProvider = (props) => {
  const [bookState, setBookState] = useState({});
  console.log(bookState);
  return (
    <ActionContext.Provider value={{ bookState, setBookState }}>
      {props.children}
    </ActionContext.Provider>
  );
};

export default ActionContextProvider;
