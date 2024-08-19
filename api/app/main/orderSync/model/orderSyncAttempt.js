const model = (sequelize, DataTypes) => {
  const OrderSyncAttempt = sequelize.define(
    'OrderSyncAttempt',
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
      orderSyncId: {
        allowNull: false,
        type: DataTypes.UUID
      },
      attemptDate: {
        allowNull: false,
        type: DataTypes.DATE(6)
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(
          'Not Required To Send',
          'Failed To Send',
          'Sent To NoFraud',
          'Voided In NoFraud'
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
    { tableName: 'NoFraudOrderSyncAttempts' }
  );
  OrderSyncAttempt.associate = (models) => {
    OrderSyncAttempt.belongsTo(models.Tenant, {
      foreignKey: 'tenantId'
    });
    OrderSyncAttempt.hasMany(models.OrderSyncAttemptError, {
      as: 'errors',
      foreignKey: 'orderSyncAttemptId'
    });
  };
  OrderSyncAttempt.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.tenantId;
    if (this.errors) {
      values.errors = this.errors.map((error) => error.toJSON());
    }
    return values;
  };
  return OrderSyncAttempt;
};

export default model;
