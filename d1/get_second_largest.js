/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    let testSet = [...new Set(nums)]
    testSet.sort((a,b)=>a-b)
    return Number(testSet[testSet.length-2])
}

const test = getSecondLargest([1,2,3,4,5,6,7,8,9,10])
console.log(test)