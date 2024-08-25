module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('NoFraudOrderSyncs', {
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
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('NoFraudOrderSyncs');
  }
};
