import AutocompleteBox from "./AutocompleteBox"
import DateTimeViewer from "./DateTimeViewer"
import ImageViewer from "./Image"
import ShortcutListItems from "./ListItems"
import StaticPage from "./Static"
import Terminal from "./Terminal"

const MainPage = () => {
    return (
        <div className="MainPageContainer">
            <div id="body">
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