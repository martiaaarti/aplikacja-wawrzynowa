import { Mongo } from 'meteor/mongo';
import recurringEventSchema from './schema';

const RecurringEvents = new Mongo.Collection('recurringEvents');

RecurringEvents.attachSchema(recurringEventSchema);

export default RecurringEvents;