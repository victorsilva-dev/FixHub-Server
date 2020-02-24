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
						is: {
							args: /([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})|([0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2})/,
							msg:
								"O campo 'cpf_cnpj' deve seguir o padrão XXX.XXX.XXX-XX para cpf ou XX.XXX.XXX/XXXX-XX para cnpj"
						},
						len: {
							args: [14, 18],
							msg: "O campo 'cpf_cnpj' deve conter de 14 a 18 caracteres"
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
						is: {
							args: /[A-Z]{2}/,
							msg:
								"O campo 'estado' deve contar apenas letras alfanuméricas maiúsculas"
						},
						len: {
							args: [2, 2],
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
				cep: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						is: {
							args: /[0-9]{5}\-[0-9]{3}/,
							msg:
								"O campo 'cep' deve seguir o padrão XXXXX-XXX caso seja preenchido"
						},
						len: {
							args: [9, 9],
							msg:
								"O campo 'cep' deve conter 9 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'cep' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				endereco: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						len: {
							args: [1, 100],
							msg:
								"O campo 'endereco' deve conter de 1 a 100 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'endereco' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				numero: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						len: {
							args: [1, 5],
							msg:
								"O campo 'numero' deve conter de 1 a 5 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'numero' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				celular: {
					type: DataTypes.STRING,
					allowNull: false,
					validate: {
						is: {
							args: /\([0-9]{2,3}\) [0-9]{5}\-[0-9]{4}/,
							msg: "O campo 'celular' deve seguir o padrão (XX) XXXXX-XXXX"
						},
						len: {
							args: [15, 16],
							msg: "O campo 'celular' deve conter de 15 a 16 caracteres"
						},
						notEmpty: { msg: "O campo 'calular' deve ser preenchido" }
					}
				},
				telefone: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						is: {
							args: /\([0-9]{2,3}\) [0-9]{4}\-[0-9]{4}/,
							msg:
								"O campo 'telefone' deve seguir o padrão (XX) XXXX-XXXX caso seja preenchido"
						},
						len: {
							args: [14, 15],
							msg:
								"O campo 'telefone' deve conter de 14 a 15 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'telefone' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				whatsapp: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						is: {
							args: /\([0-9]{2,3}\) [0-9]{5}\-[0-9]{4}/,
							msg:
								"O campo 'whatsapp' deve seguir o padrão (XX) XXXXX-XXXX caso seja preenchido"
						},
						len: {
							args: [15, 16],
							msg:
								"O campo 'whatsapp' deve conter de 15 a 16 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'whatsapp' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				linkedin: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						is: {
							args: /linkedin\.com\/in\/.{0,}/,
							msg:
								"O campo 'linkedin' deve seguir o padrão linkedin.com/in/xxxxxxxxxx..."
						},
						len: {
							args: [0, 70],
							msg:
								"O campo 'linkedin' deve conter até 70 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'linkedin' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				facebook: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						is: {
							args: /facebook\.com\/.{0,}/,
							msg:
								"O campo 'facebook' deve seguir o padrão facebook.com/xxxxxxxxxx..."
						},
						len: {
							args: [0, 70],
							msg:
								"O campo 'facebook' deve conter até 70 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'facebook' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				site: {
					type: DataTypes.STRING,
					allowNull: true,
					validate: {
						len: {
							args: [0, 70],
							msg:
								"O campo 'site' deve conter até 70 caracteres, caso seja preenchido"
						},
						notEmpty: {
							msg:
								"O campo 'site' não pode receber uma string vazia, deve ser null/undefined nesse caso"
						}
					}
				},
				texto_anuncio: {
					type: DataTypes.TEXT,
					allowNull: true,
					validate: {
						len: {
							args: [0, 3000],
							msg: "O campo 'texto_anuncio' deve conter até 3000 caracteres"
						},
						notEmpty: {
							msg:
								"O campo 'texto_anuncio' não pode receber uma string vazia, deve ser null/undefined nesse caso"
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
