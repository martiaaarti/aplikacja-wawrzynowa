import { Events, Ministries } from '/imports/db';

Ministries.addLinks({
    volunteerEventsLink: {
        type: 'many',
        collection: Events,
        field: 'volunteerEvents'
    }
});

