(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    TetByYear = {
      2024: "-04-30",
      2025: "-04-30",
      2026: "-04-30",
      2027: "-04-30",
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
    finalDay = yyyy + dayMonth;

  today = yyyy + "-" + mm + "-" + dd;
  // debugger;
  if (today > finalDay) {
    dayMonth = getDayMonthByYear(nextYear);
    finalDay = dayMonth + nextYear;
  }

  const countDown = new Date(finalDay).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      console.log(finalDay);

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
        (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
        (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));

      //do something later when date is near or reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's Giải Phóng Timeeee!!!";
        document.getElementById("container").classList.add("event-now");
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
        // now add any anim u want
        document.querySelector("#container > h1").classList.add("wiggle");
      } else if (Math.floor(distance / day) < 365 / 2) {
        document.getElementById("container").classList.add("nearly");
      }

      const showYear = document.getElementById("showYear");
      if (today > finalDay) {
        document.title += ` ${nextYear}`;
        showYear.innerText = `${nextYear}`;
      } else {
        document.title += ` ${yyyy}`;
        showYear.innerText = yyyy;
      }
    }, 0);
})();
