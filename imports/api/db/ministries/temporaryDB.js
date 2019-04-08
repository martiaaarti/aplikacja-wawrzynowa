import { Ministries } from '../index';

if (Meteor.isServer) {
    const countMinistries = Ministries.find({}).count();

    if (countMinistries == 0) {
        Ministries.insert({
            _id: 'ministerstwo_nauki',
            ownerId: 12,
            admins: [],
            name: 'Ministerstwo Nauki',
            description: 'To jest opis',
            color: 'blue',
            volunteerEvents: [],
            recurringEvents: [],
            singleEvents: []
        });

        const volunteerEventsLink = Ministries.getLink('ministerstwo_nauki', 'volunteerEventsLink');
        volunteerEventsLink.add({
            name: 'Pierwsze wydarzenie ministerstwa',
            description: 'Wawrzyny i Wawrzynki! Zapraszamy Was serdecznie na Wawrzynowe Zaduszki.',
            meetingPlace: 'DA Antoni, w schronie po lewej stronie za kościołem',
            startDateTime: '2018-02-15',
            duration: 3,
            attendeesLimit: 1
        });

        const recurringEventsLink = Ministries.getLink('ministerstwo_nauki', 'recurringEventsLink');
        recurringEventsLink.add({
            _id: 'recurring-events',
            ownerId: 40,
            admins: [],
            mainEvents: [],
            volunteersLimit: 150,
            volunteers: []
        });

        const singleEventsLink = Ministries.getLink('ministerstwo_nauki', 'singleEventsLink');
        singleEventsLink.add({
            _id: 'single-events',
            ownerId: 20,
            admins: [],
            mainEvent: [],
            volunteersLimit: 150,
            volunteers: []
        });
    };
}