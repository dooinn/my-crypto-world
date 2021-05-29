const express = require('express')
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('<h1>Hello AWS</h1>')
})

app.listen(PORT, () => {
    console.log("Start Express Server")
});

