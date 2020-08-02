import React, {useState, useEffect} from "react";

//We will keep the exercise minimalist, doing all the search component in the same file,
// we are not interested in the use of props at the moment, we only want to learn hooks.
const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('I run after einitial render and after every change of data since last one')
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={term => setTerm(term.target.value)}
                        className="input"/>
                </div>
            </div>
        </div>
    )
};
export default Search;