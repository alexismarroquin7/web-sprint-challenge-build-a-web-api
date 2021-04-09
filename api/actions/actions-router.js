// Write your "actions" router here!
const express = require("express");
const Action = require("./actions-model");
const mw = require("../middleware/middleware");
const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const actions = await Action.get();
    res.status(200).json(actions);
  } catch (err) {
    next(err);
  }
})

router.get(`/:id`, mw.validateActionId, async (req, res) => {
  res.status(200).json(req.action);
});

router.use((err, req, res) => {
  res.status(500).json({
    custom: "Something failed",
    error: err.message
  });
});

module.exports = router;