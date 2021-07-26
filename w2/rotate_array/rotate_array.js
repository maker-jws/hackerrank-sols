let test = [1,2,3,4,5,6,7,8,9]
const allButtons = document.querySelectorAll('#btns > button');
const btn5 = document.getElementById('btn5')
function rotateArray(arr){
    let temp = { 
    }
    let length = Math.sqrt(test.length)
    for(let i=0;i<arr.length;i++){
        const x = i%length;
        const y = Math.floor(i/length);
        // anchor
        if(x ===1 && y ===1 ){
            temp[i] = test[i]
        }
        // tl and ml
        else if((x ===0 && y === 0) || (x ==0 && y == 1 ) ){
            temp[i] = test[i+3] 
        }
        // br and mr 
        else if ((y == 2 && x == 2) || (y ==1 && x ==2)){
            temp[i] = test[i-3] 
        }
        // top row
        else if(y == 0 && x > 0){
            temp[i] = test[i-1]
        }
        // bottom row
        else if(y == 2 && x < 2){
            temp[i] = test[i+1]
        }
    }
    return Object.values(temp)
}
function handleRotate(){
    let getCurrentOrder = [...allButtons].map(btn=>btn.innerHTML)
    console.log(getCurrentOrder)
    let newOrder = rotateArray(newOrder)
    console.log(newOrder)
}
// test = rotateArray(test)
// console.log(test)
// test = rotateArray(test)
// console.log(test)
// test = rotateArray(test)
// console.log(test)
// test = rotateArray(test)
// console.log(test)

btn5.onclick = handleRotate