const superagent = require('superagent')

const Pokemon = async (req, res, next) => {

  const ids = req.body.ids
  
  const pokeInfo = await Promise.all(ids.map(async id => {
   
    try{
  
      const response = await superagent.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      const pokeData = response.body
      const typesPokemon = pokeData.types.map (type => {
      return type
   })

      const typeByName = typesPokemon.map(poketype => {
      return poketype.type.name
   })
      return {
         name: pokeData.name,
         types: typeByName,
         sprite: pokeData.sprites.front_default,
    }
  }
  catch(err){

    return {
      name: "notfound"
    }
  }
}))
  
  res.status(200).send(pokeInfo)
  next()
}
module.exports = Pokemon