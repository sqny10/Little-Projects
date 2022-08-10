const CLIENTID = "<Your_CLIENTID>";
const CLIENTKEY = "<Your_CLIENTKEY>";
const APIURL = 'https://api.github.com/users/';
const REPOCOUNT = 3;
const REPOSORT = "created: asc";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username = "bradtraversy"){
    try{
        const {data} = await axios(`${APIURL}${username}?client_id=${CLIENTID}&client_secret${CLIENTKEY}`);
        const repoData = await axios(`${APIURL}${username}/repos?per_page=${REPOCOUNT}&sort=${REPOSORT}&client_id=${CLIENTID}&client_secret${CLIENTKEY}`)
        console.log(repoData.data);
        setUserCard(data, repoData.data)
    } catch(err){
        if(err.response.status == 404){
            createErrorCard("User Name is not exist.")
        }
    }
}

form.addEventListener("submit", (e) => {
    const user = search.value;
    if(user){
        getUser(user);
        search.value = "";
    }
    
    e.preventDefault();
})

function setUserCard(data, repo){
    main.innerHTML = `
    <div class="card">
        <img src="${data.avatar_url}" alt="${data.login} profile picture" class="avatar">
        <div class="user-info">
            <h2>${data.login}</h2>
            <p>${data.bio || "User has no available bio"}</p>
            <ul>
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>Following</strong></li>
                <li>${data.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos">
                <a href="#" class="repo">${repo[0].name}</a>
                <a href="#" class="repo">${repo[1].name}</a>
                <a href="#" class="repo">${repo[2].name}</a>
            </div>
        </div>
    </div>`
}

function createErrorCard(msg){
    main.innerHTML = `<div class="card"><h1>${msg}</h1></div>`
}

getUser();