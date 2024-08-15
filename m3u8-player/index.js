const rootDir = "pages";
const routes = {
  "/": `${rootDir}/raw`,
  "/about": `${rootDir}/about`,
};

function fetchTemplate(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch template: ${url}`);
    }
    return response.text();
  });
}

function clearExistingScriptsAndStyles() {
  // Remove existing scripts and styles that were dynamically added
  const dynamicScripts = document.querySelectorAll("script[data-dynamic]");
  const dynamicStyles = document.querySelectorAll("link[data-dynamic]");

  dynamicScripts.forEach((script) => script.remove());
  dynamicStyles.forEach((link) => link.remove());
}

function injectScriptsAndStyles(template) {
  // Create a temporary container to parse the template
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = template;

  // Extract scripts and styles
  const scripts = tempDiv.querySelectorAll("script");
  const styles = tempDiv.querySelectorAll('link[rel="stylesheet"]');

  // Append styles to the head
  styles.forEach((style) => {
    style.setAttribute("data-dynamic", true); // Mark as dynamically added
    document.head.appendChild(style);
  });

  // Append scripts to the body
  scripts.forEach((script) => {
    script.setAttribute("data-dynamic", true); // Mark as dynamically added
    document.body.appendChild(script);
  });
}

function render(template) {
  const root = document.getElementById("root");
  clearExistingScriptsAndStyles(); // Clear existing dynamic resources
  root.innerHTML = template;
  injectScriptsAndStyles(template); // Inject new dynamic resources
}

function handleRouteChange() {
  const path = window.location.pathname;
  const templateURL = routes[path]
    ? !routes[path].includes(".html")
      ? `${routes[path]}/index.html`
      : routes[path]
    : `${rootDir}/404.html`;

  fetchTemplate(templateURL)
    .then(render)
    .catch((error) => {
      console.error(error);
      render("<h1>Error loading page</h1>");
    });
}

// Handle initial load
handleRouteChange();

// Handle navigation changes
window.addEventListener("popstate", handleRouteChange);

// Example of navigation function
function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  handleRouteChange();
}

// Expose navigate function to global scope for simplicity
window.navigateTo = navigateTo;
