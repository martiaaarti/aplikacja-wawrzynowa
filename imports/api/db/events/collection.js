import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';
import insertTestEvents from './temporaryDB.js';

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);

Events.allow({
    insert: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

insertTestEvents(Events);

console.log(Events.find({}).count());

export default Events;
