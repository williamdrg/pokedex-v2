import axios from "axios"
import { useState } from "react"


const useFetch = () => {
  const [ appiData, setAppiData ] = useState()
  const getApi = (url) => {
    axios.get(url)
      .then(res => setAppiData(res.data))
      .catch(err => console.error(err))
  }


  return [ appiData, getApi ]
}

export default useFetch