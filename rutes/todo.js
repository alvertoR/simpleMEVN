import express from 'express';
import todoController from '../controllers/todo';

var router = express.Router();

router.post('/newTodo', todoController.addTodo);
router.get('/getTodos/:id', todoController.getTodo);
router.get('/getTodos', todoController.getTodos);
router.delete('/deleteTodo/:id', todoController.deleteTodo);
router.put('/updateTodo/:id', todoController.updateTodo);


module.exports = router;