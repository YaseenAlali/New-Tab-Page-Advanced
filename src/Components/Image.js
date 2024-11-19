import { useContext } from "react"
import { SelectedImageContext } from "../Contexts/SelectedImageContext";

const ImageViewer = () => {
    const {SelectedImage} = useContext(SelectedImageContext);

    return (
        <div className="imageContainer">
            <img src={SelectedImage.src} id="randomImage" style={{border: '2px solid white'}}></img>
        </div>
    )
}

export default ImageViewer