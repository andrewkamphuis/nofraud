const model = (sequelize, DataTypes) => {
  const OrderSyncAttemptError = sequelize.define(
    'OrderSyncAttemptError',
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        lowercase: true,
        primaryKey: true
      },
      tenantId: {
        allowNull: false,
        type: DataTypes.STRING,
        trim: true
      },
      orderSyncAttemptId: {
        allowNull: false,
        type: DataTypes.UUID,
        lowercase: true
      },
      message: {
        allowNull: false,
        type: DataTypes.TEXT
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
    { tableName: 'NoFraudOrderSyncAttemptErrors' }
  );
  OrderSyncAttemptError.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.tenantId;
    delete values.orderComplianceId;
    delete values.createdAt;
    delete values.updatedAt;
    return values;
  };
  return OrderSyncAttemptError;
};

export default model;
