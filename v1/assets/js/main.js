document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-lightscroll]').forEach(el => {
        el.addEventListener('click', smoothScroll);
    })

    initTimer()
})


function smoothScroll(event) {
    event.preventDefault();
    if (event.target.dataset?.lightscroll) { //Check if tag is an anchor
        event.preventDefault()
        const hash = event.target.dataset.lightscroll.replace('#', '');
        const link = document.getElementById(hash)

        if (link) {
            link.scrollIntoView({
                block: "start",
                alignToTop: true,
                behavior: "smooth"
            });
        }


    }
}


var countdown, days, hour, minute, second;

function initTimer() {
    countdown = new Date(document.querySelector('#timer [data-countdown-from]')?.dataset?.countdownFrom);
    //countdown = new Date('2021-09-06T20:00:00');
    countdown = new Date("2021-09-06T13:00:00.000-04:00");
    days = document.querySelector('#timer [data-countdown-size="days"]')
    hours = document.querySelector('#timer [data-countdown-size="hours"]')
    minutes = document.querySelector('#timer [data-countdown-size="minutes"]')
    seconds = document.querySelector('#timer [data-countdown-size="seconds"]')

    var TimerCountDown = setInterval(function () {
        var now = new Date().getTime();

        var t = countdown - now;

        let v_days = Math.floor(t / (1000 * 60 * 60 * 24)),
            v_hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            v_minutes = Math.floor((t / 1000 / 60) % 60),
            v_seconds = Math.floor((t / 1000) % 60);

        if (v_days < 10) v_days = '0' + v_days;
        if (v_hours < 10) v_hours = '0' + v_hours;
        if (v_minutes < 10) v_minutes = '0' + v_minutes;
        if (v_seconds < 10) v_seconds = '0' + v_seconds;

        days.dataset.countdownValue = v_days.toString();
        hours.dataset.countdownValue = v_hours.toString();
        minutes.dataset.countdownValue = v_minutes.toString();
        seconds.dataset.countdownValue = v_seconds.toString();



        if(t < 0) {
            clearInterval(TimerCountDown);
            days.dataset.countdownValue = "00";
            hours.dataset.countdownValue = "00";
            minutes.dataset.countdownValue = "00";
            seconds.dataset.countdownValue = "00";
        }

    }, 1000)
}
