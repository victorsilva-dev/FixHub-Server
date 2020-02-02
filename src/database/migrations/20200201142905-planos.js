"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Planos", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			descricao: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			inicio: {
				type: Sequelize.DATE,
				allowNull: false
			},
			fim: {
				type: Sequelize.DATE,
				allowNull: false
			},
			id_profissional: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Profissionais", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
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
		return queryInterface.dropTable("Planos");
	}
};
