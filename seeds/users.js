const {generate} = require('../server/auth/hash')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([

        {user_name: 'Isabella', hash: "adsew3rcxvcxv23rdsds"},
        {user_name: 'Noah', hash: "adsew3rcxvcxv23rdsds"},
  
      ]);
    });
};
