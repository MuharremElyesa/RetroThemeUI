// Modüller:
const path = require("path")


// Html belgesi, yol göstericisi:
function htmlPath(fileName) {
    fileName = fileName+".html"
    return path.join(__dirname+"/../client/html", fileName)
}


// Export:
module.exports = {
    htmlPath
}