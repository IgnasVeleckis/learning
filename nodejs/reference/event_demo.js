const EventEmitter = require('events')

// Create class
class MyEmitter extends EventEmitter {}

// Intit object
const myEmitter = new EventEmitter();

// event listener

myEmitter.on('event', () => console.log('event fired!'))

// init event
myEmitter.emit('event')