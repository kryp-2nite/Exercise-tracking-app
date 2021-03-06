const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes')

router.post('/users/:id', notesController.create);
router.get('/users/:id/notes', notesController.noteIndex);

module.exports = router;