'use strict'

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
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
		avatar: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		firstName: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		verification: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(500),
			allowNull: false,
			defaultValue: ''
		},
		phoneCountry: {
			type: DataTypes.STRING(10),
			allowNull: true,
			defaultValue: '886'
		},
		phone: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 1
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
		},
		deletedAt: {
			type: DataTypes.BIGINT,
			defaultValue: null,
			allowNull: true
		}
	}, {
		freezeTableName: true
	})
	User.associate = function (models) {
		User.belongsToMany(models.shop, { through: models.userShop })
		User.hasMany(models.userPlatform)
	}
	return User
}
