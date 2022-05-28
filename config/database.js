module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: 'db-mysql-ams3-59047-do-user-11679947-0.b.db.ondigitalocean.com',
        port: 25060,
        database: defaultdb,
        username: 'doadmin',
        password: 'AVNS_AWP6ufoQMQvCAGX',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
