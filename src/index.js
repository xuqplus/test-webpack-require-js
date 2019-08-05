import { func as test0Func } from './test0.js'

test0Func()

let test1 = require('./test1.js')
let test2 = require('./test2.js')

test1.func()
test2.func()

console.log('hello, index.js')
