import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedex/PokeCard"
import '../styles/pokedex.css'
import { useNavigate } from "react-router-dom"
import FilteredByType from "../components/pokedex/FiteredByType"
import usePagination from "../hooks/usepagination"
import Pagination from "../components/pokedex/Pagination"
import '../components/pokedex/style/pagination.css'
import axios from "axios"

const Pokedex = () => {
  const userName = useSelector(store => store.userName)

  const [ pokemons, getPokemons, getTypePokemos ] = useFetch()
  const [ showGif, setShowGif ] = useState(true)
  const [ search, setSearch ] = useState('')
  const [type, setType] = useState(null);
  const [ currentPage, setCurrentPage ] = useState(1);

  const itemsPerPage = 20;
  const [ paginatedData, totalPages ] = usePagination(pokemons?.results, currentPage, itemsPerPage);

  const textInput = useRef()
  const navigate = useNavigate()

/*   const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = textInput.current.value.trim().toLowerCase()
    setSearch(inputValue)
    
    textInput.current.value = ''
  } */

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = textInput.current.value.trim().toLowerCase()
    if (inputValue) {
      const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      axios.get(url)
        .then(res => setSearch(res.data))
        .catch(err => console.error(err))
    }
    textInput.current.value = ''
  }
 
  useEffect(() => {
    if (type) {
      setSearch('')
      getTypePokemos(type)
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1302'
      getPokemons(url)
      setTimeout(() => {
        setShowGif(false)
      }, 9000);
    }
  }, [ type ])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="fund_pokedex"><img src={showGif ? "/assets/imgPokedex/animacionPoke.gif" : "/assets/imgPokedex/circle.png"} alt="image background circle" /></div>
      <div className="back" onClick={() => navigate(-1)}><img src="/assets/imgPokedex/back2.png" alt="image the back to" /></div>
      <div className="title_card"> <h1>welcome <span>{userName},</span> here you can find your favorite pokemon, let's go! </h1></div>
     
     <div className="form_container">
      <form className="form_search_pokemon" onSubmit={handleSubmit}>
        <input ref={textInput} type="text" className="input_search input"/>
        <button 
          onClick={() => navigate(`/pokedex/${search}`)}
          className="btn_search"
        >
          <img src="/assets/imgPokedex/search.png" alt="image the buttom" />
        </button>
      </form>
     </div>

      <div>
        <FilteredByType
          type={type}
          setType={setType}
        />
      </div>

      <div className="cards_container">
        { search ? <PokeCard search={search}/> : (
          paginatedData?.map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
              name={poke.name}
            />
          )))
        }
      </div>

      <div className="pagination_buttons">
        {
          !search && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        }
      </div>
    </div>
  )
}

export default Pokedex