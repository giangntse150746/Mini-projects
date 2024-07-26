export function appendListElements(data, container, template) {
  container.innerHTML = data.map((item) => template(item)).join("");
  return container.innerHTML;
}
export function appendElement(data, container, template) {
  var temp = document.createElement("div");
  temp.innerHTML = template(data);
  container.appendChild(temp.children[0]);
  return container;
}

export function typeItDown(string, delay = 80) {
  if (!string) return 0;
  let wait = 0;
  string.split("").forEach((text, index) => {
    setTimeout(() => simulateKeydown(text), delay * index);
    wait += delay * index;
  });
  return wait;
}

export function simulateKeydown(key) {
  const event = new KeyboardEvent("keydown", {
    key: key,
    code: `Key${key.toUpperCase()}`,
    keyCode: key.toUpperCase().charCodeAt(0),
    which: key.toUpperCase().charCodeAt(0),
    bubbles: true,
  });
  document.dispatchEvent(event);
}

export function stringToHtmlNode(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
}

export function triggerAlert(status, content, duration = 2500) {
  const alertContent = document.getElementById("alertContent");
  alertContent.innerText = content;
  const alert = document.getElementById("alert");
  alert.classList.add(status, "slide-in-blurred-right");
  setTimeout(() => {
    alert.classList.add("slide-out-blurred-right");
    alert.classList.remove("slide-in-blurred-right");
    setTimeout(() => {
      alert.classList.remove("slide-out-blurred-right");
    }, 650);
  }, duration);
}

function mergeAndSort(themes, defaultThemeName = "Default") {
  if (!themes || !themes.length) return [];

  const defaultIndex = themes.findIndex((e) => e.theme === defaultThemeName);
  const result = {};
  themes.forEach((theme) => {
    theme.data.forEach((entry) => {
      const key = entry.num;
      if (!result[key]) {
        result[key] = new Set();
      }
      entry.words.forEach((word) => result[key].add(word));
    });
  });
  themes[defaultIndex].data = Object.keys(result)
    .map((key) => ({
      title: `${key} Letters`,
      num: Number(key),
      words: Array.from(result[key]).sort(),
    }))
    .sort((a, b) => a.num - b.num);

  return themes;
}

// List type of rough-nation
// underline: This style creates a sketchy underline below an element.
// box: This style draws a box around the element.
// circle: This style draws a circle around the element.
// highlight: This style creates a highlight effect as if marked by a highlighter.
// strike-through: This style draws horizontal lines through the element.
// crossed-off: This style draws an 'X' across the element.
// bracket: This style draws a bracket around an element, usually a paragraph of text. By default on the right side, but can be configured to any or all of left, right, top, bottom.
