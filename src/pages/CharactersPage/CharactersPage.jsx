import axios from "axios"
import { useEffect, useState } from "react";
import Gallery from "../../components/shared/Gallery/Gallery";
// import Paginator from "../../components/shared/Paginator/Paginator";
import Searcher from "../../components/shared/Searcher/Searcher";

export default function CharactersPage() {

    // const [page, setPage] = useState(10)
    const [characters, setCharacters] = useState([])

    const getCharacters = async (searchText) => {
        const res = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character=${searchText}`);
        console.log(res);
        setCharacters(res.data);
    }
    useEffect(() => getCharacters(''), [])
    return (
        <>
            <Searcher onSubmit={getCharacters}/>
            {/* <Paginator page={page} setPage={setPage}/> */}
            <Gallery characters={characters}/> 
        </>
    ) 
}