const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const quotes = require('./quotes.json');
const quotesLength = quotes.length;

app.get('/', (req, res) => {
    const randomQuoteIndex = Math.floor(Math.random() * quotesLength);
    res.send(quotes[randomQuoteIndex]);
});

app.get('/search', (req, res) => {
    const author = req.query.author;
    if (!author) {
        return res.status(400).send({ error: 'Author query parameter is required' });
    }

    const filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
    if (filteredQuotes.length === 0) {
        return res.status(404).send({ error: 'No quotes found for the given author' });
    }

    res.send(filteredQuotes);
});

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080');
});
