const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true }, // Added course link
    quiz: {
        name: { type: String, required: true },
        link: { type: String, required: true } // Added quiz link
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
