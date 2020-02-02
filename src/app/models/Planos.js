import { Model, DataTypes } from "sequelize";

class Planos extends Model {
	static init(sequelize) {
		super.init(
			{
				descricao: {
					type: DataTypes.TEXT
				},
				inicio: {
					type: DataTypes.DATE
				},
				fim: {
					type: DataTypes.DATE
				},
				id_profissional: {
					type: DataTypes.INTEGER,
					validate: {
						notEmply: true  //não permite campo vazio
					}
				}
			},
			{
				sequelize,
				freezeTableName: true // essa opção impede que o sequelize pluralize as tabelas. 
			}
		);
	}
	static associate(models) {
		this.belongsTo(models.Profissionais, {
			foreignKey: "id_profissional",
			as: "Planos_Profs"
		});
	}
}

export default Planos;
