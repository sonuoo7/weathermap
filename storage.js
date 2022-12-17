function geoFindme() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    localStorage.setItem("lat", latitude);
    localStorage.setItem("long", longitude);
    window.location.href = "index.html"; // link the 2page
  }
  navigator.geolocation.getCurrentPosition(success);
}
