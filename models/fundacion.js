const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fundacion', {
    idfundacion: {
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
    tableName: 'fundacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfundacion" },
        ]
      },
      {
        name: "fundacion",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
    ]
  });
};
