function clickFunc() {
    document.getElementById("demo").innerHTML = "Hey you clicked the button well done!";
}

var x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Your browser doesn't support this feature.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
