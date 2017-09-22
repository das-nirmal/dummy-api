const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = new express();
app.use(cors());
app.use(morgan('tiny'));

app.use((req, res) => {
    res.json({
        message: `Visualization Dummy API: Received ${req.method} Request at ${req.url}`
    });
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => { 

    if(err) {
        return console.log(`Error encountered listening at port ${port}`);
    }

    console.log(`Server is up on port ${port}`);
});