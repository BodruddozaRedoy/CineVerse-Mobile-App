export const  TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

const url = '/movie/movie_id?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg2NzdmM2RjZjlmYzQ4OWVjOTE5Yzc3ZGU3OWVmZiIsIm5iZiI6MTc1NTY0OTAzMS42MjcsInN1YiI6IjY4YTUxNDA3M2EwMWMxYzNlNmQ1NDljMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5hyWXoXZmeh0Zgh9z2zfckICA-9YeyKX_DCOCxvJ470'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));