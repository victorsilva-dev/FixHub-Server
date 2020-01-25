'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("profissionais", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cpf_cnpj: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			foto: {
				type: Sequelize.JSON,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("profissionais")
  }
};
