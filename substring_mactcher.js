let includes=[]
 function finder(substring,string) {
    for(let j=0;j<substring.length;j++){
        
    for(let i=0;i<string.length;i++){
        if(substring[j].toLowerCase()===string[i].toLowerCase()){
            includes.push(true);
            
             finder(substring.slice(j+1),string.slice(i+1))
             break;
        }
        else{
           // includes.push(false);
            continue
        }
    }


}
}
function reslut (substring,string){
    substring='sz'
    string='slals'
    finder(substring,string)
    
    for(let i=0;i<includes.length;i++){
        if(includes[i]===true){
            return true
        }
        else{
            return false
        }
    }
}
console.log(reslut())
