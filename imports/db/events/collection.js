import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';
import testingEventsDB from './temporaryDB.js'

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);
testingEventsDB(Events);

export default Events;



