import { createContext, useState } from "react";

const ExtraOptionsContext = createContext();

const ExtraOptionsProvider = ({ children }) => {
    const [ExtraOptionsEnabled, setExtraOptionsEnabled] = useState(false);
    const toggleExtraOptions = () => setExtraOptionsEnabled(!ExtraOptionsEnabled);


    return (
        <ExtraOptionsContext.Provider value={{ExtraOptionsEnabled, toggleExtraOptions}}>{children}</ExtraOptionsContext.Provider>
    )
}

export { ExtraOptionsContext, ExtraOptionsProvider }