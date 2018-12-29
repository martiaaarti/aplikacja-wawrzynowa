import { Mongo } from 'meteor/mongo';
import dataModelEvents from './schema';

const Events = new Mongo.Collection('events');

Events.attachSchema(dataModelEvents);

export default Events;



