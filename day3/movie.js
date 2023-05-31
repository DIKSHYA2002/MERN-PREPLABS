var movieListClass = document.getElementsByClassName('movie-list')[0];

const data = [
    {
          name:"Legally Blonde",
          link: "https://th.bing.com/th/id/OIP._3Q0Rbcw4urAmA9Y5LFE1gHaLH?pid=ImgDet&rs=1",
          Star:"⭐⭐⭐⭐",
          Director:"Robert Luketic",
          Cast :" Reese Witherspoon",
          Release_Date:"2001",
          About:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor provident rem similique perspiciatis, voluptatum possimus at sed ex error corrupti incidunt cupiditate enim numquam exercitationem atque et, repellat quaerat! Voluptates odit blanditiis sequi quibusdam atque at praesentium mollitia, amet vero consequuntur doloremque eveniet repellat ipsa, ducimus rem labore id suscipit!"

    },
    {
        name:"Now you see me ",
        link: "https://th.bing.com/th/id/R.f27fff7c5954de04b11008d55e8ac141?rik=qdYlu%2fsMyLDBSg&riu=http%3a%2f%2fwww.newdvdreleasedates.com%2fimages%2fposters%2flarge%2fnow-you-see-me-2013-05.jpg&ehk=lSNmTBmL8W2MpTcv6b%2btGv%2bzWwEsqtOBKaZ%2fOP%2fnIxk%3d&risl=&pid=ImgRaw&r=0",
        Star:"⭐⭐⭐⭐",
        Director:"Louis Leterrier",
        Cast :" Jesse Eisenberg",
        Release_Date:"2013",
        About:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor provident rem similique perspiciatis, voluptatum possimus at sed ex error corrupti incidunt cupiditate enim numquam exercitationem atque et, repellat quaerat! Voluptates odit blanditiis sequi quibusdam atque at praesentium mollitia, amet vero consequuntur doloremque eveniet repellat ipsa, ducimus rem labore id suscipit!"

    },
    {
        name:"Shutter Island",
        link: "https://th.bing.com/th/id/R.9726172ece8b49a37fd03c2ce7b29d9d?rik=TCy%2f9TiU6KrLEg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2fshutter-island-movie-poster.jpg&ehk=AiJZYd7WkY5Zohc%2bEkXQ1pE%2fGHKIO7wkh3MOKCjQ8WE%3d&risl=&pid=ImgRaw&r=0",
        Star:"⭐⭐⭐⭐⭐",
        Director:"Martin Scorse",
        Cast :" Leonardo Di Caprio ",
        Release_Date:"2010",
        About:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor provident rem similique perspiciatis, voluptatum possimus at sed ex error corrupti incidunt cupiditate enim numquam exercitationem atque et, repellat quaerat! Voluptates odit blanditiis sequi quibusdam atque at praesentium mollitia, amet vero consequuntur doloremque eveniet repellat ipsa, ducimus rem labore id suscipit!"
    }
]

data.map((movie)=>{
    // let carddiv = document.createElement('div');
    // carddiv.className = 'card';

    const movieListClass = document.getElementById('movie-list');
    let div = document.createElement('div');
    div.className = "movie front";
    div.innerHTML = `<div class="date">${movie.Release_Date}</div><div class="movie-image">
    <img src=${movie.link}/>
    </div>
    <div class="movie-name">
    ${movie.name}</div><div class="movie-rating">${movie.Star}</div><div class="director">-${movie.Director}</div><div class="cast">cast-${movie.Cast}</div>`;
    movieListClass.appendChild(div);

  

})