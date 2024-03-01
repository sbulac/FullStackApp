module.exports = (sequielize, DataTypes) => {
  const User = sequielize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      perfil: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
      },
      estado: {
        type: DataTypes.TINYINT(4),
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "user",
      timeStamp: false,
    }
  );

  User.associate = (models) => {
    User.belongsToMany(models.Canal, { trhough: "Subscripcion" });
  };

  return User;
};
