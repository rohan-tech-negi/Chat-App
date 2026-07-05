const app = require("./app");

process.on("uncaughtException")

const http = require("http");

const server = http.createServer(app);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
