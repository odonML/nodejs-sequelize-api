import { Router } from 'express';
import {
	createProject,
	deleteOneProject,
	getOneProject,
	getProjects,
	updateProject,
} from '../controllers/project.controller';

const router = Router();

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getOneProject);
router.delete('/:id', deleteOneProject);
router.put('/:id', updateProject);

export default router;
