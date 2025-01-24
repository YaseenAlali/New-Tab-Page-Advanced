import { useContext } from "react"
import AutocompleteBox from "./AutocompleteBox"
import DateTimeViewer from "./DateTimeViewer"
import ImageViewer from "./Image"
import ShortcutListItems from "./ListItems"
import Terminal from "./Terminal"
import { SelectedImageContext } from "../Contexts/SelectedImageContext"
import { ExtraOptions } from "./ExtraOptions"

const MainPage = () => {
    const { SelectedImage } = useContext(SelectedImageContext);

    return (
        <div>
            <div id="body" style={{ backgroundColor: SelectedImage.main }}>
                <ExtraOptions></ExtraOptions>
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
    );
};

export default MainPage 