'use strict'

module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    'shop',
    {
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
      pageId: {
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: true
      },
      slug: {
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: true
      },
      cover: {
        type: DataTypes.STRING(255),
        defaultValue: '',
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(255),
        defaultValue: 'My Shop',
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
      },
      createdAt: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: Math.floor(Date.now() / 1000)
      },
      updatedAt: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: Math.floor(Date.now() / 1000)
      },
      deletedAt: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: null
      }
    },
    {
      freezeTableName: true,
      indexes: [
        {
          unique: true,
          fields: ['objectId']
        },
        {
          unique: true,
          fields: ['slug']
        }
      ]
    }
  )
  Shop.associate = models => {
    Shop.belongsToMany(models.user, { through: models.userShop })
  }
  return Shop
}
