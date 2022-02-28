import express, { json } from 'express';
import morgan from 'morgan';
// Importing routes
import projectsRoutes from './routes/projects.routes';
import tasksRoutes from './routes/tasks.routes';

// Initialisiton
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);

export default app;
