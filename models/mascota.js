const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mascota', {
    idmascota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    apodo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    genero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    raza: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fundacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'fundacion',
        key: 'idfundacion'
      }
    },
    duenio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adoptante',
        key: 'idAdoptante'
      }
    },
    createdAt:{
      allowNull: false,
      type: DataTypes.DATE,

    },
    updatedAt:{
      allowNull: false,
      type: DataTypes.DATE,

    }
  }, {
    sequelize,
    tableName: 'mascota',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmascota" },
        ]
      },
      {
        name: "fundacionkn",
        using: "BTREE",
        fields: [
          { name: "fundacion" },
        ]
      },
      {
        name: "dueniokn",
        using: "BTREE",
        fields: [
          { name: "duenio" },
        ]
      },
    ]
  });
};
