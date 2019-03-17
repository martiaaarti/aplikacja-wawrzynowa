import { Events, Ministries } from '../index';

Events.addLinks({
    eventSchema: {
        collection: Ministries,
        inversedBy: 'volunteerEventsLink'
    }
});