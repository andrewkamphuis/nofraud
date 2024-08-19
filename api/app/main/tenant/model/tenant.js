const model = (sequelize, DataTypes) => {
  const Tenant = sequelize.define(
    'Tenant',
    {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        lowercase: true,
        primaryKey: true
      },
      noFraudUsername: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true
      },
      noFraudPassword: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true
      },
      stateCodes: {
        allowNull: false,
        type: DataTypes.JSON
      },
      installDate: {
        allowNull: false,
        type: DataTypes.DATE(6)
      },
      isInstalled: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      lastSyncDate: {
        allowNull: false,
        type: DataTypes.DATE(6)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE(6)
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE(6)
      }
    },
    { tableName: 'NoFraudTenants' }
  );
  Tenant.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.noFraudPassword;
    return values;
  };
  return Tenant;
};

export default model;
