import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Events } from './events';

export const Ministry = new Mongo.Collection('ministry');

const dataModelMinistry = new SimpleSchema({

    id: { type: SimpleSchema.Integer },
    ownerId: { type: SimpleSchema.Integer },
    admins: { type: Array },
    'admins.$': {
        type: SimpleSchema.Integer
    },
    name: { type: String },
    description: String,
    color: { type: String },

    volunteerEvents: {
        type: Array,
        // collection: Events
    },
    'volunteerEvents.$': {
        type: SimpleSchema.Integer
    },

    recurringEvents: {
        type: Array,
        optional: true
    },
    'recurringEvents.$': {
        type: SimpleSchema.Integer
    },

    singleEvents: {
        type: Array,
        optional: true
    },
    'singleEvents.$': {
        type: SimpleSchema.Integer
    }

});

Ministry.attachSchema(dataModelMinistry);