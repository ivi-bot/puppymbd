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
     await queryInterface.bulkInsert('Mascota', [{  
      apodo:'Croqueta',
      foto: 'cristian-castillo-73pyV0JJOmE-unsplash.jpg',  
      genero:'Macho',
      raza: 'Labrador',
      peso: 8,
      fundacion: 4,
      duenio:0,
      createdAt: new Date(),  
      updatedAt: new Date()  
  }], {});  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Productos', null, {});  

  }
};
