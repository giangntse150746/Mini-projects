"use strict";
import { v4 } from "./uuid.mjs";
import { firebase } from "./firebase.mjs";
import { annotate } from "./rough-nation.mjs";
import { stringToHtmlNode, triggerAlert, appendElement } from "./utils.mjs";
import {
  initGlobalMethods,
  initCheckAllActions,
  initFilterActions,
  lsThemeNames,
} from "./setup.mjs";

const collectionName = "words-by-theme-v1",
  boxTemplate = `
  <section class="accordion-box">
    <div class="accordion-box-title"></div>
    <div class="accordion-box-description">
      <table class="accordion-box-table">
        <tbody> </tbody>
      </table>
    </div>
  </section>
`;

var _filter = {
    theme: "Default",
    category: 0,
    includes: "",
    excludes: "",
  },
  _data = [],
  _lsThemes = [],
  _lsCategories = [],
  isFirstLoad = true;

async function loadFromFile() {
  const response = await fetch("assets/words.json");
  if (!response.ok) throw new Error("Failed to fetch data");

  const jsonData = await response.json();

  jsonData.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
  jsonData.forEach((theme) =>
    theme.data.forEach((d) => {
      if (theme.theme === "Default") {
        d.words = [
          ...new Set(
            jsonData.reduce((p, c) => {
              return p.concat(c.data?.find((e) => e.num == d.num)?.words || []);
            }, [])
          ),
        ];
      }
      d.words.sort();
    })
  );
  return jsonData;
}

async function fetchData() {
  _data = await firebase.loadData(collectionName, triggerAlert);
  if (!_data.length) _data = await loadFromFile();

  return _data;
}

function filterWords(data) {
  var filteredItems = [];
  // get the list from themes
  if (isFirstLoad) {
    const themeSelectElement = document.getElementById("themeSelect");
    const categorySelectElement = document.getElementById("categorySelect");

    data.forEach((item) => {
      _lsThemes.push({ value: item.theme, label: item.theme });
      // prettier-ignore
      appendElement( item.theme, themeSelectElement, (e) => `<option value="${item.theme}">${item.theme}</option>`);
      item.theme === "Default" &&
        (_lsCategories = item.data.map((d) => {
          // prettier-ignore
          appendElement(d, categorySelectElement, (e) => `<option value="${e.num}">${e.title}</option>`);
          return { value: d.num, label: d.title };
        }));

      item.theme === _filter.theme && (filteredItems = [...item.data]);
    });
    isFirstLoad = false;
  } else filteredItems = data.find((item) => item.theme === _filter.theme).data;

  // handle filter data
  if (!!_filter.category && _filter.category > 0) {
    filteredItems = filteredItems.filter((e) => e.num == _filter.category);
  }
  if (!!_filter.includes?.trim()) {
    const lsIncluded = _filter.includes
      .split(",")
      ?.filter((e) => e.trim()?.length > 0)
      ?.map((e) => {
        const sep = e.split(":");
        return { letter: sep[0].toUpperCase(), pos: sep[1] ?? -1 };
      });
    if (!!lsIncluded.length) {
      filteredItems = filteredItems.reduce((p, c, i) => {
        const tmp = c.words.filter((w) => {
          return !lsIncluded.some((ic) =>
            ic.pos >= 0 ? w.charAt(ic.pos) != ic.letter : !w.includes(ic.letter)
          );
        });
        if (!!tmp?.length) p.push({ ...c, words: tmp });

        return p;
      }, []);
    }
  }

  if (!!_filter.excludes?.trim()) {
    const lsExcludes = _filter.excludes
      .split(",")
      ?.filter((e) => e.trim()?.length > 0)
      ?.map((e) => {
        const sep = e.split(":");
        return { letter: sep[0].toUpperCase(), pos: sep[1] ?? -1 };
      });
    if (!!lsExcludes.length) {
      filteredItems = filteredItems.reduce((p, c, i) => {
        const tmp = c.words.filter((w) => {
          return !lsExcludes.some((ec) =>
            ec.pos >= 0 ? w.charAt(ec.pos) == ec.letter : w.includes(ec.letter)
          );
        });
        if (!!tmp?.length) p.push({ ...c, words: tmp });

        return p;
      }, []);
    }
  }

  return filteredItems;
}

async function loadWords() {
  try {
    const container = document.getElementById("lstContainer");
    container.innerHTML = "";

    filterWords(_data).forEach((cat) => {
      cat.words.sort();
      const box = stringToHtmlNode(boxTemplate);
      const titleElement = box.querySelector(".accordion-box-title");
      titleElement.textContent = cat.title;
      const tbody = box.querySelector(".accordion-box-table tbody");
      for (let i = 0; i < cat.words.length; i += 3) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
          const index = i + j;
          if (index < cat.words.length) {
            const cell = document.createElement("td");
            cell.textContent = cat.words[index];
            row.appendChild(cell);
          }
        }
        tbody.appendChild(row);
      }
      container.appendChild(box);
    });

    !isFirstLoad && initMainContentActions();

    !!_filter.category &&
      setTimeout(() => {
        document.querySelector("#showAllCheckbox").click();
        if (document.querySelector("#showAllText").textContent.includes("Show"))
          document.querySelector("#showAllCheckbox").click();
      }, 100);
  } catch (error) {
    triggerAlert("error", "Failed to load content data!");
    console.error(error);
  }
}

async function onChangeFilter(e, type) {
  _filter[type] = e.value;
  return await loadWords();
}

function initMainContentActions() {
  document.querySelectorAll(".accordion-box-title").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.parentNode.classList.toggle("expand");
    });
  });
  // Init copy action
  document.querySelectorAll("td").forEach((td) => {
    td.addEventListener("dblclick", () => {
      const content = td.textContent;
      navigator.clipboard
        .writeText(content)
        .then(() => triggerAlert("success", `${content} copied to clipboard`))
        .catch(() => triggerAlert("error", `Failed to copy ${content} to clipboard`));
    });
  });
}

const createListItems = () => {
  return lsThemeNames.map((name) => ({
    id: v4(),
    theme: "Crypto Tools",
    launchDate: "",
    lastUpdateAt: new Date().toISOString(),
    createAt: new Date().toISOString(),
    data: [
      { title: "8 Letters", num: 8, words: [] },
      { title: "7 Letters", num: 7, words: [] },
      { title: "6 Letters", num: 6, words: [] },
      { title: "5 Letters", num: 5, words: [] },
      { title: "4 Letters", num: 4, words: [] },
      { title: "3 Letters", num: 3, words: [] },
    ],
  }));
};

function initActions() {
  // Init check all action
  initCheckAllActions();
  // Init all actions for main section
  initMainContentActions();
  // Init filter actions
  initFilterActions(onChangeFilter);

  // Init annotaion by Rough nation
  const e = document.querySelector("#showAllCheckbox");
  const annotation = annotate(e, { type: "box" });
  annotation.color = "darkblue";
  annotation.show();

  // Init keydown events
  document.addEventListener("keydown", async (e) => {
    // handle batch add items from local collection (JSON file)
    if (e.ctrlKey && e.shiftKey && e.key === "F") {
      e.preventDefault();
      // main action
      await firebase.batchAdd(await loadFromFile(), collectionName, undefined, triggerAlert);
      await loadWords();
    }

    // not done //
    // handle create items
    if (_data && e.ctrlKey && e.altKey && e.key === "C") {
      e.preventDefault();
      // main action
      createListItems();
      await loadWords();
    }
  });
}

// -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", async () => {
  initGlobalMethods(); // add some rules/methods definition
  await fetchData(); // fetch data from remote or local
  await loadWords(); // load data into elements
  initActions(); // init the actions
});
