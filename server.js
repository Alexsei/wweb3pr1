const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/build.js', (req, res) => {
    res.sendFile('./dist/build.js', { root: __dirname });
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(__dirname);
    console.log("Listening Port localhost:" + port);
});
