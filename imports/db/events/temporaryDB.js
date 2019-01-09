import { Meteor } from 'meteor/meteor';
import { Events } from './collection';

Meteor.startup(() => {
    countEvents = Events.find().count();

    if (countEvents === 0) {
        ({
            id: 000,
            name: 'Wawrzynowe Zaduszki',
            description: 'Wawrzyny i Wawrzynki! Zapraszamy Was serdecznie na Wawrzynowe Zaduszki.',
            meetingPlace: 'DA Antoni, w schronie po lewej stronie za kościołem',
            startDateTime: '2018-02-15T06:00:00+02:00',
            duration: 3,
            attendeesLimit: 150       
        });
        ({
            id: 001,
            name: 'Spotkanie Redakcji "Wawrzyna"',
            description: 'Nowy rok, starzy my i... nowy numer na horyzoncie! Czas więc, żeby o nim porozmawiać, a przede wszystkim: trochę się zintegrować. Nieważne, czy jesteś stałym bywalcem czy może dopiero zastanawiasz się, czy redakcja to miejsce dla Ciebie – wpadnij! :)',
            meetingPlace: 'DA Wawrzyny, ul. Odona Bujwida 51, Wrocław',
            startDateTime: '2019-01-15T06:00:00+02:00',
            duration: 2
        });
        ({
            id: 002,
            name: 'Bal Na 200 Par 2019',
            description: 'Jak co roku, od niepamiętnych już czasów, mamy zaszczyt zaprosić Was na doroczny Bal Duszpasterstw Akademickich...',
            meetingPlace: 'Sala NOT we Wrocławiu, przy ul. Piłsudskiego 74.',
            startDateTime: '2019-02-16T06:00:00+04:00',
            attendeesLimit: 200
        });
        ({
            id: 003,
            name: 'Wykład Patriotyczny - Powstanie Wielkopolskie',
            description: 'Zapraszamy na ostatnie spotkanie w tym roku kalendarzowym. Tematem wykładu będzie Powstanie Wielkopolskie. Do zobaczenia!',
            meetingPlace: 'DA Wawrzyny, ul. Odona Bujwida 51, Wrocław',
            startDateTime: '2018-12-18T06:00:00+02:00',
            duration: 2
        });

    }
}); 
    
