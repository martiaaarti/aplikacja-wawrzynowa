import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    _id: { type: String },
    ownerId: { type: SimpleSchema.Integer },

    admins: {type: Array },
    'admins.$': {
        type: SimpleSchema.Integer
    },

    mainEvent: {
        type: Array,
    },
    'mainEvent.$': {
        type: String
    },

    volunteerEvents: {
        type: Array,
        optional: true
    },
    'volunteerEvents.$': {
        type: String
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