module.exports = (sequielize, DataTypes) => {
  const Visits = sequielize.define(
    "Visits",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: DataTypes.TINYINTS(4),
        allowNull: false,
        defaultValue: 1,
      },
      id_parametros: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
      },
    },
    {
      tableName: "valoresVisits",
      timestamps: true,
    }
  );

  Visits.associate = (models) => {
    Visits.belongsTo(models.Places, {
      foreingKey: "id_visits",
      as: "places",
      onDelete: "CASCADE",
    });

    Visits.belongsTo(models.Users, {
      foreingKey: "id_visits",
      as: "users",
      onDelete: "CASCADE",
    });
  };

  return Visits;
};
