const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<marquee style="background-color:#ff00ff; font-size: 31px">Bistro Boss server is running</marquee>');
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
