import { Events, Ministries, SingleEvents, RecurringEvents } from '../index';

Ministries.addLinks({
    volunteerEventsLink: {
        type: 'many',
        collection: Events,
        field: 'volunteerEvents'
    }
});

Ministries.addLinks({
   singleEventsLink: {
       type: 'many',
       collection: SingleEvents,
       field: 'singleEvents'
   } 
});

Ministries.addLinks({
    recurringEventsLink: {
        type: 'many',
        collection: RecurringEvents,
        field: 'recurringEvents'
    }
});