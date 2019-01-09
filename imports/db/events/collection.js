import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';
import temporaryDB from './temporaryDB.js'

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);
Events.insert(temporaryDB);

export default Events;



