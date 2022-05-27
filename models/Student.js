const mongoose = require('mongoose')
const Schema =mongoose.Schema

const StudentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        // trim: true,
        // lowercase: true,
        // unique: true,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    class: {
        type: Number
    },
    section: {
        type: String
    },
    assignedTeacher: {
        type: String
    }
}, {timestaps: true})

// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student