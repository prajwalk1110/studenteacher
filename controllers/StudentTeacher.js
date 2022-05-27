const Student = require('../models/Student')
const Teacher = require('../models/Teacher')

//Create Teacher
const createTeacher = (req, res, next) => {
    let teacher = new Teacher({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject
    })
    teacher.save()
    .then(response => {
        res.json({
            message: 'Teacher added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//Create Student
const createStudent = (req, res) => {
    let student = new Student({
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        section: req.body.section,
        assignedTeacher: req.body.assignedTeacher
    })
    student.save()
    .then(response => {
        res.json({
            message: 'Student added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    }) 
}

//Assign One Teacher to each student
const assignTeacherToStudent = (req, res) => {
    let studentID = req.body.studentID
    let teacherID = req.body.teacherID
    let teacher_name = teacherID.name

    let updatedData = {
        assignedTeacher: teacher_name
    }
    Student.findByIdAndUpdate(studentID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Teacher assigned to Student successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    }) 
}

//Get list of teachers with optional filtering(subject in this case)
const getTeachers = (req, res) => {
    let sub = req.body.subject
    Teacher.find({
        subject: sub
    })
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//Get list of students with optional filtering(class, section)
const getStudents = (req, res) => {
    let Class = req.body.class
    let Section = req.body.section
    Student.find({
        class: Class,
        section: Section
    })
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//Students can edit their profiles(editStudent)
const editStudent = (req, res) => {
    let studentID = req.body.studentID

    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        section: req.body.section,
        assignedTeacher: req.body.assignedTeacher
    }

    Student.findByIdAndUpdate(studentID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Student updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    }) 
}

//Get list of students assigned to a teacher(id)
const getAssignedStudentsToTeacher = (req, res) => {
    let teacherID = req.body.teacherID
    let teacher_name = teacherID.name
    Student.find({
        assignedTeacher: teacher_name
    })
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//Delete a Student
const deleteStudent = (req, res) => {
    let studentID = req.body.studentID
    Student.findByIdAndRemove(studentID)
    .then(() => {
        res.json({
            message: 'Student deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    }) 
}

//Delete a Teacher
const deleteTeacher = (req, res) => {
    let teacherID = req.body.teacherID
    Teacher.findByIdAndRemove(teacherID)
    .then(() => {
        res.json({
            message: 'Teacher deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    }) 
}

module.exports = {
    createTeacher, createStudent, assignTeacherToStudent, getTeachers, getStudents, editStudent, getAssignedStudentsToTeacher, deleteStudent, deleteTeacher
}