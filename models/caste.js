'use strict'

module.exports = (sequelize, DataTypes) => {
const Caste = sequelize.define('castes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  caste: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subCaste: {
    type: DataTypes.STRING,
    allowNull: true
  },
  localCaste: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localSubCaste: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hide: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
})
return Caste
}

