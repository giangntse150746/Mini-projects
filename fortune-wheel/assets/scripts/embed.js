function loadPage() {
  if (_path === '/') { 
    _path = _defaultPath; 
  };
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error('Failed to fetch HTML content'));
        }
      }
    };
    xhr.open('GET', `pages/${_path}.html`, false);
    xhr.send();
  });
}

function executeJS(htmlContent) {
  document.getElementById('root').innerHTML = htmlContent;

  const plugin = document.createElement("script");
  plugin.setAttribute("src", `/assets/scripts/${_path}.js`);
  plugin.async = true;

  document.head.appendChild(plugin);
  console.log('HTML and JS executed.', rot13.encode('Hello World 13'));

  // Something more here...
}

function handleError(error) {
  console.log(error);
  _path = '/error';
  loadPage();
}

// Handle on load
// document.addEventListener('DOMContentLoaded', () => loadPage().then(executeJS).catch(handleError));
window.addEventListener('load', () => loadPage().then(executeJS).catch(handleError));

// // Handle pop state (on change URL)
// document.addEventListener('click', function (event) {
//   if (event.target.tagName === 'A') {
//     event.preventDefault();
//     const href = event.target.getAttribute('href');
//     history.pushState(null, null, href);
//     handlePopState();
//   }
// });