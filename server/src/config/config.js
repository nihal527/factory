/*eslint-disable */
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "factory",
    user: process.env.DB_USER || "factory",
    password: process.env.DB_PASS || "factory",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./factory.sqlite"
    }
  }
};
