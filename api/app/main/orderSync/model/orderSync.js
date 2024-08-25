const model = (sequelize, DataTypes) => {
  const OrderSync = sequelize.define(
    'OrderSync',
    {
      id: {
        allowNull: false, // this is the C7 Order ID
        type: DataTypes.UUID,
        lowercase: true,
        primaryKey: true
      },
      tenantId: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true
      },
      lastSyncAttemptDate: {
        allowNull: false,
        type: DataTypes.DATE(6)
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(
          'Pass',
          'Needs Review',
          'Fail',
          'Cancelled',
          'Not Required'
        )
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
    { tableName: 'NoFraudOrderSyncs' }
  );
  OrderSync.associate = (models) => {
    OrderSync.belongsTo(models.Tenant, {
      foreignKey: 'tenantId'
    });
    OrderSync.hasMany(models.OrderSyncAttempt, {
      as: 'attempts',
      foreignKey: 'orderSyncId'
    });
  };
  OrderSync.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.tenantId;
    if (this.errors) {
      values.errors = this.errors.map((error) => error.toJSON());
    }
    return values;
  };
  return OrderSync;
};

export default model;
