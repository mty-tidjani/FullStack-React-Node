import * as http from 'http';
import * as express from 'express';

const app = express();

const server = http.createServer(app);

server.listen(4000, () => {
  console.log(`Server Listening at ${4000}`);
});
