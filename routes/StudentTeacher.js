const express = require('express')
const router = express.Router()

const StudentTeacher = require('../controllers/StudentTeacher')

router.post('/createStudent', StudentTeacher.createStudent)
router.post('/createTeacher', StudentTeacher.createTeacher)
router.post('/assignTeacherToStudent', StudentTeacher.assignTeacherToStudent)
router.post('/getTeachers', StudentTeacher.getTeachers)
router.post('/getStudents', StudentTeacher.getStudents)
router.post('/editStudent', StudentTeacher.editStudent)
router.post('/getAssignedStudentsToTeacher', StudentTeacher.getAssignedStudentsToTeacher)
router.post('/deleteStudent', StudentTeacher.deleteStudent)
router.post('/deleteTeacher', StudentTeacher.deleteTeacher)

module.exports = router