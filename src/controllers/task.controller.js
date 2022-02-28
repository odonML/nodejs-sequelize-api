import Task from '../models/Task.model';

const createTask = async (req, res) => {
	const { name, done, projectId } = req.body;
	try {
		const data = await Task.create(
			{
				name,
				done,
				projectId,
			},
			{ fields: ['name', 'done', 'projectId'] }
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

const getTasks = async (req, res) => {
	try {
		const data = await Task.findAll();
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

const getOneTask = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Task.findOne({
			where: { id },
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

const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Task.destroy({
			where: { id },
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

const updateTask = async (req, res) => {
	const { id } = req.params;
	const { name, description, priority, deliverydate } = req.body;
	try {
		const tasks = await Task.findAll({
			where: { id },
		});
		if (tasks.length > 0) {
			tasks.forEach(async (task) => {
				await task.update({
					name,
					description,
					priority,
					deliverydate,
				});
			});
		}
		res.json({
			ok: true,
			data: tasks,
		});
	} catch (error) {
		res.json({
			ok: false,
			data: {},
			msj: error,
		});
	}
};

export { createTask, getTasks, getOneTask, deleteTask, updateTask };
