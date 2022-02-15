const Emitter = require('./Emitter');
const em = new Emitter();

em.on('greet', () => {
    console.log('Hello first');
});

em.on('greet', () => {
    console.log('Hello second');
});

em.emit('greet');
