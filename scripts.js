setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let a = document.getElementById("ampm");
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h > 12 ? "PM" : "AM";

    //converting 24 hrs to 12 hrs
    h = h > 12 ? h - 12 : h;

    //adding zero to single digit
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Hours</span></br>";
    minutes.innerHTML = m +"<br><span>Minutes</span></br>";
    seconds.innerHTML = s + "<br><span>Seconds</span></br>";
    a.innerHTML = ampm;

    hh.style.strokeDashoffset = 440 - (440*h) / 12;
    mm.style.strokeDashoffset = 440 - (440*m) / 60;
    ss.style.strokeDashoffset = 440 - (440*s) / 60;
    hr_dot.style.transform = `rotate(${h * 30}deg)`  //360/12;
    min_dot.style.transform = `rotate(${m * 6}deg)` //360/60;
    sec_dot.style.transform = `rotate(${s * 6}deg)`
});
