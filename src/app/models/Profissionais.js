import { Model, DataTypes } from "sequelize";

class Profissionais extends Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						notEmpty: { msg: "O campo 'nome' deve ser preenchido" },
						len: {
							args: [3, 70],
							msg: "O campo 'nome' deve conter de 3 a 70 caracteres"
						}
					}
				},
				email: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						isEmail: {
							msg: "O campo 'email' deve seguir o formato email@email.com"
						},
						notEmpty: { msg: "O campo 'email' deve ser preenchido" }
					}
				},
				cpf_cnpj: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [11, 18],
							msg: "O campo 'cpf/cnpj' deve conter de 11 a 18 caracteres"
						},
						notEmpty: { msg: "O campo 'cpf/cnpj' deve ser preenchido" }
					}
				},
				senha: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [6, 32],
							msg: "O campo 'senha' deve conter de 6 a 32 caracteres"
						},
						notEmpty: { msg: "O campo 'senha' deve ser preenchido" }
					}
				},
				estado: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [6, 32],
							msg: "O campo 'estado' deve conter de 2 caracteres"
						},
						notEmpty: { msg: "O campo 'estado' deve ser preenchido" }
					}
				},
				cidade: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [3, 50],
							msg: "O campo 'cidade' deve conter de 3 a 50 caracteres"
						},
						notEmpty: { msg: "O campo 'cidade' deve ser preenchido" }
					}
				},
				bairro: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [3, 50],
							msg: "O campo 'bairro' deve conter de 3 a 50 caracteres"
						},
						notEmpty: { msg: "O campo 'bairro' deve ser preenchido" }
					}
				},
				cep: DataTypes.STRING,
				endereco: DataTypes.STRING,
				numero: DataTypes.STRING,
				celular: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						len: {
							args: [9, 14],
							msg: "O campo 'celular' deve conter de 9 a 14 caracteres"
						},
						notEmpty: { msg: "O campo 'calular' deve ser preenchido" }
					}
				},
				telefone: {
					type: DataTypes.STRING,
					validate: {
						len: {
							args: [0, 14],
							msg: "O campo 'telefone' deve conter até 13 caracteres"
						}
					}
				},
				whatsapp: {
					type: DataTypes.STRING,
					validate: {
						len: {
							args: [0, 14],
							msg: "O campo 'whatsapp' deve conter até 13 caracteres"
						}
					}
				},
				linkedin: {
					type: DataTypes.STRING,
					len: {
						args: [0, 70],
						msg: "O campo 'linkedin' deve conter até 70 caracteres"
					}
				},
				facebook: {
					type: DataTypes.STRING,
					len: {
						args: [0, 70],
						msg: "O campo 'facebook' deve conter até 70 caracteres"
					}
				},
				site: {
					type: DataTypes.STRING,
					len: {
						args: [0, 70],
						msg: "O campo 'site' deve conter até 70 caracteres"
					}
				},
				texto_anuncio: {
					type: DataTypes.TEXT,
					validate: {
						len: {
							args: [0, 3000],
							msg: "O campo 'texto_anuncio' deve conter até 3000 caracteres"
						}
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
