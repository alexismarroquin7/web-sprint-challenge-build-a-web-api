const express = require('express');
const actionsRouter = require("./actions/actions-router");
const server = express();

server.use(`/api/actions`, actionsRouter);

module.exports = server;
