// common APIs in Node development 
// - Event , EventEmitter,  
// const EventEmitter = require('events');

// const DB = require('./db').default;
import DB from './db.js';
import Ticker from './Ticker.js';
console.log('start');
DB.on('conencted', (users, books) => {
    console.log('we are connected to db.')
    for (let i = 0; i < users.length; i++) {
        console.log(`data ${users[i]} ${books[i]}`);
    }
});
DB.on('conencted2', () => {
    console.log('we are connected to db. 2')
});
const ticker = new Ticker();
ticker.on('data', (data) => {
    console.log(data);
});
console.log('end');