'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const allUser = [
      {
        name: "Febrian",
        username: "febri",
        password: "asdasd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rian",
        username: "rian",
        password: "asdasd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jhon Doe",
        username: "doe",
        password: "asdasd",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    await queryInterface.bulkInsert('Users', allUser, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
