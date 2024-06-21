import useFetch from "../../hooks/useFetch"


const PokeCard = () => {
  const [ pokemon, getPokemon ] = useFetch()
  return (
    <article>
      <figure>
        <img src={pokemon.sprites.other.oficial} alt="pokemon image" />
      </figure>
    </article>
  )
}

export default PokeCard