// _________ Dependency_______________

const http = require('http');
const app = require('./app');

// ___________ PORT___________________

const port = process.env.PORT || 2018;

// __________ main server_____________

const server = http.createServer(app);
server.listen(port, () => { console.log(`listening on port ${port}...`); });
module.exports = server;
