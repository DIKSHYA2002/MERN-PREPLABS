let a = 10; 
console.log(a);
const sum = (a , b )=>{
    return a+b;


}
console.log(sum(3,4));
let arr = [2,3,4,5,6,7,8,9,10]
arr.forEach(element => {
    if(element%2==0)
    console.log(element);
    
});
arr.forEach(element => {
    let flag = 1;
    for (let index = 2; index <= Math.sqrt(element); index++)
    {
      if(element%index==0)
      {
        flag = 0;
      }
   
    }
    if(flag==0)
    {
        console.log( element + " is not prime");
    }
    else{
        console.log( element + " is  prime");
    }
    
});