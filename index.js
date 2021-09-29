const express = require('express');
const app = express();
const port = 8000;

//Rota
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log('SERVIDOR OK');
});
