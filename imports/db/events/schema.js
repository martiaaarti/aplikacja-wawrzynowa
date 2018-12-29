import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({

    id: { type: SimpleSchema.Integer },
    name: { type: String },
    description: { type: String },
    meetingPalace: { type: String },

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
        type: SimpleSchema.Integer,
        optional: true
    }
});