import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    _id: { type: String },
    ownerId: { type: SimpleSchema.Integer },

    admins: { type: Array },
    'admins.$': {
        type: SimpleSchema.Integer
    },

    mainEvents: {
        type: Array,
    },
    'mainEvents.$': {
        type: String
    },

    mainEventsDatePattern: {
        type: String,
        optional: true
    },
    volunteersLimit: {
        type: SimpleSchema.Integer
    },

    volunteers: {
        type: Array
    },
    'volunteers.$': {
        type: String
    }
});