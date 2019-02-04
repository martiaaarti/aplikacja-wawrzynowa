import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';
import insertTestEvents from './temporaryDB';

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);
insertTestEvents(Events);

export default Events;
