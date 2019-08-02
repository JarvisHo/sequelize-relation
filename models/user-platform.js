'use strict'

module.exports = (sequelize, DataTypes) => {
	const UserPlatform = sequelize.define('userPlatform', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		objectId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique: true
		},
		type: {
			type: DataTypes.TINYINT,
			allowNull: true,
			defaultValue: 0
		},
		platformUserId: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.BIGINT,
			defaultValue: Math.floor(Date.now() / 1000),
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.BIGINT,
			defaultValue: Math.floor(Date.now() / 1000),
			allowNull: true
		}
	}, {
		freezeTableName: true
	})

	UserPlatform.associate = function (models) {
		UserPlatform.belongsTo(models.user)
	}
	return UserPlatform
}
