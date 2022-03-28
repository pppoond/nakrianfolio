const express = require('express');
const app = express();

app.use(express.json())

let PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

