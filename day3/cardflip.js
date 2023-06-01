
const data = [
    {
          name:"Makhni Paneer Biryani",
          link: "https://th.bing.com/th/id/OIP.Rxwg1ixnIewEsncXIHDIQAHaLH?pid=ImgDet&rs=1",
          Star:"⭐⭐⭐⭐",
          Director:"Robert Luketic",
          Cast :" Reese Witherspoon",
          Release_Date:"2001",
          About:  "Layered with rice and doused in a creamy gravy, this mouth-watering Makhni Paneer Biryani is your new go-to favourite. A recipe that's sure to satisfy vegetarians and meat-lovers alike!"

    },
    {
        name:"Masala Bhindi ",
        link: "https://th.bing.com/th/id/OIP.GbvDF-ZbsYpSvRW08eH4yAHaEy?pid=ImgDet&rs=1",
        Star:"⭐⭐⭐⭐",
        Director:"Louis Leterrier",
        Cast :" Jesse Eisenberg",
        Release_Date:"2013",
        About:  "Reach foodie heaven in a jiffy with this quick and easy masala bhindi recipe. So spicy, so scrumptious - you'll definitely want to make this tonight. Simply pair this with piping hot parathas and you'll be good to go."

    },
    {
        name:"Pommes Gratin",
        link: "https://th.bing.com/th/id/OIP.1i6sgCe3JTGIIQctPGEOKAHaFj?pid=ImgDet&rs=1",
        Star:"⭐⭐⭐⭐⭐",
        Director:"Martin Scorse",
        Cast :" Leonardo Di Caprio ",
        Release_Date:"2010",
        About:  "Loaded with cream and flavoured with thyme, our rich potato gratin is sure to satisfy any palate. Cheddar cheese lends extra creaminess and a subtle cheesy tang to this decadent dish."
    }
]

data.map((movie)=>{
    
    const movieListClass = document.getElementsByClassName('maincontainer')[0];
    let carddiv = document.createElement('div');
    carddiv.className = 'thecard';
    let div = document.createElement('div');
    div.className = "thefront";
    div.innerHTML = `<div class="movie-image">
    <img src=${movie.link}/>
    </div>
    <div class="movie-name">
    ${movie.name}</div>
    `;
    let div2 = document.createElement('div');
    div2.className = "theback";
    div2.innerHTML = `<div class="movie-name">
    ${movie.name}</div><div class="movie-rating">${movie.Star}</div><div class="about">${movie.About}!</div>`;
    carddiv.appendChild(div);
    carddiv.appendChild(div2);
    movieListClass.appendChild(carddiv);

})