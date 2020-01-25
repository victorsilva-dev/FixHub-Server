import express from 'express';
import routes from './routes';
import cors from 'cors';
import http from 'http';

import './database/index.js';

class Server {
	constructor() {
		this.app = express();
		this.server = http.Server(this.app);
		this.middlewares();
		this.routes();
	}
	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use(routes);
	}
}

export default new Server().server;