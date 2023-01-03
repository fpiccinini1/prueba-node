

const fs = require('fs') //me traigo fs
const path = require('path') //me traigo path
const texto = fs.readFileSync(path.join(__dirname, './bicicletas.json'), 'utf-8') //me traigo las bicis del json
const datos = JSON.parse(texto) //convierto el json que es string en un array



module.exports = datos