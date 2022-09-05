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
      await queryInterface.bulkInsert('Usuario', [{  
      nickname:'Fundación croquetas' ,
      nombre: 'Fundación' ,  
      apellido:'Croquetas',
      email: 'fundacioncroquetas@gmail.com',
      contrasenia: 'croquetaspsswdcontrasena',
      direccion:'Esmeraldas',
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
