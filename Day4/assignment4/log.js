const button2 = document.getElementById("login");
button2.addEventListener("click",()=>{
    const email1= document.getElementById("logemail");
    const password1= document.getElementById("logpassword");
    fetch("http://localhost:5501/users",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((login)=>{
        console.log(login);
        const user=login.find((item)=>item.email===email1.value && item.password===password1.value);
        console.log(user);
        if(user){
            window.location.href="./posts.html"
        }
        else{
            window.location.href="./wrong.html"
        }
    });
})
