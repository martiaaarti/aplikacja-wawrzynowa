import { Ministries, SingleEvents, Events } from '../index';

SingleEvents.addLinks({
    singleEventSchema: {
        collection: Ministries,
        inversedBy: 'singleEventsLink'
    }
});

SingleEvents.addLinks({
    mainEventLink: {
        type: 'one',
        collection: Events,
        field: 'mainEvent'
    }
});

