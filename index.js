
function writeCards(arr,eventName){
  
  let arr1 = [];
for(let i=0;i < arr.length;i++){
  arr1.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
}
return arr1;
}

function countDown(i){
  
  while(i >= 0 ){
    console.log(i);
    i--;
  }
}
