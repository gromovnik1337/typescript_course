import {Router} from 'express';
import { createToDo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

// Create the middleware & expose basic routes.
const router = Router();

router.post('/', createToDo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router