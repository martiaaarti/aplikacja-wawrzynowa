import { Events, Ministries } from '../index';

Ministries.addLinks({
    volunteerEventsLink: {
        type: 'many',
        collection: Events,
        field: 'volunteerEvents'
    }
});

