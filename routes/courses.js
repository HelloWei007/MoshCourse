const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');



const Course = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    }
}));


router.get('/', async (req, res) => {
    const courses = await Course.find().sort('name');
    res.send(courses);
});

router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('the course not found');
    res.send(course);

});

//use postman and send /api/courses with body (json) _> "name" : x
router.post('/', async (req, res) => {

    const {
        error
    } = validateCourse(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

   let course = new Course({name: req.body.name});
   course = await genre.save(); 
   res.send(course);
});

router.put('/:id', async (req, res) => {
     const {
         error
     } = validateCourse(req.body);

     if (error) {
         res.status(400).send(error.details[0].message);
         return;
     }

    const course = await Course.findByIdAndUpdate(req.params.id,
        {name: req.body.name},
        {new : true}
    )

    if (!course) return res.status(404).send('the course not found');

    res.send(course);

});
router.delete('/:id', async (req, res) => {
    const course = await Course.findByIdAndRemove(req.params.id);
    if (!course) return res.status(404).send('the course not found');
    res.send(course);

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

module.exports = router;