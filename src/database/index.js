import Sequelize from "sequelize";

import ProfissionaisModel from "../app/models/Profissionais";
import TagsModel from "../app/models/Tags";
import ProfissionaisTagsModel from "../app/models/ProfissionaisTags";
import PlanosModel from "../app/models/Planos";

const models = [
	ProfissionaisModel,
	TagsModel,
	ProfissionaisTagsModel,
	PlanosModel
];

import configBancoDeDados from "../config/db";

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(configBancoDeDados);

		models.map(model => model.init(this.connection));

		models.map(
			model => model.associate && model.associate(this.connection.models)
		);
	}
}

export default new Database();
