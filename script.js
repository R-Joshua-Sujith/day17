const countdownElement = document.getElementById("countdown");

const countdown = (count) => {
    countdownElement.innerText = count;

    if (count > 1) {
        setTimeout(() => {
            countdown(count - 1);
        }, 1000);
    } else {
        setTimeout(() => {
            countdownElement.innerText = "Happy Independence Day";
        }, 1000);
    }
};

countdown(10);