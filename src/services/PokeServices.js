const axios = require('axios');

var PokeServices = {
    getPokemons: function(){
        return axios.get('https://pokeapi.co/api/v2/pokemon/');
    }
}

export { PokeServices as default};