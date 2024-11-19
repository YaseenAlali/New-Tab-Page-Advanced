import React, { useEffect, useState } from "react";
import commandsData from "../Resources/Commands.json";

const CommandContext = React.createContext();
const CommandsList = commandsData.commands;

const CommandContextProvider = ({ children }) => {
    const [currentCommandText, setCurrentCommandText] = useState("");
    const [AutoCompleteCommandsList, setAutoCompleteCommandsList] = useState([]);

    const suggestCommands = () => {
        const trimmedCommand = currentCommandText.trim();
        if (trimmedCommand === "") {
            setAutoCompleteCommandsList([]);
            return;
        }

        const commandToLowerCase = trimmedCommand.toLowerCase();
        const matchingCommands = CommandsList.filter(command =>
            command.command.toLowerCase().startsWith(commandToLowerCase)
        );
        setAutoCompleteCommandsList(matchingCommands);
    };

    const autoCompleteCommand = () => {
        if (AutoCompleteCommandsList.length > 0) {
            const firstCommand = AutoCompleteCommandsList[0].command;
            console.log(firstCommand);
            setCurrentCommandText(firstCommand);
        }
    };

    useEffect(() => {
        suggestCommands();
    }, [currentCommandText]);

    return (
        <CommandContext.Provider value={{ currentCommandText, setCurrentCommandText, AutoCompleteCommandsList, autoCompleteCommand }}>
            {children}
        </CommandContext.Provider>
    );
};

export { CommandContext, CommandContextProvider };
