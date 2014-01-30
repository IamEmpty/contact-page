ymaps.ready(function () {
    var myMap = new ymaps.Map('YMap', {
        center: [55.76, 37.64],
        zoom: 17,
        behaviors:['dblClickZoom'],
        controls: []
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>Офис Яндекса в Москве</strong>',
            '<br/>',
            'Адрес: 119021, Москва, ул. Льва Толстого, 16',
            '<br/>',
            'Подробнее: <a href="http://company.yandex.ru/">http://company.yandex.ru/<a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);
});