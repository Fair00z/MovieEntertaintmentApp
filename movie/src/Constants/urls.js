import { API_KEY } from "./constants";

export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror= `discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance= `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const animation = `discover/movie?api_key=${API_KEY}&with_genres=16`
export const category = `genre/movie/list?api_key=${API_KEY}`
export const letest = `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const tvweek = `trending/tv/week?api_key=${API_KEY}`
export const anime = `discover/tv?api_key=${API_KEY}&with_genres=16&language=en-US&page=1`