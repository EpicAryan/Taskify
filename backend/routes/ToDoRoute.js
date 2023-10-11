const express = require('express');
const { getToDo, saveToDo  } = require("../controllers/ToDoController");

const router = express.Router();

router.get('/get', getToDo);
router.post('/save', saveToDo);
module.exports = router;