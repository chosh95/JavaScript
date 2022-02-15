const Emitter = require('events');
const eventConfig = require('./168config').events;
const em = new Emitter();

em.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said hello,');
});

em.on(eventConfig.GREET, () => {
    console.log('A greeting occurred!');
});

em.emit(eventConfig.GREET);
