"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Profissionais_tags", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: { model: "Profissionais", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			id_tag: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: { model: "Tags", key: "id" }
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
		return queryInterface.dropTable("Profissionais_tags");
	}
};
