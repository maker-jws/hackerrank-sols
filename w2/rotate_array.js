let test = [1,2,3,4,5,6,7,8,9]

function rotateArray(arr){
    let temp = { 
    }
    let length = Math.sqrt(test.length)
    for(let i=0;i<arr.length;i++){
        const x = i%length;
        const y = Math.floor(i/length);
        // tl corner
        if(x ===1 && y ===1 ){
            temp[i] = test[i]
        }
        else if((x ===0 && y === 0) || (x ==0 && y == 1 ) ){
            temp[i] = test[i+3] 
        }
        // middle rows 
        else if ((y == 2 && x == 2) || (y ==1 && x ==2)){
            temp[i] = test[i-3] 
        }
        else if(y == 0 && x > 0){
            temp[i] = test[i-1]
        }
        else if(y == 2 && x < 2){
            temp[i] = test[i+1]
        }
        //br
    }
    return Object.values(temp)
}
test = rotateArray(test)
console.log(test)
test = rotateArray(test)
console.log(test)
test = rotateArray(test)
console.log(test)
test = rotateArray(test)
console.log(test)