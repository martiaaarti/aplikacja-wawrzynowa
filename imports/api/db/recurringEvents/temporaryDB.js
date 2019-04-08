import { RecurringEvents } from '../index';

if (Meteor.isServer) {
    const countRecurringEvents = RecurringEvents.find({}).count();

    if (countRecurringEvents == 0) {
        
        const mainEventsLink = RecurringEvents.getLink('recurring-events', 'mainEventsLink');
        mainEventsLink.add({
            name: 'Poranne sióremki',
            description: 'Zapraszamy na codzienna poranną Msze Świętą...',
            meetingPlace: 'DA Wawrzyny, ul.Odona Bujwida Wrocław',
            startDateTime: '2018-03-25',
            duration: 1,
            attendeesLimit: 150
        });
    }
}