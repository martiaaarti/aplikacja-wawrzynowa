import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';
import insertTestEvents from './temporaryDB';

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

Events.remove({});
insertTestEvents(Events);

export default Events;
