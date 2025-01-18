(function () {
  // Check if the Angular app is already injected
  if (document.getElementById("angular-app")) return;

  // Create a root element for the Angular app
  const appRoot = document.createElement("div");
  appRoot.id = "angular-app";
  document.body.appendChild(appRoot);

  // Load Angular app scripts dynamically
  const angularFiles = [
    chrome.runtime.getURL("browser/runtime.js"),
    chrome.runtime.getURL("browser/polyfills.js"),
    chrome.runtime.getURL("browser/main.js"),
  ];

  angularFiles.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    document.body.appendChild(script);
  });
})();
