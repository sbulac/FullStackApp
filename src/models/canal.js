module.exports = (sequelize, DataTypes) => {
  const Canal = sequelize.define(
    "Canal",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement,
      },
      nombreDelCanal: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      descripcion: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      vp_categoria: {
        type: DataTypes.BIGINT(20),
        allowNull: 0,
      },
      estado: {
        type: DataTypes.BIGINT(4),
        allowNull: 0,
      },
    },
    { tableName: "canal" }
  );

  Canal.associate = (models) => {
    Canal.belongsToMany(models.User, { trhough: "Subscripcion" });
  };

  return Canal;
};
