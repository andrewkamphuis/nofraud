module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.removeColumn('NoFraudTenants', 'nofraudUsername');
    await queryInterface.removeColumn('NoFraudTenants', 'nofraudPassword');
    await queryInterface.addColumn('NoFraudTenants', 'noFraudAPIToken', {
      allowNull: true,
      type: DataTypes.STRING
    });
  },

  async down() {}
};
