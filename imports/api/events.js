import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Events = new Mongo.Collection('events');

const dataModelEvents = new SimpleSchema({

    id: { type: SimpleSchema.Integer },
    name: { type: String },
    description: { type: String },
    meetingPalace: { type: String },
    startDateTime: { type: Date },
    duration: { type: SimpleSchema.Integer },
    attendeesLimit: {
        type: SimpleSchema.Integer,
        optional: true
    },
    attendees: {
        type: Array,
        optional: true
    },
    'attendees.$': {
        type: SimpleSchema.Integer
    }
});

Events.attachSchema(dataModelEvents);