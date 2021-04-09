const Action = require("../actions/actions-model");

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

module.exports = {
  validateActionId
}