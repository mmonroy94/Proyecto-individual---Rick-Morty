const http = require("http");
const { getCharById } = require("./controllers/getCharById");

http
.createServer((req,res) => {
    //La siguiente linea le permite al front hacer cualquier tipo de petición.
    //Este ejemplo no es la forma en la que usualmente se maneja
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')){
        // SPLIT crea un array a partir de un string y crea una posición cada que encuentre el separador /
        // .at(-1) captura la última posición del array
        const id = req.url.split('/').at(-1);
        // PASEAR con +, el operador de conversión de tipo. Al anteponerlo podemos parsear de un string a número.
        getCharById(res,+id);
    }
})
.listen(3001,'localhost')