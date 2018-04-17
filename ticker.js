const Roee = require('./readonly_emitter');

const ticker = new Roee(emit => {
    let tickCount = 0;
    setInterval(() => emit('tick', tickCount++), 1000);
});

ticker.on('tick', tickCount => console.log(tickCount, 'TICK'));

//ticker.emit -> undefined
