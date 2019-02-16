import { Events, Ministries } from '/imports/db';

Events.addLinks({
    eventSchema: {
        collection: Ministries,
        inversedBy: 'volunteerEventsLink'
    }
});