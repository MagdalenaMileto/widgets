import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend in JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating componets'
    }
];

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}