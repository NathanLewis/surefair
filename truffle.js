// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '10.0.110.185',
      port: 8545,
      network_id: '20170125',
      gas: 4712388
    }
  }
}
