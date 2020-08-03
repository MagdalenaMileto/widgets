import React, {useState} from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
];

const Translate = () => {
    const [lenguage, setLenguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input vlaue={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
                label="Select a Lenguage"
                options={options}
                selected={lenguage}
                onSelectedChange={setLenguage}
            />
        </div>
    )
};

export default Translate;