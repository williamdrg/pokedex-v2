import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import typePokemon from "../utils/typePokemon.json"
import '../styles/infoPokedex.css'

const InfoPokedex = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, getPokemon] = useFetch({});

  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }, []);

  const moves = pokemon?.moves
  console.log('pokemos',pokemon)
  return (
    <div className="poke_card_container">
      <div className="infoCard_container">
    
        <div className="nameinfo"><h2>{pokemon?.name}</h2></div>
        <div className="icon_type_info" style={{ backgroundImage: `url(${typePokemon[0][pokemon?.types?.[0].type.name]})`}}></div>
       
       
        <div className="img_pokemoninfo">
          <img src={pokemon?.sprites?.other.dream_world.front_default || pokemon?.sprites?.front_shiny} alt="image the pokemon" />
        </div>

        <div className="stats">
          <h3>
            hit Points <span>{pokemon?.stats?.[0].base_stat}/150</span>
          </h3>
          <div className="bar_container">
            <div
              className="bar"
              style={{ width: `${(pokemon?.stats?.[0].base_stat * 1) / 1.5}%` }}
            ></div>
          </div>
          <h3>
            attack <span>{pokemon?.stats?.[1].base_stat}/150</span>
          </h3>
          <div className="bar_container">
            <div
              className="bar"
              style={{ width: `${(pokemon?.stats?.[1].base_stat * 1) / 1.5}%` }}
            ></div>
          </div>
          <h3>
            defense <span>{pokemon?.stats?.[2].base_stat}/150</span>
          </h3>
          <div className="bar_container">
            <div
              className="bar"
              style={{ width: `${(pokemon?.stats?.[2].base_stat * 1) / 1.5}%` }}
            ></div>
          </div>
          <h3>
            speed <span>{pokemon?.stats?.[5].base_stat}/150</span>
          </h3>
          <div className="bar_container">
            <div
              className="bar"
              style={{ width: `${(pokemon?.stats?.[5].base_stat * 1) / 1.5}%` }}
            ></div>
          </div>
        </div>
       
      <div className="container_skills">  
        <div className="container_title_skill">
          <div className=""><h3>Type</h3></div>
          <div className=""><h3>skill</h3></div>
        </div>

        <div className="container_type">
          <div className="tInfo1"><h3>{pokemon?.types?.[0].type.name}</h3></div>
          <div className="tInfo2"><h3>{pokemon?.types?.[1]?.type.name}</h3></div>
          <div className="skillInf1"><h3>{pokemon?.abilities?.[0].ability.name}</h3></div>
          <div className="skillInf2"><h3>{pokemon?.abilities?.[1]?.ability.name}</h3></div>
        </div>
      </div>

      </div>

      <div className=" movements">
        {moves?.slice(0, 20).map((m) => (
          <div className="movement" key={m.move.url}>
            <h3>{m.move.name}</h3>
          </div>
        ))}
      </div>
      <div className="back2" onClick={() => navigate(-1)}>
        <img src="assets/imgPokedex/back2.png" alt="image the back to" />
      </div>
    </div>
  );
};

export default InfoPokedex;
