
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const mongoose = require("mongoose");
// const dotenv = require('dotenv');  // can do it this way
// dotenv.config();
require('dotenv').config()  // can do it this way too

const connectDB = require('./db/connect')

//middleware
app.use(express.json());


//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id') - delete task

const port = process.env.PORT;
const host = process.env.HOST;
const URL = process.env.MONGO_URL

const start = async () => {
  try {
    await connectDB(URL).then(console.log('CONNECTED TO THE DB...'))    
    app.listen(port, console.log(`server is listening on ${host}:${port}...`));
  } catch (error) {
    console.log(error)
  }
}

start()

