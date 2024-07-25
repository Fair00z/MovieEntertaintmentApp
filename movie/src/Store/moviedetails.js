import { createContext, useState } from "react"


export const MovieDetailContext = createContext()

export default function MovieContext({children}){
    const [movieId,setMovieId]=useState('')
    return(
        <MovieDetailContext.Provider value={{movieId,setMovieId}}>
            {children}
        </MovieDetailContext.Provider>
    )
}