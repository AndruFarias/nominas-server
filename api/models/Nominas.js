/**
 * Nominas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  carpeta: {
		  type: 'string'
	  },
	  xml: {
		  type: 'string'
	  },
	  pdf: {
		  type: 'integer'
	  },
	  fecha: {
		  type: 'string'
	  },

	  //Pertenece a un empleado
      codigo: {
        model: 'empleados',
        type: 'integer'
      },
  }
};
