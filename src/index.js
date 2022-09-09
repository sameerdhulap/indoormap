import "./styles.css";

function initMap() {
  window.woosmap.map.config.setApiKey(
    "woos-6ab2c895-23f5-3cd2-935c-6e0c711fd9a7"
  );
  window.myMap = new window.woosmap.map.Map(document.getElementById("map"), {
    center: { lat: 48.844437932920535, lng: 2.3743880269761393 },
    zoom: 5
  });

  const indoorRenderer = new window.woosmap.map.IndoorRenderer({
    centerMap: false,
    locale: "fr"
  });
  indoorRenderer.setMap(window.myMap);

  window.addEventListener("message", (message) => {
    //alert(message + "leo");
  });

  //const indoorRenderer = new window.woosmap.map.IndoorRenderer({centerMap: true});

  const indoorService = new window.woosmap.map.IndoorService();
  let origin, destination, destinationLevel, originLevel;

  /*window.myMap.addListener("rightclick", (e) => {
    console.log(e);

    if (origin && !destination) {
      destination = new window.woosmap.map.LatLng(e.latlng.lat, e.latlng.lng);
      destinationLevel = indoorRenderer.getLevel();
    } else if (!origin || (origin && destination)) {
      origin = new window.woosmap.map.LatLng(e.latlng.lat, e.latlng.lng);
      originLevel = indoorRenderer.getLevel();
      destination = null;
    }

    const language = "fr";

    const wgs = {};

    if (origin && destination) {
      indoorService.directions(
        indoorRenderer.getVenue().venue_id,
        origin,
        originLevel,
        destination,
        destinationLevel,
        "metric",
        (result) => {
          indoorRenderer.setDirections(result);
        }
      );
    }
  });
  window.myMap.addListener("indoor_feature_selected", (indoorFeature) => {
    console.log(indoorFeature.properties);
  });
  //myEventListener.remove();*/
}

initMap();
