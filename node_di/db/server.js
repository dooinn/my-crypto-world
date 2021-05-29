const express = require('express');
const cors = require('cors')
const app = express();
const api = require('./api');
require('dotenv').config();

const PORT = process.env.PORT || 80;


app.use(cors({
    credentials: true,
    methods: ['GET', 'POST'],
    origin: [
        'https://traveler123.shop',
        'http://localhost:3000',
    ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);


app.listen(PORT, () => {
    console.log('Start DB Server PORT NUMBER :' + PORT);
});