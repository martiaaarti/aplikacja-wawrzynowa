import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);

Events.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});


if (Meteor.isServer) {
    Meteor.publish('events', function eventsPublication() {
        return Events.find();
    });
};

export default Events;
