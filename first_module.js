//CommonJS-every file is module(by default)
//Modules-Encapsulated Code(only share minimum)

const names=require('./second_module')
const sayHi=require('./utils')
const data=require('./third_module')
require('./fourth_module')

// console.log(data);
// console.log(names);


// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);