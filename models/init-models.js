var DataTypes = require("sequelize").DataTypes;
var _adoptante = require("./adoptante");
var _fundacion = require("./fundacion");
var _mascota = require("./mascota");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var adoptante = _adoptante(sequelize, DataTypes);
  var fundacion = _fundacion(sequelize, DataTypes);
  var mascota = _mascota(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  mascota.belongsTo(adoptante, { as: "duenio_adoptante", foreignKey: "duenio"});
  adoptante.hasMany(mascota, { as: "mascota", foreignKey: "duenio"});
  mascota.belongsTo(fundacion, { as: "fundacion_fundacion", foreignKey: "fundacion"});
  fundacion.hasMany(mascota, { as: "mascota", foreignKey: "fundacion"});
  adoptante.belongsTo(usuario, { as: "tipo_usuario", foreignKey: "tipo"});
  usuario.hasMany(adoptante, { as: "adoptantes", foreignKey: "tipo"});
  fundacion.belongsTo(usuario, { as: "tipo_usuario", foreignKey: "tipo"});
  usuario.hasMany(fundacion, { as: "fundacions", foreignKey: "tipo"});

  return {
    adoptante,
    fundacion,
    mascota,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
