"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "products",
      [
        {
          uuid: "35cf1b89-56d3-433c-9f43-4198eb3725de",
          title: "coca-cola",
          photo: "cola.png",
          cost: 5,
          producer: "coca-cola enc",
          createdAt: "2020-11-01T16:30:07.592Z",
          updatedAt: "2020-11-01T16:30:07.592Z",
        },
        {
          uuid: "35cf1b89-56d3-433c-9f43-4198eb8135de",
          title: "burger",
          photo: "burger.png",
          cost: 10,
          producer: "burger enc",
          createdAt: "2020-11-01T16:30:07.592Z",
          updatedAt: "2020-11-01T16:30:07.592Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
