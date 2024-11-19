import { GetRandomImage } from "../Util/Utilities";

const { createContext, useState } = require("react");

const SelectedImageContext = createContext();
const SelectedImageProvider = ({ children }) => {
    const [SelectedImage, setSelectedImage] = useState(GetRandomImage());

    return (
        <SelectedImageContext.Provider value={{ SelectedImage, setSelectedImage }}>
            {children}
        </SelectedImageContext.Provider>
    )
}

export { SelectedImageContext, SelectedImageProvider };