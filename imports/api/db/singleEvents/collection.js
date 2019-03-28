import { Mongo } from 'meteor/mongo';
import singleEventSchema from './schema';

const SingleEvents = new Mongo.Collection('singleEvents');

SingleEvents.attachSchema(singleEventSchema);

export default SingleEvents;