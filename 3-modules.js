// Modules

const names = require('./4-names')
const sayHi =require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(names);
console.log(data)


sayHi('susan')
sayHi(names.peter)
sayHi(names.john)