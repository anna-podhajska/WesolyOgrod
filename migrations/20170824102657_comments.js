exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {

  })
};

exports.down = function(knex, Promise) {
};
