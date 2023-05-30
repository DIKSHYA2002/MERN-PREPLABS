

const ShowImage=()=>{
    if(document.getElementsByClassName('image1')[0]==undefined)
    {
        let imagediv=document.createElement('div');
        imagediv.className += 'image1';
        let image = document.createElement('img');
        imagediv.appendChild(image);
       image.src="https://th.bing.com/th/id/OIP.9cswKAdU31F1YvRwRPbfXAHaFD?w=257&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7";
      let imageShow= document.getElementsByClassName('image-show')[0];
      imageShow.appendChild(imagediv);
    }

    else{
        let imageShow= document.getElementsByClassName('image-show')[0];     
        if (imageShow.hasChildNodes()) {
            imageShow.removeChild(imageShow.children[1]);
          }

    }
  
}
const  addRow=()=>{
     let table = document.getElementsByTagName('table')[0];
     let Row = document.createElement('tr');
     Row.innerHTML= '<td>Female</td><td>Dikshya</td><td>6</td><td>434544</td>';
     table.appendChild(Row);
}
const deleteRow=()=>{
    let table = document.getElementsByTagName('table')[0];
    table.getElementsByTagName('tr')[1].remove();

}



const deleteTable=()=>{
    let table = document.getElementsByTagName('table')[0];
    table.remove();
   
}


