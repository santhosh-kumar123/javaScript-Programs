let countDown = new Date().getTime() + 24 * 60 * 60 * 1000

let x = setInterval(() => {
    let now = new Date().getTime()
    let compare = countDown - now
    let second=(Math.floor(compare / 1000)%60);
    let minute=(Math.floor(compare / 60 * 1000)%60);
    let hour=(Math.floor(compare / 60 * 60 * 1000)%24);
    let day = (Math.floor(compare / 24 * 60 * 60 * 1000));
    console.log(day + "days" + hour + "hours" + minute + "minutes" + second + "seconds");
    
    if (hour == 0) {
        clearInterval(x)
        console.log("end of the interval");
    }
}, 2000)
