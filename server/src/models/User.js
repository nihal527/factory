/*eslint-disable */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    userSurname: DataTypes.STRING
  });

  return User;
};
