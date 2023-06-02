
fetch("http://localhost:5501/posts", {
    method: "GET",
})
    .then((response) => response.json())
    .then((posts) => {
        posts.map((el) => {
            const postslist = document.getElementsByClassName('posts')[0];
            const div = document.createElement('div');
            div.className = 'post';
            div.innerHTML = `
            <div class="profilePart">
                <div class="upper-profile">
                    <img src="https://th.bing.com/th/id/OIP.gxCrcJ9wcnuS-hppF4l8ggHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="">
                    <div class="user_name">
                       <a>${el.createdBy}</a>
                    </div>
                </div>
                <div class="location">🌍${el.location}</div>
    
            </div>
            <div class="post-image">
                <img src=${el.imageLink} alt="">
            </div>
            <div class="activity">
                <div class="likes">
                    ❤️
                </div>
                <div class="comments">
                    💬
                </div>
                <div class="share">
                    📩
                </div>
                <div class='update'>
              
                </div>
                <div class="delete">
                </div>
            </div>
            <div class="caption">
                <span class="user_name">${el.createdBy}</span>
                <span id="caption">${el.caption}</span>
            </div>`;
            postslist.appendChild(div);
              const button1 = document.createElement('button');
                button1.innerText = '📌';
    
            button1.addEventListener("click", () => {
                const new_location = prompt("enter new location");
                const new_caption = prompt("enter new caption");
                const new_object = {
                    createdBy: el.createdBy,
                    location: new_location,
                    imageLink: el.imageLink,
                    caption: new_caption

                }
             
                fetch(`http://localhost:5501/posts/${el.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(new_object)
                })
                    .then((res) => res.json())
                    .then((data) => alert("updated succesfullly"));

            });
            const button4 = document.createElement("button");
            button4.innerText ="❌";
            button4.addEventListener("click",()=>{
                fetch(`http://localhost:5501/posts/${el.id}`,{
                    method:'DELETE',
                })
                .then((res) => res.json())
                .then((data) => alert("Deleted succesfullly"));
            })
            const button5 = document.createElement("button");
            button5.innerText = "➡️";
            button5.addEventListener("click", () => {
                localStorage.setItem("id", JSON.stringify(el.id));
                window.location.href = "./details.html";
            });
            const buttons = document.createElement('div');
            buttons.className='buttonsAll'
            buttons.append(button5,button1,button4);
            div.append(buttons);
         
        })
    }
    );



const id = JSON.parse(localStorage.getItem("token"));
if(id)
{
    const show = document.getElementsByClassName("loginstatus")[0];
    show.innerText='LOGOUT';
    const logbutton = document.getElementsByClassName("loginstatus")[0];
    logbutton.addEventListener("click", ()=>{
        localStorage.removeItem("token");
        window.location.href = "./login.html";
    })
}
else{
    show.innerText='LOGIN';
}

