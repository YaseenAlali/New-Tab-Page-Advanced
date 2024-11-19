import { useContext, useEffect, useRef } from "react";
import { CommandContext } from "../Contexts/CommandsContext";

const Terminal = () => {
  const { setCurrentCommandText, autoCompleteCommand, currentCommandText, onCommandEnterPressed } = useContext(CommandContext);
  const inputRef = useRef(null);

  const handleTextInputChange = (e) => {
    setCurrentCommandText(e.target.innerText);
  };


  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      autoCompleteCommand();
    }
    else if (e.key === "Enter") {
      onCommandEnterPressed();
    }
  };

  useEffect(() => {
    if (inputRef.current && inputRef.current.innerText !== currentCommandText) {
      let selection = window.getSelection();

      inputRef.current.innerText = currentCommandText;

      const range = document.createRange();
      selection = window.getSelection();

      range.selectNodeContents(inputRef.current);
      range.collapse(false);

      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [currentCommandText]);

  return (
    <div className="terminal-input" id="terminalinput">
      <div className="prompt">
        <span>Cow@SkoomaDen:~$</span>
      </div>
      <div
        className="input-container"
        contentEditable="true"
        id="command-input"
        spellCheck="false"
        onInput={handleTextInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default Terminal;
