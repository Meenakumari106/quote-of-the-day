import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';




function App() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(response => {
                setQuote(response.data.quote);
                setAuthor(response.data.author);
            });
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        const authorName = event.target.elements.authorName.value;
        axios.get(`http://localhost:8080/search?author=${authorName}`)
            .then(response => {
                setSearchResults(response.data);
            }).catch(error => {
                setSearchResults([]);
                alert(error.response.data.error);
            });
    };

    return (
        <div className="App">
            <h1>Quote of the Day</h1>
            <div className="quote-box">
                <p>{quote}</p>
                <h5>- {author}</h5>
            </div>
            <form onSubmit={handleSearch}>
                <input type="text" name="authorName" placeholder="Search by author" required />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {searchResults.map((result, index) => (
                    <div key={index} className="quote-box">
                        <p>{result.quote}</p>
                        <h5>- {result.author}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
