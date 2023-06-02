const button = document.getElementById("submit");
button.addEventListener("click",()=>{
    const email1 = document.getElementById("email").value;
    const password1 = document.getElementById("password").value;
    console.log(email1  , password1)
    fetch("http://localhost:5501/users",
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

