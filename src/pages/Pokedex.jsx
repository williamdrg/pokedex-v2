import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokeCard from "../components/pokedex/PokeCard"


const Pokedex = () => {

  const userName = useSelector(store => store.userName)

  
  const [ pokemons, getPokemons ] = useFetch()
  
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'
    getPokemons(url)
  }, [])


  return (
    <div>
      <h3><span>Welcome {userName}, </span>here you could find favorite pokemon, let's go!</h3>
      <div className="pokedex__filters">

      </div>
      <div className="pokedex__container">
        {
          pokemons?.resutls.map(poke => (
            <PokeCard
              key={poke.url}
              
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex