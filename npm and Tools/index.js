let arr = [1 , 2 , 2 , 3 ,3 , 4 , 5 , 5]

let newArr = []

for(let i =  0 ; i < arr.length ; i++){
    let isDublicate =  false 
    
    for(let j = 0  ;  j < newArr.length ; j++){
        if(arr[i] === newArr[j]){
            isDublicate =  true 
            break 
        }
    }
    
    if(!isDublicate){
        newArr[newArr.length] = arr[i]
    }
}

console.log(newArr)