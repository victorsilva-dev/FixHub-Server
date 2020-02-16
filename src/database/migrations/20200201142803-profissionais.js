"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Profissionais", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cpf_cnpj: {
				type: Sequelize.STRING,
				allowNull: false
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false
			},
			estado: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cidade: {
				type: Sequelize.STRING,
				allowNull: false
			},
			bairro: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cep: {
				type: Sequelize.STRING
			},
			endereco: {
				type: Sequelize.STRING
			},
			numero: {
				type: Sequelize.STRING
			},
			celular: {
				type: Sequelize.STRING,
				allowNull: false
			},
			telefone: {
				type: Sequelize.STRING
			},
			whatsapp: {
				type: Sequelize.STRING
			},
			linkedin: {
				type: Sequelize.STRING
			},
			facebook: {
				type: Sequelize.STRING
			},
			site: {
				type: Sequelize.STRING
			},
			texto_anuncio: {
				type: Sequelize.TEXT
			},
			tags: {
				type: Sequelize.TEXT
			},
			foto: {
				type: Sequelize.TEXT
			},
			imagens: {
				type: Sequelize.TEXT
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Profissionais");
	}
};
