module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('NoFraudTenants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
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
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('NoFraudTenants');
  }
};
