import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'class_schedule',
    (table: Knex.TableBuilder) => {
      table.increments('id').primary();

      table.integer('week_day').notNullable();
      table.integer('from').notNullable();
      table.integer('to').notNullable();

      table
        .integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('class_schedule');
}
