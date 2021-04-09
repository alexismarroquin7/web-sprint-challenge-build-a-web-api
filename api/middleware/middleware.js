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

const validateActionBody = (req, res, next) => {
  const action = req.body;
  if(!action.project_id || !action.description || !action.notes){
    res.status(400).json({ message: "Action requires project_id, description, && notes" })
  } else {
    next();
  }
}

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(!id){
      const project = await Project.get(req.body.project_id);
      req.project = project;
      next();
    } else {
      const project = await Project.get(id);
      if(!project){
        res.status(404).json({ message: `No project with id: ${id} was found` });
      } else {
        req.project = project;
        next();
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateActionId,
  validateProjectId,
  validateActionBody
}