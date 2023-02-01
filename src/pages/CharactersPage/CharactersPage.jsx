import axios from "axios"
import { useEffect, useState } from "react";
import Gallery from "../../components/shared/Gallery/Gallery";
import Paginator from "../../components/shared/Paginator/Paginator";

export default function CharactersPage() {

    const [page, setPage] = useState(10)
    const [characters, setCharacters] = useState([])

    const getCharacters = async (page) => {
        const res = await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`);
        console.log(res);
        setCharacters(res.data);
    }
    useEffect(() => {
        getCharacters()
    }, [page])
    return (
        <>
            <Paginator page={page} setPage={setPage}/>
            <Gallery characters={characters}/> 
        </>
    ) 
}