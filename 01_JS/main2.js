'use strict';
try {
    console.log('first line')
    throw new Error('Some error name');
    let importantmessage = 'This is a very important message!';
    importantmessageee = 'Oh, ignore that message!';
    console.log(importantmessage);
}
catch (obj) {
    console.log('That is Okay.');
}
