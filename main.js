ymaps.ready(init);

var placemarks = [
    {
      latitude: 59.9347212,
      longitude: 30.3506727,
      hintContent: '<div class="map__hint"> Du Nord 1834 </div>',
      balloonContent: [
        '<div class="map__balloon">',
        '<img class="map__logo-img" src="img/spheat.png" alt="spheat"/>',
        "French cuisine restaurant",
        " at ",
        "Ligovsky prospekt, 26",
        "</div>",
      ],
    },
  ],
  geoObjects = [];

function init() {
  var map = new ymaps.Map("map", {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ["zoomControl"],
    behaviors: ["drag"],
  });

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark(
      [placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join(""),
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.png",
        iconImageSize: [32, 32],
        iconImageOffset: [0, 0],
        iconImageClipRect: [
          [0, 0],
          [0, 0],
        ],
      }
    );
  }

  var clusterer = new ymaps.Clusterer({
    clusterIcons: [
      {
        href: "img/map-marker.png",
        size: [100, 100],
        offset: [-50, -50],
      },
    ],
    clusterIconContentLayout: null,
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}
