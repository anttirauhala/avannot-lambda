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
                        'Sunnuntaisin miedommat löylyt'
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
                        tykyOnline: true,
                        ePassi: true,
                        virike: false,
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
                    description: 'Rauhaniemen Kansankylpylä sijaitsee idyllisissä maisemissa lähellä Tampereen keskustaa. ' +
                    'Kansankylpylä tarjoaa kävijöilleen viihtyisän uimarannan lisäksi myös saunomismahdollisuudet. ' +
                    'Rannalla toimii kesäkahvila, jonka valikoimista löytyy herkkuja ja suolaista purtavaa moneen makuun- vaikka uimarantapäivän eväiksi. ' +
                    'Rauhaniemi sijaitsee vain pari kilometriä Keskustorilta Lapinnimen kaupunginosassa, jonne pääsee kätevästi keskustasta bussilla numero 2.\n\n ' +
                    'Rauhaniemessä on myös hyvät paikoitustilat aivan uimarannan läheisyydessä.\n\n' +
                    'Kesäkahvila on kesäaikaan avoinna joka päivä säävarauksin.\n\n' +
                    'Rauhaniemessä on kaksi  saunaa, jotka ovat yhteisiä miehille ja naisille ja niissä saunotaan uima-asuisssa.\n\n' +
                    'Saunojien käytössä on lämmitetyt pukuhuoneet.',
                    notes: [
                        'Viikonloppuisin melko ruuhkainen, erityisesti iltaisin.'
                    ],
                    openingHours: [
                        { day: 1, from: '15:00', to: '20:00' },
                        { day: 2, from: '15:00', to: '20:30' },
                        { day: 3, from: '15:00', to: '20:00' },
                        { day: 4, from: '15:00', to: '20:00' },
                        { day: 5, from: '15:00', to: '20:30' },
                        { day: 6, from: '13:00', to: '20:00' },
                        { day: 7, from: '13:00', to: '20:00' },
    
                    ],
                    homePage: 'https://www.rauhaniemi.net/',
                    payment: {
                        mobilePay: false,
                        smartum: true,
                        smartumMobile: false,
                        tyky: true,
                        tykyOnline: false,
                        ePassi: false,
                        virike: true,
                        eazybreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 7
                },
                {
                    id: 'räikkä',
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
                        eazybreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 4
                },
                {
                    id: 'veittijärvi',
                    name: 'Veittijärven sauna',
                    address: 'Peukaloniementie 5',
                    city: 'Ylöjärvi',
                    description: 'Vain muutaman kilometrin päässä Ylöjärven keskustasta sijaitsevista Veittijärven saunoista voi ' +
                    'valita joko savusaunan tai sähkösaunan. ',
                    notes: [
                        'Katso pysäköinti- ja saapumisohje nettisivuilta!',
                        'Saunan kassalta on myynnissä virvokkeita ja makkaraa.',
                        'Grillausmahdollisuus sähkögrillillä.',
                        'Mikäli perjantaina tai lauantaina ei ole jälkilöylyvarausta, jatkuu yleinen vuoro klo 21.00 asti',
                        'Lippukirja 60€/12 lippua, lipun arvo on 6€',
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
                        eazybreak: false,
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
                        'Hinta riippuu ajankohdasta. Ma: 8 eur. Ti-Pe ennen klo 17: 10 eur, 17 jälk. 15 eur. La 15 eur.',
                        'Pyyhe vuokra 2 eur, uima-asu 2 eur.'
                    ],
                    openingHours: [
                        { day: 1, from: '11:00', to: '14:30' },
                        { day: 2, from: '12:00', to: '21:00' },
                        { day: 3, from: '12:00', to: '22:00' },
                        { day: 4, from: '12:00', to: '22:00' },
                        { day: 5, from: '12:00', to: '23:00' },
                        { day: 6, from: '15:00', to: '23:00' }
    
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
                        'Vierailijat 5,50 € kerta, 11 kerran kortti 56 €',
                        'Alle 12 vuotiaat vanhempien seurassa maksutta',
                        'Vain käteismaksu!'
                    ],
                    openingHours: [
                        { day: 3, from: '15:00', to: '21:50' },
                        { day: 5, from: '15:00', to: '21:50' },
                        { day: 7, from: '13:00', to: '20:50' }
    
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
                        eazybreak: false,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 5.50
                },
                {
                    id: 'halkoniemi',
                    name: 'Halkoniemen sauna',
                    address: 'Ojanteentie 16',
                    city: 'Nokia',
                    description: 'Halkoniemen saunaa ylläpitää vuonna 1988 perustettu Nokian Talviuimarit ry.\n\n' +
                        'Pyhäjärven rannalla, Halkoniemessä on mahdollisuus nauttia saunomisesta ja uinnista ympärivuotisesti.',
                    notes: [
                        'NAISTEN VUORO TI/TO KLO 14-16',
                        'Viimeinen tunti kuumat löylyt Ke/To (21-22)',
                        'Vain käteismaksu omatoimisesti, tasarahalla.',
                        'Sauna avoinna myös kesäkaudella. Katso kesän aukiolo nettisivuilta.',
                        'Lukolliset lokerot käytettävissä.',
                        'Kertamaksu alle 15-vuotiaa 2,00 EUR'
                    ],
                    openingHours: [
                        { day: 2, from: '14:00', to: '23:00' },
                        { day: 3, from: '16:00', to: '22:00' },
                        { day: 4, from: '14:00', to: '23:00' },
                        { day: 6, from: '14:00', to: '22:00' },
                        { day: 7, from: '15:00', to: '22:00' },
                    ],
                    homePage: 'https://www.nokiantalviuimarit.net/',
                    payment: {
                        mobilePay: false,
                        smartum: false,
                        smartumMobile: false,
                        tyky: false,
                        tykyOnline: false,
                        ePassi: false,
                        eazybreak: false,
                        edenred: false,
                        edenredTicket: false,
                        virike: false,
                        cash: true,
                        card: false
                    },
                    basicPrice: 7
                },
                {
                    id: 'kaukajärvi',
                    name: 'Kaukajärven sauna',
                    address: 'Kangasalantie 80',
                    city: 'Tampere',
                    description: 'Kirkasvetisen järven rannalla, soutustadionin kupeessa on tarjolla ' +
                    'miellyttävä uimapaikka ympäri vuoden; kesäisin uimarannan valvontaa ja kesäkioskitoimintaa, '+
                    'muina aikoina avantosaunaa. ',
                    notes: [
                        'Talviaikaan on saatavana virvokkeita.',
                        'Pukuhuoneista poistuttava MA-PE viimeistään klo 21.30 ja LA-SU klo 20.00.',
                        'Kioski',
                        'Hinta riippuu kellonajasta, arkisin enen klo 15 aikuinen 5 eur.'
                    ],
                    openingHours: [
                        { day: 1, from: '12:00', to: '21:15' },
                        { day: 2, from: '12:00', to: '21:15' },
                        { day: 3, from: '12:00', to: '21:15' },
                        { day: 4, from: '12:00', to: '21:15' },
                        { day: 5, from: '12:00', to: '21:15' },
                        { day: 6, from: '12:00', to: '19:45' },
                        { day: 7, from: '12:00', to: '19:45' },
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
                        eazybreak: true,
                        edenred: true,
                        edenredTicket: true,
                        cash: true,
                        card: true
                    },
                    basicPrice: 7
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
                        eazybreak: false,
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
                    'Paikalla on sijainnut sauna vuodesta 1977, mutta se on kokenut monta muodonmuutosta, kasvanut ja komistunut.',
                    notes: [
                        'Joka kuun toinen tiistai sauna suljettu huoltotöitä varten',
                        'Lipunmyynti päättyy arkisin ja sunnuntaisin klo 20.00 - lauantaisin klo 18.00',
                        'Löylyttely loppuu arkisin ja sunnuntaisin klo 20.30 - lauantaisin klo 18.30',
                        'Grilli suljetaan arkisin ja sunnuntaisin klo 20.30 - lauantaisin klo 18.30',
                        'Pukutiloista pitää olla ulkona arkisin ja sunnuntaisin klo 20.45 - lauantaisin klo 18.45'
                    ],
                    openingHours: [
                        { day: 1, from: '15:00', to: '20:45' },
                        { day: 2, from: '15:00', to: '20:45' },
                        { day: 3, from: '15:00', to: '20:45' },
                        { day: 4, from: '15:00', to: '20:45' },
                        { day: 5, from: '15:00', to: '20:45' },
                        { day: 6, from: '14:00', to: '18:45' },
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
                        eazybreak: true,
                        edenred: false,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 8
                },
                {
                    id: 'suolijärvi',
                    name: 'Suolijärven sauna',
                    address: 'Suolijärvenkatu 5',
                    city: 'Tampere',
                    description: 'Hervannassa, Suolijärven luonnon rauhassa sijaitseva ' +
                    'tunnelmallinen puulämmitteinen ”mökkisauna”  on yhteissauna, ' +
                    'jonka lauteille mahtuu kerralla noin 15 saunojaa. ' +
                    'Lämpimänä on myös toinen, noin 9 saunojan puulämmitteinen sauna.',
                    notes: [
                        'Molemmat saunat ovat  lämpiminä, paitsi  ensimmäisen puolen tunnin aikana vain pienempi sauna on käytössä.',
                        'Katso ohjeet pukutiloista saunan nettisivuilta'
                    ],
                    openingHours: [
                        { day: 3, from: '17:00', to: '20:45' },
                        { day: 5, from: '17:00', to: '20:45' },
                        { day: 7, from: '14:30', to: '18:45' },
                    ],
                    homePage: 'https://juttusauna.fi/suolijarven-sauna/',
                    payment: {
                        mobilePay: true,
                        smartum: true,
                        smartumMobile: true,
                        smartumSaldoCard: false,
                        tyky: true,
                        tykyOnline: false,
                        ePassi: true,
                        virike: false,
                        eazybreak: true,
                        edenred: true,
                        edenredTicket: false,
                        cash: true,
                        card: true
                    },
                    basicPrice: 6
                }
            ]
        }),
    };
    return response;
};
