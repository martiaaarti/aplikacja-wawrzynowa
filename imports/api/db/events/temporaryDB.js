export default insertTestEvents = (Events) => {
    const countEvents = Events.find({}).count();
    console.log('AAA', countEvents);

    if (countEvents == 0) {
        console.log('BBB', countEvents);
        Events.insert({
            _id: 1,
            name: 'Wawrzynowe Zaduszki',
            description: 'Wawrzyny i Wawrzynki! Zapraszamy Was serdecznie na Wawrzynowe Zaduszki.',
            meetingPlace: 'DA Antoni, w schronie po lewej stronie za kościołem',
            startDateTime: '2018-02-15T06:00:00+02:00',
            duration: 3,
            attendeesLimit: 150       
        });
        Events.insert({
            _id: 2,
            name: 'Spotkanie Redakcji "Wawrzyna"',
            description: 'Nowy rok, starzy my i... nowy numer na horyzoncie! Czas więc, żeby o nim porozmawiać, a przede wszystkim: trochę się zintegrować. Nieważne, czy jesteś stałym bywalcem czy może dopiero zastanawiasz się, czy redakcja to miejsce dla Ciebie – wpadnij! :)',
            meetingPlace: 'DA Wawrzyny, ul. Odona Bujwida 51, Wrocław',
            startDateTime: '2019-01-15T06:00:00+02:00',
            duration: 2
        });
        Events.insert({
            _id: 3,
            name: 'Bal Na 200 Par 2019',
            description: 'Jak co roku, od niepamiętnych już czasów, mamy zaszczyt zaprosić Was na doroczny Bal Duszpasterstw Akademickich...',
            meetingPlace: 'Sala NOT we Wrocławiu, przy ul. Piłsudskiego 74.',
            startDateTime: '2019-02-16T06:00:00+04:00',
            attendeesLimit: 200
        });
        Events.insert({
            _id: 4,
            name: 'Wykład Patriotyczny - Powstanie Wielkopolskie',
            description: 'Zapraszamy na ostatnie spotkanie w tym roku kalendarzowym. Tematem wykładu będzie Powstanie Wielkopolskie. Do zobaczenia!',
            meetingPlace: 'DA Wawrzyny, ul. Odona Bujwida 51, Wrocław',
            startDateTime: '2018-12-18T06:00:00+02:00',
            duration: 2
        });
    }
};
    