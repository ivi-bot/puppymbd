const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adoptante', {
    idAdoptante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_cita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'adoptante',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdoptante" },
        ]
      },
      {
        name: "tipo",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
    ]
  });
};
