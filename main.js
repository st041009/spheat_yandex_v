ymaps.ready(init);

var placemarks = [
    {
      latitude: 59.935944,
      longitude: 30.324097,
      hintContent: '<div class="map__hint">Market Place</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__logo-img" src="img/mp_logo.jpg" alt="Бургер"/>',
        "MaretPlace",
        "</div>"
      ]
    },
    {
      latitude: 59.94,
      longitude: 30.25,
      hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__logo-img" src="img/burger.png" alt="Бургер"/>',
        "Текст",
        "</div>"
      ]
    },
    {
      latitude: 59.93,
      longitude: 30.34,
      hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__logo-img" src="img/burger.png" alt="Бургер"/>',
        "Текст",
        "</div>"
      ]
    }
  ],
  geoObjects = [];

function init() {
  var map = new ymaps.Map("map", {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark(
      [placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join("")
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/sprite.png",
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
        iconImageClipRect: [
          [415, 0],
          [461, 57]
        ]
      }
    );
  }

  var clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        href: "img/burger.png",
        size: [100, 100],
        offset: [-50, -50]
      }
    ],
    clusterIconContentLayout: null
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}
