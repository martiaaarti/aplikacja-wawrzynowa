import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({

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
        type: Array
    },
    'volunteerEvents.$': {
        type: Object
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