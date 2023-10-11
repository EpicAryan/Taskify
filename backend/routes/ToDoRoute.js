const express = require('express');
const { getToDo, saveToDo , updateToDo, deleteToDo} = require("../controllers/ToDoController");

const router = express.Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
module.exports = router;