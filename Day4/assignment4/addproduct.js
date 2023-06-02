
const postbutton = document.getElementById('post');
postbutton.addEventListener("click",()=>{
    const createdBy1 = document.getElementById('user_name').value;
    const location1 = document.getElementById('user_location').value;
    const image_link1 = document.getElementById('user_image').value;
    const user_caption1 = document.getElementById('user_caption').value;
    if(createdBy1!="" && image_link1!="" && location1!="" && user_caption1!=""){
        fetch("http://localhost:5501/posts",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify({
            id:Date.now(),
           createdBy: createdBy1,
           location:location1,
           imageLink:image_link1,
           caption:user_caption1
        })
        }).then((data)=>{window.location.href = "./posts.html"});
    }
    else{
        alert("Fill in all blank");
    }
});


    // const createdBy1 = document.getElementById('user_name').value;
    // const location1 = document.getElementById('user_location').value;
    // const image_link1 = document.getElementById('user_image').value;
    // const user_caption1 = document.getElementById('user_caption').value;
    // if(createdBy1!="" && image_link1!="" && location1!="" && user_caption1!=""){
    //     fetch("http://localhost:5501/posts",{
    //     method : "PUT",
    //     headers : {
    //         "Content-type" : "application/json",
    //     },
    //     body : JSON.stringify({
    //         id:Date.now(),
    //        createdBy: createdBy1,
    //        location:location1,
    //        imageLink:image_link1,
    //        caption:user_caption1
    //     })
    //     }).then((data)=>{window.location.href = "./posts.html"});
    // }
    // else{
    //     alert("Fill in all blank");
    // }
// });