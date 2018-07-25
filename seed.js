const HotelDescription = require('./api/models/hotelDescriptionModel');
const HotelOverview = require('./api/models/hotelOverviewModel');
const HotelRates = require('./api/models/hotelRatesModel')

const CONSTS = require('./helpers/const');

let hotelDescription = new HotelDescription({
    _id: CONSTS.hotetlDescriptionId,
    title: 'КУРОРТА ГРАД БАНЯ',
    subTitle:'Известен повече като Карловски минерални бани, се намира на 12 км. южно от Карлово.',
    description:'Климатът е преходноконтинентален. Лятото е приятно горещо, а зимата – мека и кратка. Есента е по-продължителна от пролетта. Средната годишна температура е +11.5 градуса. Минералните води са хипертермални, слабоминерализирани с висока алкална реакция. Използват се за балнеопроцедури и питейно лечение. Курорта разполага и с лечебна кал - землист торф, пропит с минерална вода, богат на неорганични вещества с ценни лечебни свойства.'
});

hotelDescription.save(function (err, data) {
    if(err) {
        console.log("Seed is already ran");
    }
    else {
        console.log("Seed created hotelDescription");
    }
})

let hotelOverview = new HotelOverview({
    _id: CONSTS.hotetlOverviewId,
    description:'Лекуващите се в база “Строител” ползват балнеолечебни процедури /вътрешен басейн или вана/, електро и светлолечение, включени в цената на нощувките. Отделно срещу заплащане могат да ползват сауна ,парна баня,инфраред,перлена вана, лечебен масаж, ултразвикова терапия и подводен масаж /тангентор/. Всички тези процедурни кабинети са разкрити в станцията. Откритото калолечение и минералния плаж с басейн с олимпийски размери и отделни детски басейни се намира в близост до база “Строител” които работят всекидневно от месец юни до края на месец септември.',
    properties: ['Външен басейн', 'Парна баня', 'Инфраред', 'Сауна','Ултразвук', 'Перлена вана', 'Масаж','Безплатен интернет','Тангентор']
});

hotelOverview.save(function (err, data) {
    if(err) {
        console.log("Seed is already ran");
    }
    else {
        console.log("Seed created hotelOverview");
    }
})

let hotelRates = new HotelRates({
    _id: CONSTS.hotetlRatesId,
    title: "Title",
    properties: [{key:"qna",value:"Viktor"},{key:"qna",value:"pesho"}],
    url:"pesho"
});

hotelRates.save(function (err, data) {
    if(err) {
        console.log(err);
        console.log("Seed is already ran");
    }
    else {
        console.log("Seed created hotelRates");
    }
})