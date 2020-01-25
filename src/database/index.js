import Sequelize from 'sequelize';

import ProfissionalModel from '../app/models/ProfissionalModel';

const models = [ProfissionalModel];

import configBancoDeDados from '../config/db';

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(configBancoDeDados);

		models
			.map(model => model.init(this.connection))
	}
}

export default new Database();