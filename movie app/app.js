const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<YOUR_API_KEY>&page=1';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=<YOUR_API_KEY>&query=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getMovies(url){
    const response = await fetch(url);
    const data = await response.json();
    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = "";

    movies.forEach(movie => {
        main.innerHTML += `
        <div class="movie">
            <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title} poster">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${movie.overview}</p>
            </div>
        </div>
        `
    })
}

function getClassByRate(vote){
    if(vote < 5){
        return "red"
    }else if(vote >= 5 && vote < 8){
        return "orange"
    }else{
        return "green"
    }
}

form.addEventListener("submit", (e) => {
    const searchQuery = search.value

    if(searchQuery && searchQuery.trim() !== ""){
        getMovies(SEARCH_URL + searchQuery) 
        search.value = "";
        search.blur();
    }
    else{
        window.location.reload();
    }
    e.preventDefault();
})

getMovies(API_URL);