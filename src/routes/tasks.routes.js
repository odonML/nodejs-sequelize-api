import { Router } from 'express';
import {
	createTask,
	deleteTask,
	getOneTask,
	getTasks,
	updateTask,
} from '../controllers/task.controller';

const router = Router();

// /api/tasks

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;
