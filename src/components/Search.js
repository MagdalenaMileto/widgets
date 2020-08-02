import React, {useState, useEffect} from "react";
import axios from "axios"

//We will keep the exercise minimalist, doing all the search component in the same file,
// we are not interested in the use of props at the moment, we only want to learn hooks.
const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId)
            };
        }
    }, [term]);

    //Using dangerouslySetInnerHTML opens our code to vulnerabilities, we never have to use it
    //unless we trust a 100% in the third party we do the request to.
    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    });

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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};
export default Search;