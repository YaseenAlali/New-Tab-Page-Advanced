const ShortcutListItems = () => {
    const ShortCuts = require("../Resources/Shortcuts.json").shortcuts;
    return (
        <div className="shortcuts" id="shortcuts">
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