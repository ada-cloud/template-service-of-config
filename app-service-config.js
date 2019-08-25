module.exports = {
  name: "app-service-template-config",
  source: "./src",
  output: "./dist",
  main: './index.js',
  server: "http://localhost:6107",
  cloudHub: "http://localhost:6080?username=test&password=123456",
  generate: {
    host: "192.168.3.46",
    user: "root",
    port: "3306",
    password: "password",
    database: "ada-uc",
    charset: "utf8",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    consumer:['pink'],
    output: require("path").resolve(__dirname, "./src")
  }
};