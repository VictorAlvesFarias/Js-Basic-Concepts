setInterval(() => {
    var mini_seconds = document.getElementById("mini_seconds_identifier")
    mini_seconds.innerHTML = new Date().getMilliseconds();

    var hours = document.getElementById("hours_identifier")
    hours.innerHTML = new Date().getHours();

    var minutes = document.getElementById("minutes_identifier")
    minutes.innerHTML = new Date().getMinutes();

    var seconds = document.getElementById("seconds_identifier")
    seconds.innerHTML = new Date().getSeconds();
}, 1);