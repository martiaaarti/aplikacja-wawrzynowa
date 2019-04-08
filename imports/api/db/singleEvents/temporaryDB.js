import { SingleEvents } from '../index';

if (Meteor.isServer) {
    const countSingleEvents = SingleEvents.find({}).count();

    if (countSingleEvents == 0) {
        const mainEventLink = SingleEvents.getLink('single-events', 'mainEventLink');
        mainEventLink.set({
            name: 'Rekolekcje Wielkopostne 2019',
            description: 'Zapraszamy Was serdecznie na Rekolekcje, które poprowadzi...',
            meetingPlace: 'DA Wawrzyny, ul.Odona Bujwida Wrocław',
            startDateTime: '2019-03-25',
            duration: 4,
            attendeesLimit: 150
        });
    }
}