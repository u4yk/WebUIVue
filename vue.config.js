
module.exports = {
    devServer: {
      host: "localhost",
      clientLogLevel: "info"
    },
    configureWebpack: {
      watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
      }
    }
  }