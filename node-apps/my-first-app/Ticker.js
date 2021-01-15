import EventEmitter from 'events';

class Ticker extends EventEmitter {

    constructor() {
        super();
        setInterval(() => {
            this.emit('data', Math.random());
        }, 1000);
    }

}

export default Ticker;