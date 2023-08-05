let array=[3,4,2,6,7,0,8]
const sort=(array)=>{
    
for(let j=0;j<array.length;j++){
let smallest=array[j]
 for(let i=j+1;i<array.length;i++){
   if(array[i]<smallest){
    smallest=i

   }
 }
 console.log(`The first element of unsorted array is ${array[j]} and smallest is }`)
 if(array[j]>array[smallest]){
 let temp=array[j]
array[j]=array[smallest]
array[smallest]=temp
 }
}

}
sort(array)
console.log(array)