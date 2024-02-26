module.exports = (sequelize, DataTypes) => {
  const Places = sequelize.define(
    "Places",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement,
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      direccion: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      referencia: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      tipo: {
        type: DataTypes.STRING(500),
        allowNull: 0,
      },
      estado: {
        type: DataTypes.TINYINT(4),
        defaultValue: 1,
      },
    },
    {
      tableName: "places",
      timeStamp: false,
    }
  );

  Places.associate = (models) => {
    Places.hasMany(models.Visits, {
      foreingKey: "id_places",
      as: "placeVisits",
    });
  };

  return Places;
};
