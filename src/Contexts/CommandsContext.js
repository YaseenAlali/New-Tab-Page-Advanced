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

    const onCommandListItemPressed = (command) => {
        setCurrentCommandText(command);
        setAutoCompleteCommandsList([]);
    };

    const goToCommandUrlNoArgs = (command) => {
        window.location.href = command.url;
    } 

    const goToCommandUrlWithArgs = (command, args) => {
        const query = queryParser(args);
        switch (command.command) {
            case "youtube":
                window.location.href = `https://www.youtube.com/results?search_query=${query}`;
                break;
            case "google":
                window.location.href = `https://www.google.com/search?q=${query}`;
                break;
            case "torrent":
                window.location.href = `https://www.1377x.to/search/${query}/1/`;
                break;
            case "anime":
                window.location.href = `https://nyaa.si/?f=0&c=0_0&q=${query}`;
                break;
            default:
                break;
        }    
    }

    function queryParser(words) {
        let queryItems = words.slice(1).filter(item => item.length != 0);
        let query = queryItems[0];
        for (let i = 1; i < queryItems.length; i++) {
            query += '+' + queryItems[i];
        }
        return query;
    }

    const onCommandEnterPressed = () => {
        const trimmedCommand = currentCommandText.trim();
        const commandWords = trimmedCommand.split(" ");
        const commandIsMultiPart = commandWords.length > 1;
        if (commandIsMultiPart){
            const firstCommandWord = commandWords[0];
            const matchingCommand = CommandsList.find(command => command.command.toLowerCase() === firstCommandWord.toLowerCase());
            if (matchingCommand) {
                if (matchingCommand.canHaveArguments) {
                    goToCommandUrlWithArgs(matchingCommand, commandWords);
                }
                else{
                    goToCommandUrlNoArgs(matchingCommand);
                }
            }
        }
        else{
            const matchingCommand = CommandsList.find(command => command.command.toLowerCase() === trimmedCommand.toLowerCase());
            if (matchingCommand) {
                goToCommandUrlNoArgs(matchingCommand);
            }
        }
    }

    useEffect(() => {
        suggestCommands();
    }, [currentCommandText]);

    return (
        <CommandContext.Provider value={{ currentCommandText, setCurrentCommandText, AutoCompleteCommandsList, autoCompleteCommand, onCommandListItemPressed, onCommandEnterPressed }}>
            {children}
        </CommandContext.Provider>
    );
};

export { CommandContext, CommandContextProvider };
