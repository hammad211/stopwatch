let hours = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

document.getElementById("hours").innerHTML = "00:  ";
document.getElementById("mins").innerHTML = " 00:  ";
document.getElementById("sec").innerHTML = "  00:  ";
document.getElementById("count").innerHTML = " 00   ";

let start = () => {
    timer = true;
    stopWatch();
}

let stop = () => {
    timer = false;
}

let reset = () => {
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = " :00";
    document.getElementById("sec").innerHTML = "  :00";
    document.getElementById("count").innerHTML = "  :00";
    timer = false;
}

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
            count = 0;
        }
        if (min == 60) {
            hours++;
            min = 0;
            sec = 0;
            count = 0;
        }

        document.getElementById("hours").innerHTML = hours + " : ";
        document.getElementById("mins").innerHTML = min + "  : ";
        document.getElementById("sec").innerHTML = sec + "  :";
        document.getElementById("count").innerHTML = count + " ";

        setTimeout(stopWatch, 10);
    }
}
