const Sequelize = require("sequelize");
const {
  nameDb,
  portDb,
  userDb,
  passwordDb,
  hostDb,
} = require("../config/index");
const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const db = {};
const sequielize = new Sequelize(nameDb, userDb, passwordDb, {
  dialect: "mysql",
  port: portDb,
  host: hostDb,
});

const listFile = fs.readdirSync(__dirname).filter((file) => {
  // return de todos los archivos js que no sean el index
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );
});

listFile.forEach((file) => {
  const model = require(path.join(__dirname, file))(
    sequielize,
    Sequelize.DataTypes
  );
  db[model.name] = model;
});

Object.keys(db).forEach((model) => {
  if (db[model].associate) {
    db[model].associate(db);
  }
});

db.sequielize = sequielize;
db.Sequielize = Sequelize;

sequielize.sync();

module.exports = db;
