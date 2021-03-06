const TMDB_API_KEY = process.env.TMDB_API_KEY;

const endpoints = {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?language=en-US&api_key=${TMDB_API_KEY}`
  },
  fetchTopRated: {
    title: 'Top Rated',
    url:`/movie/top_rated?language=en-US&api_key=${TMDB_API_KEY}`,
  },
  fetchActionMovies: {
    title: 'Action',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Action',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: 'TV Movies',
    url:`/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770`,
  },
}

export default endpoints;