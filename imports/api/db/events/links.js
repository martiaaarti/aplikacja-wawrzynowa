import { Events, Ministries, SingleEvents, RecurringEvents } from '../index';

Events.addLinks({
    eventSchema: {
        collection: Ministries,
        inversedBy: 'volunteerEventsLink'
    }
});

Events.addLinks({
    singleEventSchema: {
        collection: SingleEvents,
        inversedBy: 'mainEventLink'
    }
});

Events.addLinks({
    recurringEventSchema: {
        collection: RecurringEvents,
        inversedBy: 'mainEventsLink'
    }
});