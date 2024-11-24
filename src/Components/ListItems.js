import { useContext } from "react";
import { SelectedImageContext } from "../Contexts/SelectedImageContext";

const ShortcutListItems = () => {
    const { SelectedImage } = useContext(SelectedImageContext);
    const ShortCuts = require("../Resources/Shortcuts.json").shortcuts;
    return (
        <div className="shortcuts" id="shortcuts" style={{ backgroundColor: SelectedImage.secondary }}>
            <ul>
                {ShortCuts.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShortcutListItems