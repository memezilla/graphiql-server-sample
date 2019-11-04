require("dotenv").config({ silent: true });

// process.env lookups are extremely expensive so we cache it here
const env = Object.assign({ NODE_ENV: "development" }, process.env);

module.exports = {
  env: env.NODE_ENV,
  isDev: env.NODE_ENV === "development" || env.NODE_ENV === "localtest",
  isTest: env.NODE_ENV.indexOf("test") > -1,
  database: {
    connection: env.DATABASE_URL
  },
  envConfig: {
    development: {
      debug: false, // set true to log all queries
      migrations: {
        directory: "./database/migrations",
        tableName: "migrations"
      },
      seeds: {
        directory: "./database/seeds/development"
      },
      connection: env.DATABASE_URL
    },

    localtest: {
      // debug: true,
      migrations: {
        directory: "./database/migrations",
        tableName: "migrations"
      },
      seeds: {
        directory: "./database/seeds/development"
      },
      connection: "mongodb://localhost:27017/onlinePagestest"
    },

    production: {
      migrations: {
        directory: "./database/migrations",
        tableName: "migrations"
      },
      seeds: {
        directory: "./database/seeds/production"
      },
      connection: env.DATABASE_URL
    }
  }
};
