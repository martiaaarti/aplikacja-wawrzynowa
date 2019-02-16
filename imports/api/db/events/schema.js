import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({

    _id: { type: String },
    name: { type: String },
    description: { type: String },
    meetingPlace: { type: String },

    startDateTime: {
        type: String
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