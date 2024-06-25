import { useEffect, useState } from "react";
import './style/filteredByType.css'
import useFetch from "../../hooks/useFetch";

const FilteredByType = ({ type, setType }) => {

  const [ typePokemos, getTypePokemons ] = useFetch()

  useEffect(() => {
    getTypePokemons('https://pokeapi.co/api/v2/type/')
    
  }, [type])

  const handleChange = (e) => {
    e.preventDefault()
    setType(e.target.value);
    console.log('hola', e.target.value)
  };

  return (
      <div className="content_select">
          <select onChange={handleChange}>
            <option value="">All Pokemons</option>
          {
            typePokemos?.results?.map( element => (
              <option value={element.url} 
                key={element.url}
              >
                {element.name}
              </option>
            ))
          }
          </select>
          <i></i> 
      </div>
  );
};

export default FilteredByType;