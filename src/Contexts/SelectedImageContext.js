import { GetRandomImage } from "../Util/Utilities";

const { createContext, useState, useEffect } = require("react");

const SelectedImageContext = createContext();
const SelectedImageProvider = ({ children }) => {
    const [SelectedImage, setSelectedImage] = useState(GetRandomImage());
    useEffect(() => {
        document.documentElement.style.backgroundColor = SelectedImage.main;
    }, [SelectedImage])

    return (
        <SelectedImageContext.Provider value={{ SelectedImage, setSelectedImage }}>
            {children}
        </SelectedImageContext.Provider>
    )
}

export { SelectedImageContext, SelectedImageProvider };