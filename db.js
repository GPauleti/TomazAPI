import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: 'postgres://lhmsyqty:U2lUo8xIxXSGF5y1mq71c8VDmbzjxj-Y@isabelle.db.elephantsql.com/lhmsyqty'
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

export { client as db };
