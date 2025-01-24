import { createContext } from "react";
import { SelectedImageProvider } from "./SelectedImageContext";
import MainPage from "../Components/MainPage";
import { CommandContextProvider } from "./CommandsContext";
import { ExtraOptionsProvider } from "./ExtraOptionsContext";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider>
            <SelectedImageProvider>
                <CommandContextProvider>
                    <ExtraOptionsProvider>
                      <MainPage></MainPage>
                    </ExtraOptionsProvider>
                </CommandContextProvider>
            </SelectedImageProvider>
        </AppContext.Provider>
    )
};

export { AppContext, AppProvider };