// import EventEmitter, { EventEmitter } from 'events';
// const EventEmitter = require('events');

import EventEmitter from 'events';
// db connection 
const DB = new EventEmitter();

setTimeout(() => {
    DB.emit('conencted', ['users', 'books'], [4, 5]);
    setTimeout(() => {
        DB.emit('conencted2');
    }, 2000);
}, 2000);

export default DB;
