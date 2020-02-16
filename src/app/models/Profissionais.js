import { Model, DataTypes } from "sequelize";

class Profissionais extends Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notEmpty: true, //não permite campo vazio
						len: [3, 70], // determina a quantidade minima e maxima de caracteres
						isAlpha: true // permite apenas letras,
					}
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						isEmail: true,
						notEmpty: true //não permite campo vazio
					}
				},
				cpf_cnpj: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: [11, 18], // determina a quantidade minima e maxima de caracteres
						notEmpty: true //não permite campo vazio
					},
				},
				senha: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: [6, 10], // determina a quantidade minima e maxima de caracteres
						notEmpty: true //não permite campo vazio
					}
				},
				estado: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: [2, 2] // determina a quantidade minima e maxima de caracteres
					}
				},
				cidade: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notEmpty: true, //não permite campo vazio
						len: [3, 30], // determina a quantidade minima e maxima de caracteres
						isAlpha: true // permite apenas letras,
					}
				},
				bairro: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notEmpty: true, //não permite campo vazio
						len: [3, 30] // determina a quantidade minima e maxima de caracteres
					}
				},
				cep: DataTypes.STRING,
				endereco: DataTypes.STRING,
				numero: DataTypes.STRING,
				celular: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notEmpty: true, //não permite campo vazio
						len: [9, 14] // determina a quantidade minima e maxima de caracteres
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
				texto_anuncio: {
					type: DataTypes.TEXT,
					validate: {
						len: [0, 2000] // determina a quantidade minima e maxima de caracteres
					}
				},
				tags: DataTypes.JSON,
				foto: DataTypes.TEXT,
				imagens: DataTypes.TEXT
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
