(() => {
  "use strict";
  const object = {
    id: "",
    theme: "",
    launchDate: "",
    lastUpdateAt: new Date().toISOString(),
    createAt: new Date().toISOString(),
    isPublic: true,
    data: [
      {
        title: "8 Letters",
        num: 8,
        words: [],
      },
      { title: "7 Letters", num: 7, words: [] },
      { title: "6 Letters", num: 6, words: [] },
      { title: "5 Letters", num: 5, words: [] },
      { title: "4 Letters", num: 4, words: [] },
      { title: "3 Letters", num: 3, words: [] },
    ],
  };

  const eventDates = document.querySelector(".css-w2z2xi").textContent,
    themeName = document.querySelector(".css-14pe3hg").textContent;
  object.theme = themeName?.trim() || "";
  object.launchDate = eventDates
    ? new Date(eventDates.split("to")[0]?.trim()).toISOString()
    : new Date().toISOString;
  console.log(object);
})();
