import { Model, DataTypes } from "sequelize";

class ProfissionaisTags extends Model {
	static init(sequelize) {
		super.init(
			{
				id_profissional: {
					type: DataTypes.INTEGER
				},
				id_tag: {
					type: DataTypes.INTEGER
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
			as: "ProfTags_Profs"
		});
		this.belongsTo(models.Tags, {
			foreignKey: "id_tag",
			as: "ProfTags_Tags"
		});
	}
}

export default ProfissionaisTags;
