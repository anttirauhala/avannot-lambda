exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            iceHoles: [
                {
                    id: 'suomensaari',
                    name: 'Suomensaaren sauna',
                    address: 'Suomensaarenkatu 7',
                    city: 'Tampere',
                    description: 'Suomensaaren sauna lämpiää sekä kesällä että talvella. Saunassa on hyvät pukeutumis- ja' +
                    'peseytymistilat miehille ja naisille sekä yhteissauna. Huom! Saunalle tulee vain järvivesi, ' +
                    'joka on hyvä huomioida ottamalla mukaan vettä juotavaksi.',
                    notes: [
                        'Ota mukaan juomavettä, hanoista tulee järvivettä!',
                        'Kioski saunan yhteydessä. Juomia, makkaraa yms.',
                        'Sunnuntaisin miedommat löylyt.',
                        '10 kerran sarjalippu 60 eur.',
                        'Vuosilippu 450 eur.'
                    ],
                    openingHours: [
                        { day: 1, from: '16:00', to: '20:00' },
                        { day: 3, from: '16:00', to: '20:00' },
                        { day: 5, from: '17:00', to: '21:00' },
                        { day: 6, from: '14:00', to: '18:00' },
                        { day: 7, from: '14:00', to: '18:00' }
                    ],
                    homePage: 'http://www.lielahdenkipina.fi/suomensaaren_sauna.htm',
                    payment: {
                        mobilePay: false,
                        smartum: true,
                        smartumMobile: true,
                        tyky: true,
                        tykyOnline: false,
                        ePassi: true,
                        virike: false,
                        eazyBreak: true,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 7
                },
                {
                    id: 'rauhaniemi',
                    name: 'Rauhaniemen kansankylpylä',
                    address: 'Rauhaniementie 24',
                    city: 'Tampere',
                    description: 'Rauhaniemen Kansankylpylä sijaitsee lähellä Tampereen keskustaa.\n\n' +
                    'Rauhaniemessä on kaksi  saunaa, jotka ovat yhteisiä miehille ja naisille ja niissä saunotaan uima-asuisssa.\n\n',
                    notes: [
                        'Viikonloppuisin melko ruuhkainen, erityisesti iltaisin.',
                        'Rauhallisimmat saunomishetket ovat joka päivä ennen klo 17.'
                    ],
                    openingHours: [
                        { day: 1, from: '14:00', to: '21:00' },
                        { day: 2, from: '14:00', to: '21:00' },
                        { day: 3, from: '14:00', to: '21:00' },
                        { day: 4, from: '14:00', to: '21:00' },
                        { day: 5, from: '14:00', to: '21:00' },
                        { day: 6, from: '12:00', to: '21:00' },
                        { day: 7, from: '12:00', to: '21:00' },
    
                    ],
                    homePage: 'https://www.rauhaniemi.net/',
                    payment: {
                        mobilePay: false,
                        smartum: true,
                        smartumMobile: false,
                        tyky: true,
                        tykyOnline: false,
                        ePassi: true,
                        virike: true,
                        eazyBreak: false,
                        edenred: true,
                        edenredTicket: true,
                        cash: true,
                        card: true,
                    },
                    basicPrice: 8
                },
                {
                    id: 'raikka',
                    name: 'Räikän sauna',
                    address: 'Räikäntie',
                    city: 'Ylöjärvi',
                    description: 'Saunaa ylläpitää Ylöjärven Ryhti ry.',
                    notes: [
                        'Omatoiminen maksu käteisellä laatikoon.',
                        'Auki vain talvikaudella.'
                    ],
                    openingHours: [
                        { day: 1, from: '12:00', to: '20:00' },
                        { day: 3, from: '12:00', to: '20:00' },
                        { day: 4, from: '12:00', to: '20:00' },
                        { day: 6, from: '11:00', to: '20:00' }
                    ],
                    homePage: 'https://www.ylojarvenryhti.fi/hiihto/avantouinti/',
                    payment: {
                        mobilePay: false,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        virike: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 4
                },
                {
                    id: 'veittijarvi',
                    name: 'Veittijärven sauna',
                    address: 'Peukaloniementie 5',
                    city: 'Ylöjärvi',
                    description: 'Muutama kilometri Ylöjärven keskustasta. Käytössä savusauna ja sähkösauna.',
                    notes: [
                        'Katso pysäköinti- ja saapumisohje nettisivuilta!',
                        'Mikäli perjantaina tai lauantaina ei ole jälkilöylyvarausta, jatkuu yleinen vuoro klo 21.00 asti',
                        'Huom! Saunalla käy maksuvälineenä ainoastaan käteinen'
                    ],
                    openingHours: [
                        { day: 1, from: '16:00', to: '21:00' },
                        { day: 3, from: '16:00', to: '21:00' },
                        { day: 5, from: '15:00', to: '20:00' },
                        { day: 6, from: '14:00', to: '20:00' }
    
                    ],
                    homePage: 'http://ylojarvenavantouimarit.fi/index.php',
                    payment: {
                        mobilePay: false,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        virike: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 8
                },
                {
                    id: 'kuuma',
                    name: 'Saunaravintola Kuuma',
                    address: 'Laukontori 21',
                    city: 'Tampere',
                    description: 'Tampereen paraatipaikalla Laukontorin rannassa sijaitsevassa, ympärivuoden auki olevassa Kuumassa on ' +
                    'kahvila-ravintola, suuret kahteen kerrokseen sijoittuvat terassialueet sekä kaksi saunaa. ' +
                    'Löylyistä käsin pääsee virkistäytymään Pyhäjärveen, Kuuman omaan pulahdusaltaaseen.',
                    notes: [
                        'Virvokkeita mahdollusta ostaa saunomisen lomassa ravintolan luukulta ulkoa päin, maksu kortti/käteinen.',
                        'Saunaranneke tulee ostaa viimeistään tuntia ennen sulkemisaikaa.',
                        'Hinta riippuu ajankohdasta.',
                        'Ma-Ti: 8 eur, vain yksi sauna käytössä. ',
                        'Ke-pe ennen klo 17.00 10 eur, arki-iltaisin ja lauantaina 15 eur.',
                        'Pyyhe vuokra 2 eur, uima-asu 2 eur.',
                        'Torstaisin aamusauna, hinta 11 eur. Klo 6.30, 8.00 tai 9.30',
                        'Aamusauna+pyyhe, uinti, aamupuuro ja kahvi sekä Karhu:n tarjoamana Karhu 0,0% olut.'
                    ],
                    openingHours: [
                        { day: 1, from: '11:00', to: '23:00' },
                        { day: 2, from: '11:00', to: '23:00' },
                        { day: 3, from: '11:00', to: '23:00' },
                        { day: 4, from: '11:00', to: '23:00' },
                        { day: 5, from: '11:00', to: '23:00' },
                        { day: 6, from: '13:00', to: '23:00' }
    
                    ],
                    homePage: 'https://saunaravintolakuuma.fi/saunat/',
                    payment: {
                        mobilePay: false,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        virike: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 15
                },
                {
                    id: 'alisniemi',
                    name: 'Alisniemen sauna',
                    address: 'Porintie 584',
                    city: 'Nokia',
                    description: 'Alisniemi on Nokian Invalidit ry:n ylläpitämä vapaa-ajan viettopaikka Nokialla Alisenjärven ' +
                    'rannalla n. 4 km etäisyydellä Nokian keskustasta ja 20 km:n päässä Tampereelta.',
                    notes: [
                        'Sauna avoinna myös kesäkaudella. Katso kesän aukiolo nettisivuilta.',
                        '11 kerran kortti 60 eur',
                        '12 vuotiaat ja nuoremmat vanhempien seurassa maksutta',
                        'Vain käteismaksu!'
                    ],
                    openingHours: [
                        { day: 3, from: '15:00', to: '21:30' },
                        { day: 5, from: '15:00', to: '21:30' },
                        { day: 7, from: '13:00', to: '21:30' }
    
                    ],
                    homePage: 'https://www.alisniemi.com/Avantouinti.html',
                    payment: {
                        mobilePay: false,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        virike: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 6
                },
                {
                    id: 'halkoniemi',
                    name: 'Halkoniemen sauna',
                    address: 'Ojanteentie 16',
                    city: 'Nokia',
                    description: 'Halkoniemen saunaa ylläpitää vuonna 1988 perustettu Nokian Talviuimarit ry.\n\n' +
                        'Pyhäjärven rannalla, Halkoniemessä on mahdollisuus nauttia saunomisesta ja uinnista ympärivuotisesti.',
                    notes: [
                        'Tiukentuneiden kokoontumisrajoitusten johdosta sauna on torstaista 5.8.2021 lähtien avoinna vain jäsenille.',
                        'Tiistaisin 22-23 ja keskiviikkoisin 21-22 kuumien löylyjen tunti.',
                        'NAISTEN VUORO TI KLO 14-16 JA TO KLO 14-16.',
                        'Ohjeet MobilePay-maksamiseen löytyvät saunalta.'
                    ],
                    openingHours: [
                        { day: 2, from: '14:00', to: '23:00' },
                        { day: 3, from: '16:00', to: '22:00' },
                        { day: 4, from: '14:00', to: '23:00' },
                        { day: 6, from: '14:00', to: '22:00' },
                        { day: 7, from: '16:00', to: '22:00' },
                    ],
                    homePage: 'https://www.nokiantalviuimarit.net/',
                    payment: {
                        mobilePay: true,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        virike: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 7
                },
                {
                    id: 'kaukajarvi',
                    name: 'Kaukajärven sauna',
                    address: 'Kangasalantie 80',
                    city: 'Tampere',
                    description: 'Kirkasvetisen järven rannalla, soutustadionin'+
                    'kupeessa on tarjolla miellyttävä uimapaikka ympäri vuoden. ',
                    notes: [
                        'Erittäin kirkasvetinen järvi.',
                        'Parkeeraus pääosin tien varteen.',
                        'Talviaikaan on saatavana virvokkeita.',
                        '10 kerran kortti 50 eur',
                        '"Maksuvälineenä myös yleisimmät liikuntasetelit / sähköiset maksut."'
                    ],
                    openingHours: [
                        { day: 1, from: '12:00', to: '20:45' },
                        { day: 2, from: '12:00', to: '20:45' },
                        { day: 3, from: '12:00', to: '20:45' },
                        { day: 4, from: '12:00', to: '20:45' },
                        { day: 5, from: '12:00', to: '20:45' },
                        { day: 6, from: '12:00', to: '20:45' },
                        { day: 7, from: '12:00', to: '20:45' },
                    ],
                    homePage: 'https://www.kaukajarvensauna.fi/',
                    payment: {
                        mobilePay: false,
                        smartum: true,
                        smartumMobile: true,
                        smartumSaldoCard: true,
                        tyky: true,
                        tykyOnline: true,
                        ePassi: true,
                        virike: false,
                        eazyBreak: true,
                        edenred: true,
                        edenredTicket: true,
                        cash: true,
                        card: true
                    },
                    basicPrice: 8
                },
                {
                    id: 'tohloppi',
                    name: 'Tohlopin tynnyrisauna',
                    address: 'Pyydyspohjankatu 1',
                    city: 'Tampere',
                    description: 'Tohlopin Uimaseura tarjoaa Tohlopin tynnyrisaunassa saunapalveluja ' +
                    'kaikille talviuinnin harrastajille (ei ainoastaan uimaseuran jäsenille).\n\n' +
                    'Lämmitetty uimakoppi on myös saunomisen yhteydessä saunojien käytössä. Tynnyrisaunan lauteille mahtuu kerralla yli 15 saunojaa.',
                    notes: [
                        'Ei suihkuja.',
                        'Lauantain saunavuoro järjestetään kokeiluluontoisesti 25.1.-29.2.2020 välisen ajan',
                        'Saunan lämmitys aloitetaan noin 45 minuuttia ennen saunavuoron alkua.',
                        'Saunan suuren koon vuoksi sauna ei ole vuoron alkaessa välttämättä vielä kuumimmillaan.'
                    ],
                    openingHours: [
                        { day: 2, from: '17:30', to: '21:00' },
                        { day: 4, from: '17:30', to: '21:00' },
                        { day: 6, from: '15:00', to: '18:30' },
                        { day: 7, from: '16:00', to: '20:00' },
                    ],
                    homePage: 'https://sites.google.com/site/tohlopinuimaseura/tohlopin-laemmittelysauna',
                    payment: {
                        mobilePay: true,
                        smartum: true,
                        smartumMobile: true,
                        smartumSaldoCard: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: true,
                        virike: false,
                        eazyBreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 5
                },
                {
                    id: 'kaupinoja',
                    name: 'Kaupinojan sauna',
                    address: 'Kaupinpuistonkatu 1 A',
                    city: 'Tampere',
                    description: 'Kaupinojan sauna sijaitsee Näsijärven rannalla UKK-Instituutin tuntumassa.' +
                    'Paikalla on sijainnut sauna vuodesta 1977, mutta se on kokenut monta muodonmuutosta, kasvanut ja komistunut.' +
                    'Viimeksi sauna on avattu 25.4.2010 perusteellisen remontin jälkeen, joka tuli tehtäväksi saunassa 15.11.2008 riehuneen palon johdosta.',
                    notes: [
                        'Joka kuun toinen tiistai sauna suljettu huoltotöitä varten',
                        'Arkipyhinä on la-vuoro.',
                        'Lipunmyynti päättyy arkisin ja sunnuntaisin klo 20.00 - lauantaisin klo 18.00',
                        'Löylyttely loppuu arkisin ja sunnuntaisin klo 20.30 - lauantaisin klo 18.30',
                        'Grilli suljetaan arkisin ja sunnuntaisin klo 20.30 - lauantaisin klo 18.30',
                        'Pukutiloista pitää olla ulkona arkisin ja sunnuntaisin klo 20.45 - lauantaisin klo 18.45',
                        '12 kerran kortti 70 eur'
                    ],
                    openingHours: [
                        { day: 1, from: '15:00', to: '20:45' },
                        { day: 2, from: '15:00', to: '20:45' },
                        { day: 3, from: '15:00', to: '20:45' },
                        { day: 4, from: '15:00', to: '20:45' },
                        { day: 5, from: '15:00', to: '20:45' },
                        { day: 6, from: '12:00', to: '18:45' },
                        { day: 7, from: '12:00', to: '20:45' },
                    ],
                    homePage: 'https://www.talviuimarit.fi/kaupinojan-sauna/',
                    payment: {
                        mobilePay: false,
                        smartum: true,
                        smartumMobile: false,
                        smartumSaldoCard: false,
                        tyky: false,
                        tykyOnline: true,
                        ePassi: true,
                        virike: false,
                        eazyBreak: true,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 10
                },
                {
                    id: 'suolijärvi',
                    name: 'Suolijärven sauna',
                    address: 'Suolijärvenkatu 5',
                    city: 'Tampere',
                    description: 'Suolijärven sauna aloittaa jälleen 12.9.2021. ' +
                    'Varauskalenterista voit varata laudepaikan tunnin saunavuoroksi ' +
                    'jompaan kumpaan saunaan, jonka lisäksi voit käyttää pukuhuoneita ' +
                    'ja suihkuja ennen ja jälkeen saunavuorosi. Jos saunassasi on ' +
                    'tilaa (eli ovella mainittu maksimi saunojamäärä ei ylity) ennen ' +
                    'ja/tai jälkeen vuorosi, voit toki pidentää  saunomistasi. ' +
                    'Vastaavasti jos toisessa saunassa on tilaa, voit käyttää myös sitä. '+
                    'Voit tulla saunalle ”riskillä” ilman nettivarausta, tällöin ' +
                    'saunan hoitaja luo varauksen lähimpään vapaita laudepaikkoja ' +
                    'sisältävään vuoroon (vuoroja alkaa puolen tunnin välein).  '+
                    'Muistathan peruuttaa varauksesi, jos et pääsekään paikalle.',                    
                    notes: [
                        'Katso ohjeet pukutiloista saunan nettisivuilta.',
                        '5 kerran kortti 30 eur',
                        'Varaa mukaan juotavaa, vesipistettä ei ole saunan lähellä.',
                        'Saunalla on kaasugrilli, jossa voit paistaa mukana tuomasi makkarat.'
                    ],
                    openingHours: [
                        { day: 3, from: '16:15', to: '20:45' },
                        { day: 7, from: '13:15', to: '18:45' },
                    ],
                    homePage: 'https://juttusauna.fi/suolijarven-sauna/',
                    payment: {
                        mobilePay: true,
                        smartum: true,
                        smartumMobile: false,
                        smartumSaldoCard: false,
                        tyky: true,
                        tykyOnline: false,
                        ePassi: true,
                        virike: false,
                        eazyBreak: true,
                        edenred: true,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 7
                }
            ]
        }),
    };
    return response;
};