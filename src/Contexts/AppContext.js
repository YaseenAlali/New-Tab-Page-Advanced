import { createContext } from "react";
import { SelectedImageProvider } from "./SelectedImageContext";
import MainPage from "../Components/MainPage";
import { CommandContextProvider } from "./CommandsContext";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider>
            <SelectedImageProvider>
                <CommandContextProvider>
                    <MainPage></MainPage>
                </CommandContextProvider>
            </SelectedImageProvider>
        </AppContext.Provider>
    )
};

export { AppContext, AppProvider };