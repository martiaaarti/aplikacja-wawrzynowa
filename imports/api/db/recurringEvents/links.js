import { RecurringEvents, Ministries, Events } from '../index';

RecurringEvents.addLinks({
    recurringEventSchema: {
        collection: Ministries,
        inversedBy: 'recurringEventsLink'
    }
});

RecurringEvents.addLinks({
    mainEventsLink: {
        type: 'many',
        collection: Events,
        field: 'mainEvents'
    }
});