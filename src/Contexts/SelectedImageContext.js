import { GetRandomImage } from "../Util/Utilities";

const { createContext, useState, useEffect } = require("react");

const SelectedImageContext = createContext();
const SelectedImageProvider = ({ children }) => {
    const [SelectedImage, setSelectedImage] = useState(GetRandomImage());
    useEffect(() => {
        document.documentElement.style.backgroundColor = SelectedImage.main;
    }, [SelectedImage])

    const selectImage = (selectedImageId) => {
        const images = require("../Resources/Images.json").images;
        const SelectedImage = images.find(image => image.id === selectedImageId);
        if (SelectedImage) {
            setSelectedImage(SelectedImage);
        }
    }

    return (
        <SelectedImageContext.Provider value={{ SelectedImage, setSelectedImage, selectImage }}>
            {children}
        </SelectedImageContext.Provider>
    )
}

export { SelectedImageContext, SelectedImageProvider };