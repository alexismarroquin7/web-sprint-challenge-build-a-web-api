const Action = require("../actions/actions-model");
const Project = require("../projects/projects-model");

const validateActionId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const action = await Action.get(id);
    if(!action){
      res.status(404).json({ message: `No action with id: ${id} was found` });
    } else {
      req.action = action;
      next();
    }
  } catch (err) {
    next(err);
  }
}

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const project = await Project.get(id);
    if(!project){
      res.status(404).json({ message: `No project with id: ${id} was found` });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateActionId,
  validateProjectId
}