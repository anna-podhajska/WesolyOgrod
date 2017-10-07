exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('restaurants', (table) => {

  })
};

exports.down = function(knex, Promise) {
};
