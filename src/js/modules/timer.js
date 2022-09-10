function timer(deadline) {

    const daysCell = document.querySelector("#days"),
        hoursCell = document.querySelector("#hours"),
        minutesCell = document.querySelector("#minutes"),
        secondsCell = document.querySelector("#seconds");

    setInterval(() => {
        let time = Date.parse(deadline) - Date.parse(new Date());

        let timeCellArr = [daysCell, hoursCell, minutesCell, secondsCell];

        let days, hours, minutes, seconds;
        days = Math.floor(time / (1000 * 60 * 60 * 24));
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((time / 1000 / 60) % 60);
        seconds = Math.floor((time / 1000) % 60);

        let timeArr = [days, hours, minutes, seconds];

        timeCellArr.forEach((item, i) => {
            if (timeArr[i] < 0) {
                item.innerHTML = `00`;
            } else if (timeArr[i] < 10) {
                item.innerHTML = ``;
                item.innerHTML = `0${timeArr[i]}`;
            } else {
                item.innerHTML = ``;
                item.innerHTML = `${timeArr[i]}`;
            }
        });

    }, 1000);

}

export default timer;