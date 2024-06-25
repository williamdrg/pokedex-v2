import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import typePokemon from "../../utils/typePokemon.json"
import axios from "axios"
import '../../styles/pokeCard.css'
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url, name, search }) => {

  const [ pokemon, getPokemon ] = useFetch()
  const [ ability, setAbility ] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (!search) {
      getPokemon(url)
    }
  }, [url])

  useEffect(() => {
    if (pokemon?.abilities?.[0]?.ability?.url) {
      axios.get(pokemon.abilities[0].ability.url)
        .then(res => setAbility(res.data))
        .catch(err => console.error(err));
    }
  }, [pokemon]);

  useEffect(() => {
    if (search?.abilities?.[0]?.ability?.url) {
      axios.get(search.abilities[0].ability.url)
        .then(res => setAbility(res.data))
        .catch(err => console.error(err));
    }
  }, [search]);

  return (
    <>
    {
      search ? (
        <article onClick={() => navigate(`/pokedex/${search.id}`)}>
          <div className="perspetive">
              <div className="rotate_card3"></div>
                <div className="background_card" style={{backgroundImage: `url(${typePokemon[1][search?.types?.[0]?.type?.name]})`}}>
                    <div className="background_card1"></div>
                    <div className="background_card2"></div>
                    <div className="name_card"><h2>{search?.forms[0].name}</h2></div>
                    <div className="life"><h3>{search?.stats?.[0].base_stat} HP</h3></div>
                    <div className="icon_type" style={{backgroundImage: `url(${typePokemon[0][search?.types?.[0].type.name]})`}}></div>
                    <div className="img_pokemon">
                        <img src={search?.sprites?.other?.dream_world.front_default ||  search?.sprites?.other.home.front_default || search?.sprites?.front_default || '/assets/imgPokecard/pokebola.png'} alt="image the pokemon" />
                        <div className="img_pokemon1"></div>
                    </div>
                    <div className="description"><h3>{ability.flavor_text_entries?.[0]?.flavor_text}</h3></div>
                    <div className="skill"><h3>skill: {search?.abilities?.[0].ability.name}</h3></div>
                    <div className="skill_detail"><h3>{ability.effect_entries?.[0]?.short_effect}</h3></div>
                    <div className="type"><h3> Type: {search?.types?.[0].type.name}</h3></div>
                    <div className="weight"><h3>{search?.weight} Hg</h3></div>
                    <div className="power">
                        <h3> ATK {search?.stats?.[1].base_stat} ⚔️</h3>
                        <h3> DEF {search?.stats?.[2].base_stat} 🛡️</h3>
                        <h3> SPE {search?.stats?.[5].base_stat} 🏃‍♀️</h3>    
                    </div>
                </div>
            </div>
        </article>
      ) : (
        <article onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
          <div className="perspetive">
              <div className="rotate_card3"></div>
                <div className="background_card" style={{backgroundImage: `url(${typePokemon[1][pokemon?.types?.[0]?.type?.name]})`}}>
                    <div className="background_card1"></div>
                    <div className="background_card2"></div>
                    <div className="name_card"><h2>{name}</h2></div>
                    <div className="life"><h3>{pokemon?.stats?.[0].base_stat} HP</h3></div>
                    <div className="icon_type" style={{backgroundImage: `url(${typePokemon[0][pokemon?.types?.[0].type.name]})`}}></div>
                    <div className="img_pokemon">
                        <img src={pokemon?.sprites?.other?.dream_world.front_default ||  pokemon?.sprites?.other.home.front_default || pokemon?.sprites?.front_default || '/assets/imgPokecard/pokebola.png'} alt="image the pokemon" />
                        <div className="img_pokemon1"></div>
                    </div>
                    <div className="description"><h3>{ability.flavor_text_entries?.[0]?.flavor_text}</h3></div>
                    <div className="skill"><h3>skill: {pokemon?.abilities?.[0].ability.name}</h3></div>
                    <div className="skill_detail"><h3>{ability.effect_entries?.[0]?.short_effect}</h3></div>
                    <div className="type"><h3> Type: {pokemon?.types?.[0].type.name}</h3></div>
                    <div className="weight"><h3>{pokemon?.weight} Hg</h3></div>
                    <div className="power">
                        <h3> ATK {pokemon?.stats?.[1].base_stat} ⚔️</h3>
                        <h3> DEF {pokemon?.stats?.[2].base_stat} 🛡️</h3>
                        <h3> SPE {pokemon?.stats?.[5].base_stat} 🏃‍♀️</h3>    
                    </div>
                </div>
            </div>
        </article>
      )
    }
    </>
  )
}

export default PokeCard