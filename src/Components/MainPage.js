import { useContext } from "react"
import AutocompleteBox from "./AutocompleteBox"
import DateTimeViewer from "./DateTimeViewer"
import ImageViewer from "./Image"
import ShortcutListItems from "./ListItems"
import Terminal from "./Terminal"
import { SelectedImageContext } from "../Contexts/SelectedImageContext"

const MainPage = () => {
    const { SelectedImage } = useContext(SelectedImageContext);

    return (
        <div className="MainPageContainer">
            <div id="body" style={{ backgroundColor: SelectedImage.main }}>
                <DateTimeViewer></DateTimeViewer>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Terminal></Terminal>
                    <AutocompleteBox></AutocompleteBox>
                </div>
                <div className="main" id="main">
                    <ImageViewer></ImageViewer>
                    <ShortcutListItems></ShortcutListItems>
                </div>
            </div>
        </div>
    )
}

export default MainPage 