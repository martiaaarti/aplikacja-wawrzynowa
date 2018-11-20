import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import dataModelEvents from './events.js';

export const Ministry = new Mongo.Collection('ministry');

const dataModelMinistry = new SimpleSchema({
    id: SimpleSchema.Integer,
    admina: SimpleSchema.Integer,
    name: String,
    description: String,
    volunteerEvents: [dataModelEvents],
    color: String
});

Ministry.attachSchema(dataModelMinistry);