const id = JSON.parse(localStorage.getItem("id"));
const show = document.getElementsByClassName("details")[0];
fetch(`http://localhost:5501/posts/${id}`,{
    method:"GET",
})
.then((response) => response.json())
.then((data) => appendData(data));

function appendData(data) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = data.imageLink;
    const item = document.createElement("h1");
    item.innerText = data.createdBy;
    div.append(img, item);
    show.append(div);
}