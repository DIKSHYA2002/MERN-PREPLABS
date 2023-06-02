
const button = document.getElementById("submit");
button.addEventListener("click",()=>{
    const email1 = document.getElementById("email").value;
    const password1 = document.getElementById("password").value;
    console.log(email1  , password1)
    fetch("http://localhost:5501/data",
    {
        method:"POST",
        headers:{
            "Content-type" : "application/json",
        },
        body: JSON.stringify({
            "email":email1,
            "password":password1,
        }),
    });
})
const button2 = document.getElementById("login");
button2.addEventListener("click",()=>{
    const email1= document.getElementById("email1");
    const password1= document.getElementById("password1");
    fetch("http://localhost:5501/data",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((login)=>{
        console.log(login);
        const user=login.find((item)=>item.email===email1.value && item.password===password1.value);
        console.log(user);
        if(user){
            window.location.href="./index.html"
        }
        else{
            window.location.href="./wrong.html"
        }
    });
    // console.log(data);
})



