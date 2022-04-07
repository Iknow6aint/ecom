const Repository = require('./repository');
// const Repositories = require ('./repository')

class CartRepository extends Repository {}

module.exports = new CartRepository('carts.json');