//  function reverse(inputArray){
//  if(inputArray.length%2===0){
//  for(let i=0;i<inputArray.length/2;i++){
//     let a=inputArray[inputArray.length-i-1]
//     inputArray[inputArray.length-i-1]=inputArray[i]
//     inputArray[i]=a
    
    
//  }
//  }
//  else{
//     for(let i=0;i<Math.round(inputArray.length/2)-1;i++){
//         let a=inputArray[inputArray.length-i-1]
//         inputArray[inputArray.length-i-1]=inputArray[i]
//         inputArray[i]=a}
    
//  }
// console.log(inputArray)
// }
// let a=[1,2,3,4,5]
// reverse(a)

//     Improved version of the code
function reverse(inputArray){
    let result=[]
    for(let i=inputArray.length-1;0<=i;i--){
        result.push(inputArray[i])
    }
console.log(result)
}
let a=[1,23,8,4,9,11]
reverse(a)