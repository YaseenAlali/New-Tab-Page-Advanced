import { useContext } from "react";
import { CommandContext } from "../Contexts/CommandsContext";

const AutocompleteBox = () => {
    const { AutoCompleteCommandsList, onCommandListItemPressed } = useContext(CommandContext);

    const handleItemClick = (command) => {
        onCommandListItemPressed(command);
    };

    return (
        <div className="terminal-input-small">
            <ul id="autocomplete-list">
                {AutoCompleteCommandsList.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item.command)}>
                        {item.command}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AutocompleteBox;
