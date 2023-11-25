import { useState } from "react";

export default function TaskInput( props ) {
    const [placeholder, setPlaceholder] = useState("What do u want to do?");
    const [inputData, setInputData] = useState("");

    function onCreateClicked() {
        if (inputData.length < 5) {
            setPlaceholder("Too small (=");
            setInputData("");
            return;
        }
        props.onSave(inputData);
        setPlaceholder("What do u want to do?");
        setInputData("");
    }

    function handleInputChange(event) {
        setInputData(event.target.value);
    }

    return (
        <div id="inputZone" className="divWithBorder">
            <input
                className="input"
                placeholder={placeholder}
                value={inputData}
                onChange={handleInputChange}
            />
            <button id="addBtn" onClick={onCreateClicked}>
                Add
            </button>
        </div>
    );
}
