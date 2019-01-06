import { Mongo } from 'meteor/mongo';
import eventSchema from './schema';

const Events = new Mongo.Collection('events');

Events.attachSchema(eventSchema);

export default Events;



