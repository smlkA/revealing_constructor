const EventEmitter = require('events');

// backup of emit method in internal function
// remove public emit method by assigning undeefined to it

module.exports = class extends EventEmitter {
    constructor(executor) {
        super();
        const emit = this.emit.bind(this);
        this.emit = undefined;
        executor(emit);
    }
};
