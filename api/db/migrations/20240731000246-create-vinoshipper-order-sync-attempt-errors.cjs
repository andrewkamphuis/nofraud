/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('NoFraudOrderSyncAttemptErrors', {
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
      orderSyncAttemptId: {
        allowNull: false,
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'NoFraudOrderSyncAttempts',
          key: 'id',
          as: 'orderSyncAttemptId'
        }
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING
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
    });
    await queryInterface.addIndex('NoFraudOrderSyncAttemptErrors', [
      'tenantId'
    ]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable('NoFraudOrderSyncAttemptErrors');
  }
};
