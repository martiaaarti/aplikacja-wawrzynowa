import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({

    name: { type: String },
    description: { type: String },
    meetingPlace: { type: String },

    startDateTime: {
        type: Date
    },

    duration: {
        type: SimpleSchema.Integer,
        optional: true
    },

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