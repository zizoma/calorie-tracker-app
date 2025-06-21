import { useState, createContext } from "react";

export const AppContext = createContext({
  currentDate: "",
  setCurrentDate: (val) => {},
  totalCalories: 0,
  setTotalCalories: (val) => {},
});

function AppContextProvider(props) {
  const { children } = props;
  const [currentDate, setCurrentDate] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);

  return (
    <AppContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        totalCalories,
        setTotalCalories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;
