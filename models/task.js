const mongoose = require("mongoose");

//create the structure for the documents in
//the collection. Only these properties will be
//excepted, additional values will be ignored
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"], //can just use "required:true", but adding array, can include error message
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false, //start by creating new tasks, and not completed
  },
});

module.exports = mongoose.model("Task", taskSchema);
