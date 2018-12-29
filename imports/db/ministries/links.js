import { Events, Ministries } from '/imports/db';

Ministries.addLinks({
    volunteerEventsLink: {
        type: 'many',
        collection: Events,
        field: 'volunteerEvents'
    }
});

Events.addLinks({
    dataModelEvents: {
        collection: Ministries,
        inversedBy: 'volunteerEventsLink'
    }
});