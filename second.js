// Convets any array to 1-d no matter the depth is
let a=[1,2,3,[4.1,4.2],5,6,7,[8.1,[8.12,8.19],8.9],9,10]
let newArray=[]
function converter(array){
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            converter(array[i])
        }
        else{
            newArray.push(array[i])
        }
    }

}
for(let i=0;i<a.length;i++){
    if(Array.isArray(a[i])){
        converter(a[i])
    }
    else{
        newArray.push(a[i])
    }
}
console.log(newArray)

