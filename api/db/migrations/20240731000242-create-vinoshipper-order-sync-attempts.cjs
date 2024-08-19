module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('NoFraudOrderSyncAttempts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      tenantId: {
        allowNull: false,
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'NoFraudTenants',
          key: 'id',
          as: 'tenantId'
        }
      },
      orderSyncId: {
        allowNull: false,
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'NoFraudOrderSyncs',
          key: 'id',
          as: 'orderSyncId'
        }
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
    });
    await queryInterface.addIndex('NoFraudOrderSyncAttempts', ['tenantId']);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('NoFraudOrderSyncAttempts');
  }
};
