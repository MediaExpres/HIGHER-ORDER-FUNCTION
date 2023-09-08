// const script2 = require('./script2')
// import {largeNumber} from './script2.js'

import { largeNumber } from './script2.js'

if (1 === 1) {
    const { largeNumber } = await import ('./script2.js')
}

const b = 7

console.log(largeNumber, b)