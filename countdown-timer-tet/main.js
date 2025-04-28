(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    TetByYear = {
      2024: "02/10",
      2025: "01/29/",
      2026: "02/17/",
      2027: "02/06/",
    };

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  const getDayMonthByYear = (year) => TetByYear[year];
  // prettier-ignore
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = getDayMonthByYear(yyyy),
    Tetday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > Tetday) {
    dayMonth = getDayMonthByYear(nextYear);
    Tetday = dayMonth + nextYear;
  }

  const countDown = new Date(Tetday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is near or reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's Tet now!!!";
        document.getElementById("container").classList.add("event-now");
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      } else if (Math.floor(distance / day) < 365 / 2) {
        document.getElementById("container").classList.add("nearly");
      }

      const showYear = document.getElementById("showYear");
      if (today > Tetday) {
        document.title += ` ${nextYear}`;
        showYear.innerText = nextYear;
      } else {
        document.title += ` ${yyyy}`;
        showYear.innerText = yyyy;
      }
    }, 0);
})();
