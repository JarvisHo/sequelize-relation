'use strict'
module.exports = (sequelize, DataTypes) => {
	const UserShop = sequelize.define('userShop', {
		role: {
			allowNull: false,
			type: DataTypes.STRING(255),
			defaultValue: 'customer'
		},
		createdAt: {
			type: DataTypes.BIGINT,
			defaultValue: Math.floor(Date.now() / 1000),
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.BIGINT,
			defaultValue: Math.floor(Date.now() / 1000),
			allowNull: false
		}
	}, {
		freezeTableName: true
	})
	UserShop.associate = function (models) {
	}
	return UserShop
}
