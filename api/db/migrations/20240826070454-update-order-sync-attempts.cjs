module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.addColumn(
      'NoFraudOrderSyncAttempts',
      'transactionId',
      {
        allowNull: true,
        type: DataTypes.STRING
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(
      'NoFraudOrderSyncAttempts',
      'transactionId'
    );
  }
};
