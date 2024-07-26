const fs = require("fs");
const path = require("path");

function minifyJSText(jsString) {
  // Remove comments
  jsString = jsString.replace(/\/\*[\s\S]*?\*\/|\/\/.\s*/g, "");
  // Remove newlines and unnecessary spaces
  jsString = jsString.replace(/\s{2,}/g, " "); // Replace multiple spaces with a single space
  jsString = jsString.replace(/\s*=\s*/g, "=").replace(/\s*<\s*/g, "<").replace(/\s*>\s*/g, ">"); // Replace unused spaces
  jsString = jsString.replace(/\n|\t/g, ""); // Remove newlines
  jsString = jsString.replace(/\s*([{};,:])\s*/g, "$1"); // Remove spaces around specific characters
  return jsString.trim();
}

function minifyJSFile(inputFilePath) {
  // Read the input file
  const originalJS = fs.readFileSync(inputFilePath, "utf8");
  // Minify the JavaScript content
  const minifiedJS = minifyJSText(originalJS);
  // Construct the output file path
  const ext = inputFilePath.split(".")[inputFilePath.split(".").length - 1];
  const outputFilePath = path.join(
    path.dirname(inputFilePath),
    path.basename(inputFilePath, `.${ext}`) + `.min.js`
  );
  console.log(path.basename(inputFilePath, `.${ext}`));
  // Write the minified content to the output file
  fs.writeFileSync(outputFilePath, minifiedJS, "utf8");
  console.log(`Minified file written to: ${outputFilePath}`);
}

// Example usage
const inputFilePath = "./assets/scripts/uuid.mjs";
minifyJSFile(inputFilePath);
