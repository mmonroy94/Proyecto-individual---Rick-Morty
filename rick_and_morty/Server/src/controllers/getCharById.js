const axios = require ("axios");

const getCharById = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    // se puede manejar con destructurin o con data y llamar a cada propiedad como data.id, data.name ...
    .then(({name,gender,species,origin,image,status,location})=>{
        const character = {
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status,
            location: location.name
        }

        return res
            .writeHead(200,{'Content-type':'application/json'})
            .end(JSON.stringify(character))
    })
    .catch(error => {
        return res
        .writeHead(500,{'Content-type':'text/plain'})
        .end(error.message)
    })
}

module.exports = {
    getCharById
};