export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = models => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId'
    });
    User.belongsToMany(models.Channel, {
      through: 'channelMember',
      foreignKey: 'userId'
    });
  };

  return User;
};