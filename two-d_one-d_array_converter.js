
// Only converts 2-d Array to 1-D
let a=[1,2,[3.1,[3.12,3.13,[3.111,3.999],3.99],3.9],4,5]

let newArray=[];
for(let i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        for(let j=0;j<a[i].length;j++){
            newArray.push(a[i][j])
        }
    }
    else{
        newArray.push(a[i])
    }
}
console.log(newArray)