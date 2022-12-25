const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.static('./public'));

// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`));
    }
    catch (err) {
        console.log(err)
    }
}

start();

const port = 3000;


