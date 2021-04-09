// Write your "projects" router here!
const express = require("express");
const Project = require("./projects-model");
const mw = require("../middleware/middleware");
const router = express.Router();

router.get(`/`, async (req, res, next) => {
  try {
    const projects = await Project.get();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.get(`/:id`, mw.validateProjectId, async (req, res) => {
  res.status(200).json(req.project);
});

router.post(`/`, mw.validateProjectBody, async (req, res, next) => {
  const project = req.body;
  try {
    const newProject = await Project.insert(project);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

router.delete(`/:id`, mw.validateProjectId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedProject = await Project.remove(id);
    res.status(200).json(deletedProject);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res) => {
  res.status(500).json({
    custom: "Something failed",
    error: err.message
  })
});

module.exports = router;