const express = require('express');
const { getTodos, createTodos, getSingleTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers');

const router = express.Router()

router.get('/', getTodos)
router.post('/', createTodos)
router.get('/:id', getSingleTodo)
router.put('/:id', updateTodo )
router.delete('/:id', deleteTodo)



module.exports = router;