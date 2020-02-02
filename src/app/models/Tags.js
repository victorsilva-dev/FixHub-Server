import { Model, DataTypes } from "sequelize";

class Tags extends Model {
	static init(sequelize) {
		super.init(
			{
				//não achei necessidade de validação, considerando que essa tabela somente nós manipulamos
				tag: DataTypes.STRING,
				categoria: DataTypes.STRING
			},
			{
				sequelize,
				freezeTableName: true // essa opção impede que o sequelize pluralize as tabelas. 
			}
		);

		return this;
	}
}

export default Tags;
