const mongoose = require('mongoose')
const Schema =mongoose.Schema
const validateEmail = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  };
const StudentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    class: {
        type: Number,
        enum: [8, 9]
    },
    section: {
        type: String,
        enum: ["A", "B", "C"]
    },
    assignedTeacher: {
        type: String
    }
}, {timestaps: true})


const Student = mongoose.model('Student', StudentSchema)
module.exports = Student