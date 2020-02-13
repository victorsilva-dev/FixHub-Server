import { Model, DataTypes } from "sequelize";

class Profissionais extends Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: DataTypes.STRING,
					validate: {

						len: [3, 70], // determina a quantidade minima e maxima de caracteres
						isAlpha: true // permite apenas letras,
					}
				},
				email: {
					type: DataTypes.STRING,
					validate: {
						isEmail: true,

					}
				},
				cpf_cnpj: {
					type: DataTypes.STRING,
					validate: {
						len: [11, 18] // determina a quantidade minima e maxima de caracteres

					},
				},
				senha: {
					type: DataTypes.STRING,
					validate: {
						len: [6, 10] // determina a quantidade minima e maxima de caracteres

					}
				},
				estado: {
					type: DataTypes.STRING,
					validate: {
						len: [2, 2] // determina a quantidade minima e maxima de caracteres
					}
				},
				cidade: {
					type: DataTypes.STRING,
					validate: {

						len: [3, 30], // determina a quantidade minima e maxima de caracteres
						isAlpha: true // permite apenas letras,
					}
				},
				bairro: {
					type: DataTypes.STRING,
					validate: {

						len: [3, 30] // determina a quantidade minima e maxima de caracteres
					}
				},
				cep: DataTypes.STRING,
				endereco: DataTypes.STRING,
				numero: DataTypes.STRING,
				celular: {
					type: DataTypes.STRING,
					validate: {

						len: [0, 14] // determina a quantidade minima e maxima de caracteres
					}
				},
				telefone: {
					type: DataTypes.STRING,
					validate: {
						len: [0, 13] // determina a quantidade minima e maxima de caracteres
					}
				},
				whatsapp: {
					type: DataTypes.STRING,
					validate: {
						len: [0, 14] // determina a quantidade minima e maxima de caracteres
					}
				},
				linkedin: {
					type: DataTypes.STRING,
					validate: {
						len: [0, 70] // determina a quantidade minima e maxima de caracteres
					}
				},
				facebook: {
					type: DataTypes.STRING,
					validate: {
						len: [0, 70] // determina a quantidade minima e maxima de caracteres
					}
				},
				site: {
					type: DataTypes.STRING,
					validate: {
						len: [0, 70] // determina a quantidade minima e maxima de caracteres
					}
				},
				text_anuncio: {
					type: DataTypes.TEXT,
					validate: {
						len: [0, 500] // determina a quantidade minima e maxima de caracteres
					}
				},
				tags: DataTypes.JSON,
				foto: DataTypes.JSON,
				imagens: DataTypes.JSON
			},
			{
				sequelize,
				freezeTableName: true // essa opção impede que o sequelize pluralize as tabelas.
			}
		);

		return this;
	}
}

export default Profissionais;
