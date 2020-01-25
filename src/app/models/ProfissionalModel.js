import { Model, DataTypes } from "sequelize";

class ProfissionalModel extends Model {
	static init(sequelize) {
		super.init(
			{
				nome: DataTypes.STRING,
				email: DataTypes.STRING,
				cpf_cnpj: DataTypes.STRING,
				foto: {
					type: DataTypes.JSON,
					defaultValue: {
						links: [
							"https://img.favpng.com/22/2/18/user-profile-computer-icons-avatar-clip-art-png-favpng-r07Pkhn94hZtzwcELUjUALFJU.jpg"
						]
					}
				}
			},
			{
				sequelize,
				tableName: "profissionais"
			}
		);
		return this;
	}
}

export default ProfissionalModel;
