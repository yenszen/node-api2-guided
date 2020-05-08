// create and export an express application
// with its middleware/handlers/endpoints

const express = require("express");
const server = express();
const hubsRouter = require("./hubs/hubs-router");

server.use(express.json());
server.use("/api/hubs", hubsRouter);

server.get("/", (req, res) => {
  const { name = "noone" } = req.query;
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome ${name} to the Lambda Hubs API</p>
  `);
});

module.exports = server;
