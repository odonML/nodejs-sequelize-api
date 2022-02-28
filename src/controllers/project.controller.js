import Project from '../models/Project.model';
import Task from '../models/Task.model';

const createProject = async (req, res) => {
	const { name, priority, description, deliverydate } = req.body;
	try {
		const data = await Project.create(
			{
				name,
				priority,
				description,
				deliverydate,
			},
			{ fields: ['name', 'priority', 'description', 'deliverydate'] }
		);
		res.json({
			ok: true,
			data,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

const getProjects = async (req, res) => {
	try {
		const data = await Project.findAll();
		res.json({
			ok: true,
			data,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

const getOneProject = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Project.findOne({
			where: { id },
		});
		const tasks = await Task.findAll({
			where: { projectId: id },
		});

		console.log(tasks, data);
		res.json({
			ok: true,
			data: {
				data,
				tasks: tasks,
			},
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

const deleteOneProject = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Project.destroy({
			where: {
				id,
			},
		});
		res.json({
			ok: true,
			data,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

const updateProject = async (req, res) => {
	const { id } = req.params;
	const { name, description, priority, deliverydate } = req.body;
	try {
		const projects = await Project.findAll({
			where: {
				id,
			},
		});
		if (projects.length > 0)
			projects.forEach(
				async (project) =>
					await project.update({
						name,
						description,
						priority,
						deliverydate,
					})
			);
		res.json({
			ok: true,
			data: projects,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: [],
			msj: error,
		});
	}
};

export {
	createProject,
	getProjects,
	getOneProject,
	deleteOneProject,
	updateProject,
};
