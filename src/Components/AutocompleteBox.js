import { useContext } from "react";
import { CommandContext } from "../Contexts/CommandsContext";

const AutocompleteBox = () => {
    const {AutoCompleteCommandsList} = useContext(CommandContext);
    return (
        <div className="terminal-input-small">
            <ul id="autocomplete-list">
                {AutoCompleteCommandsList.map((item, index) => (
                    <li key={index}>{item.command}</li>
                ))}
            </ul>
        </div>
    )
}


export default AutocompleteBox